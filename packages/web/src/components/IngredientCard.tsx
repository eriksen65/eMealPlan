import type { Ingredient } from '../data/mockIngredients';

interface IngredientCardProps {
    ingredient: Ingredient;
}

export function IngredientCard({ ingredient }: IngredientCardProps) {
    return (
        <div className='ingredient-card'>
            <span className='ingredient-card__icon' aria-hidden='true'>
                {ingredient.imageUrl ? <img src={ingredient.imageUrl} alt='' className='ingredient-card__photo' /> : ingredient.emoji}
            </span>
            <span className='ingredient-card__name'>{ingredient.name}</span>
        </div>
    );
}
