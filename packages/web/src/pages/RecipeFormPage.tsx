import { useEffect, useState, type FormEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
    INGREDIENT_CATEGORIES,
    RECIPE_TAGS,
    UNITS,
    type IngredientCategory,
    type RecipeIngredient,
    type RecipeStep,
    type Unit
} from '@emealplan/domain';

import { createRecipe, fetchRecipe, updateRecipe, type RecipeInput } from '../api/recipes';
import { ErrorState, LoadingState } from '../components/RequestState';
import { useFetch } from '../utilities/useFetch';

function newIngredient(): RecipeIngredient {
    return { id: crypto.randomUUID(), name: '', quantity: 1, unit: 'pcs', category: 'other' };
}

function newStep(order: number): RecipeStep {
    return { id: crypto.randomUUID(), order, instruction: '', durationMinutes: 5 };
}

const EMPTY_FORM: RecipeInput = {
    name: '',
    description: '',
    portions: 4,
    prepTimeMinutes: 10,
    cookTimeMinutes: 20,
    ingredients: [newIngredient()],
    steps: [newStep(1)],
    tags: [],
    notes: ''
};

export function RecipeFormPage() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const isEditing = Boolean(id);

    const existing = useFetch(() => (id ? fetchRecipe(id) : Promise.resolve(undefined)), [id]);
    const [form, setForm] = useState<RecipeInput>(EMPTY_FORM);

    useEffect(() => {
        if (existing.data) setForm(existing.data);
    }, [existing.data]);

    function updateIngredient(index: number, patch: Partial<RecipeIngredient>) {
        setForm((current) => ({
            ...current,
            ingredients: current.ingredients.map((ingredient, i) => (i === index ? { ...ingredient, ...patch } : ingredient))
        }));
    }

    function updateStep(index: number, patch: Partial<RecipeStep>) {
        setForm((current) => ({
            ...current,
            steps: current.steps.map((step, i) => (i === index ? { ...step, ...patch } : step))
        }));
    }

    function toggleTag(tag: string) {
        setForm((current) => ({
            ...current,
            tags: current.tags.includes(tag) ? current.tags.filter((candidate) => candidate !== tag) : [...current.tags, tag]
        }));
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        const saved = isEditing && id ? await updateRecipe(id, form) : await createRecipe(form);
        navigate(`/recipes/${saved.id}`);
    }

    if (isEditing && existing.loading) return <LoadingState label='Loading recipe…' />;
    if (isEditing && existing.error) return <ErrorState error={existing.error} />;

    return (
        <section className='page'>
            <h1 className='page__title'>{isEditing ? 'Edit recipe' : 'New recipe'}</h1>

            <form className='recipe-form' onSubmit={handleSubmit}>
                <label>
                    Name
                    <input required value={form.name} onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))} />
                </label>

                <label>
                    Description
                    <textarea
                        value={form.description}
                        onChange={(event) => setForm((current) => ({ ...current, description: event.target.value }))}
                    />
                </label>

                <div className='recipe-form__row'>
                    <label>
                        Portions
                        <input
                            type='number'
                            min={1}
                            value={form.portions}
                            onChange={(event) => setForm((current) => ({ ...current, portions: Number(event.target.value) }))}
                        />
                    </label>
                    <label>
                        Prep time (min)
                        <input
                            type='number'
                            min={0}
                            value={form.prepTimeMinutes}
                            onChange={(event) => setForm((current) => ({ ...current, prepTimeMinutes: Number(event.target.value) }))}
                        />
                    </label>
                    <label>
                        Cook time (min)
                        <input
                            type='number'
                            min={0}
                            value={form.cookTimeMinutes}
                            onChange={(event) => setForm((current) => ({ ...current, cookTimeMinutes: Number(event.target.value) }))}
                        />
                    </label>
                </div>

                <fieldset>
                    <legend>Categories</legend>
                    {RECIPE_TAGS.map((tag) => (
                        <label key={tag} className='checkbox-label'>
                            <input type='checkbox' checked={form.tags.includes(tag)} onChange={() => toggleTag(tag)} />
                            {tag.replace('-', ' ')}
                        </label>
                    ))}
                </fieldset>

                <fieldset>
                    <legend>Ingredients</legend>
                    {form.ingredients.map((ingredient, index) => (
                        <div key={ingredient.id} className='recipe-form__row'>
                            <input
                                placeholder='Name'
                                value={ingredient.name}
                                onChange={(event) => updateIngredient(index, { name: event.target.value })}
                            />
                            <input
                                type='number'
                                min={0}
                                step='any'
                                value={ingredient.quantity}
                                onChange={(event) => updateIngredient(index, { quantity: Number(event.target.value) })}
                            />
                            <select value={ingredient.unit} onChange={(event) => updateIngredient(index, { unit: event.target.value as Unit })}>
                                {UNITS.map((unit) => (
                                    <option key={unit} value={unit}>
                                        {unit}
                                    </option>
                                ))}
                            </select>
                            <select
                                value={ingredient.category}
                                onChange={(event) => updateIngredient(index, { category: event.target.value as IngredientCategory })}>
                                {INGREDIENT_CATEGORIES.map((category) => (
                                    <option key={category} value={category}>
                                        {category.replace('-', ' ')}
                                    </option>
                                ))}
                            </select>
                            <button
                                type='button'
                                className='button button--ghost'
                                onClick={() =>
                                    setForm((current) => ({
                                        ...current,
                                        ingredients: current.ingredients.filter((_, i) => i !== index)
                                    }))
                                }>
                                Remove
                            </button>
                        </div>
                    ))}
                    <button
                        type='button'
                        className='button'
                        onClick={() => setForm((current) => ({ ...current, ingredients: [...current.ingredients, newIngredient()] }))}>
                        + Add ingredient
                    </button>
                </fieldset>

                <fieldset>
                    <legend>Steps</legend>
                    {form.steps.map((step, index) => (
                        <div key={step.id} className='recipe-form__row'>
                            <span>{index + 1}.</span>
                            <input
                                placeholder='What to do'
                                value={step.instruction}
                                onChange={(event) => updateStep(index, { instruction: event.target.value })}
                            />
                            <input
                                type='number'
                                min={0}
                                value={step.durationMinutes}
                                onChange={(event) => updateStep(index, { durationMinutes: Number(event.target.value) })}
                            />
                            <span>min</span>
                            <button
                                type='button'
                                className='button button--ghost'
                                onClick={() =>
                                    setForm((current) => ({
                                        ...current,
                                        steps: current.steps.filter((_, i) => i !== index).map((s, i) => ({ ...s, order: i + 1 }))
                                    }))
                                }>
                                Remove
                            </button>
                        </div>
                    ))}
                    <button
                        type='button'
                        className='button'
                        onClick={() => setForm((current) => ({ ...current, steps: [...current.steps, newStep(current.steps.length + 1)] }))}>
                        + Add step
                    </button>
                </fieldset>

                <label>
                    Notes
                    <textarea value={form.notes ?? ''} onChange={(event) => setForm((current) => ({ ...current, notes: event.target.value }))} />
                </label>

                <button type='submit' className='button button--primary'>
                    {isEditing ? 'Save changes' : 'Create recipe'}
                </button>
            </form>
        </section>
    );
}
