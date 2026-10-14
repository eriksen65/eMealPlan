import type { RecipeIngredient } from '../data/mockRecipes';
import { MOCK_INGREDIENTS } from '../data/mockIngredients';
import { formatUnit } from './formatUnit';

/**
 * Formats a recipe ingredient into a readable Danish line, e.g.
 * "300 g hakket svinekød" or "2 hvidløg (valgfri)".
 */
export function formatRecipeIngredient(recipeIngredient: RecipeIngredient): string {
    const ingredient = MOCK_INGREDIENTS.find((candidate) => candidate.id === recipeIngredient.ingredientId);
    const name = recipeIngredient.displayName ?? ingredient?.name ?? recipeIngredient.ingredientId;
    const unitLabel = formatUnit(recipeIngredient.unit);
    const amountPart = unitLabel ? `${recipeIngredient.amount} ${unitLabel}` : `${recipeIngredient.amount}`;

    let line = `${amountPart} ${name}`;

    if (recipeIngredient.optional) {
        line += ' (valgfri)';
    }

    return line;
}
