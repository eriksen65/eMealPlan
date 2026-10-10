import { Link } from 'react-router-dom';
import type { Recipe } from '@emealplan/domain';

import { formatTotalTime } from '../utilities/format';

interface RecipeCardProps {
    recipe: Recipe;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
    return (
        <Link to={`/recipes/${recipe.id}`} className='recipe-card'>
            {recipe.imageUrl ? (
                <img className='recipe-card__image' src={recipe.imageUrl} alt='' />
            ) : (
                <div className='recipe-card__image recipe-card__image--placeholder' aria-hidden='true'>
                    🍽️
                </div>
            )}
            <div className='recipe-card__body'>
                <h3 className='recipe-card__name'>{recipe.name}</h3>
                <p className='recipe-card__meta'>
                    {formatTotalTime(recipe)} · {recipe.portions} portions
                </p>
                <div className='recipe-card__tags'>
                    {recipe.tags.map((tag) => (
                        <span key={tag} className='tag'>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </Link>
    );
}
