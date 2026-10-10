import type { MockRecipe } from '../data/mockRecipes';

interface RecipeCardProps {
    recipe: MockRecipe;
    onClick: (recipe: MockRecipe) => void;
}

export function RecipeCard({ recipe, onClick }: RecipeCardProps) {
    return (
        <button type='button' className='recipe-card' onClick={() => onClick(recipe)}>
            <span className='recipe-card__image' aria-hidden='true'>
                {recipe.emoji}
            </span>
            <span className='recipe-card__body'>
                <span className='recipe-card__name'>{recipe.name}</span>
                <span className='recipe-card__meta'>
                    {recipe.totalTimeMinutes} min · {recipe.portions} portions
                </span>
                <span className='recipe-card__tags'>
                    {recipe.tags.map((tag) => (
                        <span key={tag} className='tag'>
                            {tag}
                        </span>
                    ))}
                </span>
            </span>
        </button>
    );
}
