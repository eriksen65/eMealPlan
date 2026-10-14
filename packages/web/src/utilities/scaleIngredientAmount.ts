import type { RecipeIngredient } from '../data/mockRecipes';

const MIN_PORTIONS = 1;
const MAX_PORTIONS = 8;

export const DEFAULT_PORTION_BOUNDS = { min: MIN_PORTIONS, max: MAX_PORTIONS };

/**
 * Computes the portion range a recipe actually supports.
 *
 * Ingredients with an explicit `portions` lookup table (e.g. lemongrass) are
 * only reliable for the portion counts they define. The recipe's overall
 * range is therefore the intersection ("lowest common denominator") of every
 * such ingredient's known range, falling back to `DEFAULT_PORTION_BOUNDS`
 * when no ingredient restricts it.
 */
export function computePortionBounds(ingredients: RecipeIngredient[], baseServings: number): { min: number; max: number } {
    let min = DEFAULT_PORTION_BOUNDS.min;
    let max = DEFAULT_PORTION_BOUNDS.max;

    for (const ingredient of ingredients) {
        if (ingredient.scaling.type !== 'portions') continue;

        const knownPortions = [baseServings, ...ingredient.scaling.amounts.map((entry) => entry.portions)];
        min = Math.max(min, Math.min(...knownPortions));
        max = Math.min(max, Math.max(...knownPortions));
    }

    return { min, max };
}

/**
 * Computes a recipe ingredient's amount scaled for a target number of portions.
 *
 * - `linear` ingredients scale proportionally with the portion count.
 * - `portions` ingredients use their explicit lookup table when an entry exists
 *   for the target portion count (e.g. half a stalk of lemongrass doesn't scale
 *   smoothly), falling back to proportional scaling otherwise.
 */
export function scaleIngredientAmount(ingredient: RecipeIngredient, baseServings: number, targetPortions: number): number {
    if (targetPortions === baseServings) {
        return ingredient.amount;
    }

    if (ingredient.scaling.type === 'portions') {
        const match = ingredient.scaling.amounts.find((entry) => entry.portions === targetPortions);
        if (match) {
            return match.amount;
        }
    }

    const scaled = ingredient.amount * (targetPortions / baseServings);
    return Math.round(scaled * 100) / 100;
}
