import type { Ingredient } from '../data/mockIngredients';

interface IngredientCardProps {
    ingredient: Ingredient;
}

export function IngredientCard({ ingredient }: IngredientCardProps) {
    return (
        <div className='ingredient-card'>
            <span className='ingredient-card__icon' aria-hidden='true'>
                {ingredient.image ? <img src={ingredient.image} alt='' className='ingredient-card__photo' /> : ingredient.imageUrl}
            </span>
            <span className='ingredient-card__name'>{ingredient.name}</span>
        </div>
    );
}
