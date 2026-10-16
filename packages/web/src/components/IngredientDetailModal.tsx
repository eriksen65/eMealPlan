import { useEffect } from 'react';
import type { Ingredient } from '@emealplan/domain';
import { formatDietaryProperty } from '../utilities/formatDietaryProperty';
import { formatUnit } from '../utilities/formatUnit';
import { HomemadeSection } from './HomemadeSection';

interface IngredientDetailModalProps {
    ingredient: Ingredient;
    ingredients: Ingredient[];
    onSelectIngredient: (ingredient: Ingredient) => void;
    onClose: () => void;
}

export function IngredientDetailModal({ ingredient, ingredients, onSelectIngredient, onClose }: IngredientDetailModalProps) {
    useEffect(() => {
        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === 'Escape') onClose();
        }
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    const nutrition = ingredient.nutritionPer100g;
    const homemade = ingredient.homemade;

    return (
        <div className='modal-overlay' onClick={onClose}>
            <div className='modal' role='dialog' aria-modal='true' aria-label={ingredient.name} onClick={(event) => event.stopPropagation()}>
                <button type='button' className='modal__close' onClick={onClose} aria-label='Luk ingrediens'>
                    ✕
                </button>

                <span className='modal__hero' aria-hidden='true'>
                    {ingredient.imageUrl ? <img src={ingredient.imageUrl} alt='' className='modal__photo' /> : ingredient.emoji}
                </span>

                <h2 className='modal__title'>{ingredient.name}</h2>

                {ingredient.dietaryProperties.length > 0 && (
                    <div className='ingredient-modal__badges'>
                        {ingredient.dietaryProperties.map((property) => (
                            <span key={property} className='tag tag--dietary'>
                                {formatDietaryProperty(property)}
                            </span>
                        ))}
                    </div>
                )}

                {homemade && <HomemadeSection key={ingredient.id} homemade={homemade} ingredients={ingredients} onSelectIngredient={onSelectIngredient} />}

                {nutrition && (
                    <>
                        <h3 className='section-title'>Næringsindhold pr. 100 g</h3>
                        <table className='nutrition-table'>
                            <tbody>
                                <tr>
                                    <th>Energi</th>
                                    <td>{nutrition.energyKcal} kcal</td>
                                </tr>
                                <tr>
                                    <th>Fedt</th>
                                    <td>{nutrition.fat} g</td>
                                </tr>
                                <tr className='nutrition-table__sub-row'>
                                    <th>heraf mættede fedtsyrer</th>
                                    <td>{nutrition.saturatedFat} g</td>
                                </tr>
                                <tr>
                                    <th>Kulhydrat</th>
                                    <td>{nutrition.carbohydrates} g</td>
                                </tr>
                                <tr className='nutrition-table__sub-row'>
                                    <th>heraf sukkerarter</th>
                                    <td>{nutrition.sugars} g</td>
                                </tr>
                                <tr>
                                    <th>Kostfibre</th>
                                    <td>{nutrition.fiber} g</td>
                                </tr>
                                <tr>
                                    <th>Protein</th>
                                    <td>{nutrition.protein} g</td>
                                </tr>
                                <tr>
                                    <th>Salt</th>
                                    <td>{nutrition.salt} g</td>
                                </tr>
                            </tbody>
                        </table>
                    </>
                )}

                {ingredient.unitConversions && ingredient.unitConversions.length > 0 && (
                    <>
                        <h3 className='section-title'>Omregning</h3>
                        <ul className='conversion-list'>
                            {ingredient.unitConversions.map((conversion) => (
                                <li key={conversion.unit}>
                                    1 {formatUnit(conversion.unit)} = {conversion.grams} g
                                </li>
                            ))}
                        </ul>
                    </>
                )}
            </div>
        </div>
    );
}
