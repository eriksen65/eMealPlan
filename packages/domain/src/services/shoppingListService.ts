import type { Ingredient } from '../models/ingredient';
import type { MealPlan } from '../models/mealPlan';
import type { Recipe } from '../models/recipe';
import type { ShoppingListItem } from '../models/shoppingList';
import { fromBaseQuantity, toBaseQuantity } from './units';

/**
 * Builds the combined shopping list for a meal plan: every ingredient from every recipe
 * used in the plan is summed into one list, grouped by category.
 *
 * Quantities use each recipe's base servings. `existingManualItems` lets callers preserve
 * user-added items (and checked state) across regeneration, since regeneration happens
 * whenever the meal plan changes.
 */
export function generateShoppingListItems(
    mealPlan: MealPlan,
    recipesById: ReadonlyMap<string, Recipe>,
    ingredientsById: ReadonlyMap<string, Ingredient>,
    existingManualItems: ShoppingListItem[] = [],
    existingCheckedByKey: ReadonlyMap<string, boolean> = new Map()
): ShoppingListItem[] {
    interface Aggregate {
        name: string;
        category: ShoppingListItem['category'];
        baseUnit: ShoppingListItem['unit'];
        baseQuantity: number;
        sourceRecipeIds: Set<string>;
    }

    const aggregates = new Map<string, Aggregate>();

    for (const day of mealPlan.days) {
        if (!day.recipeId) continue;
        const recipe = recipesById.get(day.recipeId);
        if (!recipe) continue;

        for (const recipeIngredient of recipe.ingredients) {
            const ingredient = ingredientsById.get(recipeIngredient.ingredientId);
            if (!ingredient) continue;

            const { base, quantity } = toBaseQuantity(recipeIngredient.amount, recipeIngredient.unit);
            const key = `${ingredient.name.trim().toLowerCase()}|${base}`;

            const existing = aggregates.get(key);
            if (existing) {
                existing.baseQuantity += quantity;
                existing.sourceRecipeIds.add(recipe.id);
            } else {
                aggregates.set(key, {
                    name: ingredient.name.trim(),
                    category: ingredient.category,
                    baseUnit: base,
                    baseQuantity: quantity,
                    sourceRecipeIds: new Set([recipe.id])
                });
            }
        }
    }

    const generatedItems: ShoppingListItem[] = Array.from(aggregates.entries()).map(([key, aggregate]) => {
        const { unit, quantity } = fromBaseQuantity(aggregate.baseUnit, aggregate.baseQuantity);
        return {
            id: key,
            name: aggregate.name,
            quantity,
            unit,
            category: aggregate.category,
            checked: existingCheckedByKey.get(key) ?? false,
            sourceRecipeIds: Array.from(aggregate.sourceRecipeIds),
            manuallyAdded: false
        };
    });

    generatedItems.sort((a, b) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name));

    return [...generatedItems, ...existingManualItems];
}
