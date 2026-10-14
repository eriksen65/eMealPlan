import { useEffect } from 'react';
import type { MockRecipe } from '../data/mockRecipes';
import { formatTimeEstimates } from '../utilities/formatTimeEstimates';
import { formatRecipeIngredient } from '../utilities/formatRecipeIngredient';
import { formatRecipeTag } from '../utilities/formatRecipeTag';

interface RecipeDetailModalProps {
    recipe: MockRecipe;
    onClose: () => void;
}

export function RecipeDetailModal({ recipe, onClose }: RecipeDetailModalProps) {
    useEffect(() => {
        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === 'Escape') onClose();
        }
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

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

                <h3 className='section-title'>Ingredienser</h3>
                <ul className='ingredient-list'>
                    {recipe.ingredients.map((ingredient) => (
                        <li key={ingredient.ingredientId}>{formatRecipeIngredient(ingredient)}</li>
                    ))}
                </ul>

                <h3 className='section-title'>Fremgangsmåde</h3>
                <ol className='step-list'>
                    {recipe.steps.map((step) => (
                        <li key={step.title}>
                            <p className='step-list__title'>{step.title}</p>
                            <p className='step-list__instruction'>{step.instruction}</p>
                            {step.tip && <p className='step-list__tip'>Tip: {step.tip}</p>}
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}
