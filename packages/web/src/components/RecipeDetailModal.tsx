import { useEffect, useState } from 'react';
import type { Recipe, RecipeIngredient } from '@emealplan/domain';
import type { Ingredient } from '@emealplan/domain';
import { formatTimeEstimates } from '../utilities/formatTimeEstimates';
import { formatRecipeIngredient } from '../utilities/formatRecipeIngredient';
import { formatRecipeTag } from '../utilities/formatRecipeTag';
import { computePortionBounds, scaleIngredientAmount } from '../utilities/scaleIngredientAmount';
import { InfoTooltip } from './InfoTooltip';
import { STAPLES_INFO_TEXT } from '../utilities/staplesInfoText';

interface RecipeDetailModalProps {
    recipe: Recipe;
    ingredients: Ingredient[];
    onSelectIngredient: (ingredient: Ingredient) => void;
    onClose: () => void;
}

export function RecipeDetailModal({ recipe, ingredients, onSelectIngredient, onClose }: RecipeDetailModalProps) {
    const renderIngredient = (recipeIngredient: RecipeIngredient) => {
        const homemadeIngredient = ingredients.find((candidate) => candidate.id === recipeIngredient.ingredientId && candidate.homemade);
        return (
            <>
                {formatRecipeIngredient(recipeIngredient, ingredients)}
                {homemadeIngredient && (
                    <button type='button' className='homemade-badge' onClick={() => onSelectIngredient(homemadeIngredient)}>
                        👩‍🍳 Kan laves selv
                    </button>
                )}
            </>
        );
    };

    const isStapleIngredient = (recipeIngredient: RecipeIngredient): boolean =>
        ingredients.find((candidate) => candidate.id === recipeIngredient.ingredientId)?.isStaple ?? false;
    const [portions, setPortions] = useState(recipe.baseServings);
    const portionBounds = computePortionBounds(recipe.ingredients, recipe.baseServings);

    useEffect(() => {
        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === 'Escape') onClose();
        }
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    const scaledIngredients = recipe.ingredients.map((ingredient) => ({
        ...ingredient,
        amount: scaleIngredientAmount(ingredient, recipe.baseServings, portions)
    }));
    const coreIngredients = scaledIngredients.filter((ingredient) => !isStapleIngredient(ingredient));
    const stapleIngredients = scaledIngredients.filter((ingredient) => isStapleIngredient(ingredient));

    return (
        <div className='modal-overlay' onClick={onClose}>
            <div className='modal' role='dialog' aria-modal='true' aria-label={recipe.title} onClick={(event) => event.stopPropagation()}>
                <button type='button' className='modal__close' onClick={onClose} aria-label='Luk opskrift'>
                    ✕
                </button>

                <span className='modal__hero' aria-hidden='true'>
                    {recipe.image ? <img src={recipe.image} alt='' className='modal__photo' /> : recipe.emoji}
                </span>

                <h2 className='modal__title'>{recipe.title}</h2>
                <p className='modal__subtitle'>{recipe.subtitle}</p>
                <p className='modal__description'>{recipe.description}</p>

                <p className='card__meta'>{formatTimeEstimates(recipe.timeEstimates)}</p>

                <div className='recipe-card__tags'>
                    {recipe.tags.map((tag) => (
                        <span key={tag} className='tag'>
                            {formatRecipeTag(tag)}
                        </span>
                    ))}
                </div>

                <div className='section-title-row'>
                    <h3 className='section-title'>Ingredienser</h3>
                    <div className='portion-stepper'>
                        <button
                            type='button'
                            className='portion-stepper__button'
                            onClick={() => setPortions((current) => Math.max(portionBounds.min, current - 1))}
                            disabled={portions <= portionBounds.min}
                            aria-label='Færre portioner'>
                            −
                        </button>
                        <span className='portion-stepper__value'>{portions === 1 ? '1 portion' : `${portions} portioner`}</span>
                        <button
                            type='button'
                            className='portion-stepper__button'
                            onClick={() => setPortions((current) => Math.min(portionBounds.max, current + 1))}
                            disabled={portions >= portionBounds.max}
                            aria-label='Flere portioner'>
                            +
                        </button>
                    </div>
                </div>
                <ul className='ingredient-list'>
                    {coreIngredients.map((ingredient, index) => (
                        <li key={`${ingredient.ingredientId}-${index}`}>{renderIngredient(ingredient)}</li>
                    ))}
                    {stapleIngredients.length > 0 && (
                        <>
                            <li className='ingredient-list__divider' role='presentation'>
                                Basisvarer
                                <InfoTooltip text={STAPLES_INFO_TEXT} />
                            </li>
                            {stapleIngredients.map((ingredient, index) => (
                                <li key={`${ingredient.ingredientId}-${index}`}>{renderIngredient(ingredient)}</li>
                            ))}
                        </>
                    )}
                </ul>

                <h3 className='section-title'>Fremgangsmåde</h3>
                <ol className='step-list'>
                    {recipe.steps.map((step, index) => (
                        <li key={step.title}>
                            {step.image && (
                                <span className='step-list__image-wrap'>
                                    <img src={step.image} alt='' className='step-list__photo' />
                                    <span className='step-list__number'>{index + 1}</span>
                                </span>
                            )}
                            <p className='step-list__title'>{step.title}</p>
                            <p className='step-list__instruction'>{step.instruction}</p>
                            {step.tip && <p className='step-list__tip'>Tip: {step.tip}</p>}
                            {step.vigtig && <p className='step-list__vigtig'>Vigtigt: {step.vigtig}</p>}
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}
