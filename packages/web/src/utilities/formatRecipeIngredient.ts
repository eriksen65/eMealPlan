import type { RecipeIngredient, Unit } from '../data/mockRecipes';
import { MOCK_INGREDIENTS } from '../data/mockIngredients';

const UNIT_LABELS: Record<Unit, string> = {
    g: 'g',
    kg: 'kg',
    ml: 'ml',
    l: 'l',
    tsp: 'tsk',
    tbsp: 'spsk',
    pcs: '',
    clove: 'fed',
    pinch: 'knivspids',
    sprig: 'kvist'
};

/**
 * Formats a recipe ingredient into a readable Danish line, e.g.
 * "300 g hakket svinekød" or "2 hvidløg (valgfri)".
 */
export function formatRecipeIngredient(recipeIngredient: RecipeIngredient): string {
    const ingredient = MOCK_INGREDIENTS.find((candidate) => candidate.id === recipeIngredient.ingredientId);
    const name = ingredient?.name ?? recipeIngredient.ingredientId;
    const unitLabel = UNIT_LABELS[recipeIngredient.unit];
    const amountPart = unitLabel ? `${recipeIngredient.amount} ${unitLabel}` : `${recipeIngredient.amount}`;

    let line = `${amountPart} ${name}`;

    if (recipeIngredient.optional) {
        line += ' (valgfri)';
    }

    return line;
}
