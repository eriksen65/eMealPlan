import { useEffect } from 'react';
import type { MockRecipe } from '../data/mockRecipes';
import { formatTimeEstimates } from '../utilities/formatTimeEstimates';

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
                    {recipe.emoji}
                </span>

                <h2 className='modal__title'>{recipe.title}</h2>
                <p className='modal__subtitle'>{recipe.subtitle}</p>
                <p className='modal__description'>{recipe.description}</p>

                <p className='card__meta'>{formatTimeEstimates(recipe.timeEstimates)}</p>

                <div className='recipe-card__tags'>
                    {recipe.tags.map((tag) => (
                        <span key={tag} className='tag'>
                            {tag}
                        </span>
                    ))}
                </div>

                <h3 className='section-title'>Ingredienser</h3>
                <ul className='ingredient-list'>
                    {recipe.ingredients.map((ingredient) => (
                        <li key={ingredient}>{ingredient}</li>
                    ))}
                </ul>

                <h3 className='section-title'>Fremgangsmåde</h3>
                <ol className='step-list'>
                    {recipe.steps.map((step) => (
                        <li key={step}>{step}</li>
                    ))}
                </ol>
            </div>
        </div>
    );
}
