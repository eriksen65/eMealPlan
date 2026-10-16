import type { HomemadeLine, HomemadeRecipe, Ingredient } from '@emealplan/domain';
import { formatUnit } from '../utilities/formatUnit';

interface HomemadeSectionProps {
    homemade: HomemadeRecipe;
    ingredients: Ingredient[];
    onSelectIngredient: (ingredient: Ingredient) => void;
}

export function HomemadeSection({ homemade, ingredients, onSelectIngredient }: HomemadeSectionProps) {
    function renderIngredientLink(id: string) {
        const referenced = ingredients.find((candidate) => candidate.id === id);
        return referenced ? (
            <button type='button' className='homemade__link' onClick={() => onSelectIngredient(referenced)}>
                {referenced.name}
            </button>
        ) : (
            id
        );
    }

    function renderLine(line: HomemadeLine) {
        const unitLabel = formatUnit(line.unit);
        const quantity = `${line.quantity}${unitLabel ? ` ${unitLabel}` : ''}`;
        return (
            <>
                <strong>{quantity}</strong> {line.ingredientId ? renderIngredientLink(line.ingredientId) : line.label}
                {line.note && ` (${line.note})`}
                {line.options && (
                    <ul className='homemade__list homemade__list--nested'>
                        {line.options.map((option) => (
                            <li key={option.ingredientId}>
                                {renderIngredientLink(option.ingredientId)} – {option.description}
                            </li>
                        ))}
                    </ul>
                )}
            </>
        );
    }

    return (
        <details className='homemade' open>
            <summary className='homemade__summary'>
                <span aria-hidden='true'>👩‍🍳</span> Lav den selv<span className='homemade__chevron' aria-hidden='true' />
            </summary>

            <h4 className='homemade__subtitle'>Ingredienser</h4>
            <ul className='homemade__list'>
                {homemade.ingredients.map((line) => (
                    <li key={line.ingredientId ?? line.label}>{renderLine(line)}</li>
                ))}
            </ul>

            <h4 className='homemade__subtitle'>Sådan gør du</h4>
            <ol className='homemade__steps'>
                {homemade.steps.map((step) => (
                    <li key={step}>{step}</li>
                ))}
            </ol>
        </details>
    );
}
