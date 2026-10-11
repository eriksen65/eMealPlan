import type { MockIngredient } from '../data/mockIngredients';

interface IngredientCardProps {
    ingredient: MockIngredient;
}

export function IngredientCard({ ingredient }: IngredientCardProps) {
    return (
        <div className='ingredient-card'>
            <span className='ingredient-card__icon' aria-hidden='true'>
                {ingredient.emoji}
            </span>
            <span className='ingredient-card__name'>{ingredient.name}</span>
        </div>
    );
}
