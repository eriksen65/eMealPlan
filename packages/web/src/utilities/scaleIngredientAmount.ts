import type { RecipeIngredient } from '../data/mockRecipes';

const MIN_PORTIONS = 1;
const MAX_PORTIONS = 8;

export const PORTION_BOUNDS = { min: MIN_PORTIONS, max: MAX_PORTIONS };

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
