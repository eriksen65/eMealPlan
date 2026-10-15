import type { Ingredient } from '@emealplan/domain';

interface IngredientCardProps {
    ingredient: Ingredient;
    onClick: (ingredient: Ingredient) => void;
}

export function IngredientCard({ ingredient, onClick }: IngredientCardProps) {
    return (
        <button type='button' className='ingredient-card' onClick={() => onClick(ingredient)}>
            <span className='ingredient-card__icon' aria-hidden='true'>
                {ingredient.imageUrl ? <img src={ingredient.imageUrl} alt='' className='ingredient-card__photo' /> : ingredient.emoji}
            </span>
            <span className='ingredient-card__name'>{ingredient.name}</span>
        </button>
    );
}
