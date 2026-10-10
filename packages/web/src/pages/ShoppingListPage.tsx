import { useState, type FormEvent } from 'react';
import { getWeekStartDate, INGREDIENT_CATEGORIES, todayIsoDate, UNITS, type IngredientCategory, type Unit } from '@emealplan/domain';

import { addManualItem, fetchShoppingList, removeManualItem, setItemChecked } from '../api/shoppingList';
import { ErrorState, LoadingState } from '../components/RequestState';
import { useFetch } from '../utilities/useFetch';
import { capitalize } from '../utilities/format';

export function ShoppingListPage() {
    const weekStartDate = getWeekStartDate(todayIsoDate());
    const shoppingList = useFetch(() => fetchShoppingList(weekStartDate), [weekStartDate]);

    const [newItemName, setNewItemName] = useState('');
    const [newItemQuantity, setNewItemQuantity] = useState(1);
    const [newItemUnit, setNewItemUnit] = useState<Unit>('pcs');
    const [newItemCategory, setNewItemCategory] = useState<IngredientCategory>('other');

    async function handleToggle(itemId: string, checked: boolean) {
        const updated = await setItemChecked(weekStartDate, itemId, checked);
        shoppingList.setData(updated);
    }

    async function handleRemove(itemId: string) {
        const updated = await removeManualItem(weekStartDate, itemId);
        shoppingList.setData(updated);
    }

    async function handleAddItem(event: FormEvent) {
        event.preventDefault();
        if (!newItemName.trim()) return;
        const updated = await addManualItem(weekStartDate, {
            name: newItemName.trim(),
            quantity: newItemQuantity,
            unit: newItemUnit,
            category: newItemCategory
        });
        shoppingList.setData(updated);
        setNewItemName('');
        setNewItemQuantity(1);
    }

    if (shoppingList.loading) return <LoadingState label='Loading shopping list…' />;
    if (shoppingList.error) return <ErrorState error={shoppingList.error} />;
    if (!shoppingList.data) return null;

    const itemsByCategory = new Map<IngredientCategory, typeof shoppingList.data.items>();
    for (const item of shoppingList.data.items) {
        const group = itemsByCategory.get(item.category) ?? [];
        group.push(item);
        itemsByCategory.set(item.category, group);
    }

    return (
        <section className='page'>
            <h1 className='page__title'>Shopping list</h1>

            {INGREDIENT_CATEGORIES.filter((category) => itemsByCategory.has(category)).map((category) => (
                <div key={category} className='shopping-category'>
                    <h2 className='section-title'>{capitalize(category.replace('-', ' '))}</h2>
                    <ul className='task-list'>
                        {itemsByCategory.get(category)?.map((item) => (
                            <li key={item.id} className={`task-list__item${item.checked ? ' task-list__item--done' : ''}`}>
                                <label>
                                    <input type='checkbox' checked={item.checked} onChange={(event) => handleToggle(item.id, event.target.checked)} />
                                    <span className='task-list__description'>
                                        {item.quantity} {item.unit} {item.name}
                                    </span>
                                </label>
                                {item.manuallyAdded && (
                                    <button type='button' className='button button--ghost' onClick={() => handleRemove(item.id)}>
                                        Remove
                                    </button>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}

            <form className='add-item-form' onSubmit={handleAddItem}>
                <h2 className='section-title'>Add an item</h2>
                <input type='text' placeholder='Item name' value={newItemName} onChange={(event) => setNewItemName(event.target.value)} />
                <input
                    type='number'
                    min={0}
                    step='any'
                    value={newItemQuantity}
                    onChange={(event) => setNewItemQuantity(Number(event.target.value))}
                />
                <select value={newItemUnit} onChange={(event) => setNewItemUnit(event.target.value as Unit)}>
                    {UNITS.map((unit) => (
                        <option key={unit} value={unit}>
                            {unit}
                        </option>
                    ))}
                </select>
                <select value={newItemCategory} onChange={(event) => setNewItemCategory(event.target.value as IngredientCategory)}>
                    {INGREDIENT_CATEGORIES.map((category) => (
                        <option key={category} value={category}>
                            {capitalize(category.replace('-', ' '))}
                        </option>
                    ))}
                </select>
                <button type='submit' className='button'>
                    Add item
                </button>
            </form>
        </section>
    );
}
