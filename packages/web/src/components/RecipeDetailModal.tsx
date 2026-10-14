import { useEffect, useState } from 'react';
import type { MockRecipe, RecipeIngredient } from '../data/mockRecipes';
import { MOCK_INGREDIENTS } from '../data/mockIngredients';
import { formatTimeEstimates } from '../utilities/formatTimeEstimates';
import { formatRecipeIngredient } from '../utilities/formatRecipeIngredient';
import { formatRecipeTag } from '../utilities/formatRecipeTag';
import { PORTION_BOUNDS, scaleIngredientAmount } from '../utilities/scaleIngredientAmount';

interface RecipeDetailModalProps {
    recipe: MockRecipe;
    onClose: () => void;
}

function isStapleIngredient(recipeIngredient: RecipeIngredient): boolean {
    return MOCK_INGREDIENTS.find((candidate) => candidate.id === recipeIngredient.ingredientId)?.isStaple ?? false;
}

export function RecipeDetailModal({ recipe, onClose }: RecipeDetailModalProps) {
    const [portions, setPortions] = useState(recipe.baseServings);

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
                            onClick={() => setPortions((current) => Math.max(PORTION_BOUNDS.min, current - 1))}
                            disabled={portions <= PORTION_BOUNDS.min}
                            aria-label='Færre portioner'>
                            −
                        </button>
                        <span className='portion-stepper__value'>{portions === 1 ? '1 portion' : `${portions} portioner`}</span>
                        <button
                            type='button'
                            className='portion-stepper__button'
                            onClick={() => setPortions((current) => Math.min(PORTION_BOUNDS.max, current + 1))}
                            disabled={portions >= PORTION_BOUNDS.max}
                            aria-label='Flere portioner'>
                            +
                        </button>
                    </div>
                </div>
                <ul className='ingredient-list'>
                    {coreIngredients.map((ingredient, index) => (
                        <li key={`${ingredient.ingredientId}-${index}`}>{formatRecipeIngredient(ingredient)}</li>
                    ))}
                    {stapleIngredients.length > 0 && (
                        <>
                            <li className='ingredient-list__divider' role='presentation'>
                                Basisvarer
                            </li>
                            {stapleIngredients.map((ingredient, index) => (
                                <li key={`${ingredient.ingredientId}-${index}`}>{formatRecipeIngredient(ingredient)}</li>
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
