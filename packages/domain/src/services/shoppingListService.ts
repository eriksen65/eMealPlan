import type { Ingredient } from '../models/ingredient';
import type { MealPlan } from '../models/mealPlan';
import type { Recipe, Unit } from '../models/recipe';
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
        roundUp: boolean;
        sourceRecipeIds: Set<string>;
    }

    /** Resolves a recipe line to the ingredient actually bought, converting via `derivedFrom` when possible. */
    function resolvePurchase(ingredient: Ingredient, amount: number, unit: Unit) {
        const derivation = ingredient.derivedFrom;
        const source = derivation && ingredientsById.get(derivation.ingredientId);
        if (derivation && source && derivation.yieldGrams > 0) {
            const { base, quantity } = toBaseQuantity(amount, unit);
            const gramsPerUnit = ingredient.unitConversions?.find((conversion) => conversion.unit === base)?.grams;
            const grams = base === 'g' ? quantity : gramsPerUnit ? quantity * gramsPerUnit : undefined;
            if (grams !== undefined) {
                const sourceQuantity = toBaseQuantity(grams / derivation.yieldGrams, derivation.unit);
                return { ingredient: source, base: sourceQuantity.base, quantity: sourceQuantity.quantity, roundUp: true };
            }
        }
        const { base, quantity } = toBaseQuantity(amount, unit);
        return { ingredient, base, quantity, roundUp: false };
    }

    const aggregates = new Map<string, Aggregate>();

    for (const day of mealPlan.days) {
        if (!day.recipeId) continue;
        const recipe = recipesById.get(day.recipeId);
        if (!recipe) continue;

        for (const recipeIngredient of recipe.ingredients) {
            const recipeIngredientDefinition = ingredientsById.get(recipeIngredient.ingredientId);
            if (!recipeIngredientDefinition) continue;

            const { ingredient, base, quantity, roundUp } = resolvePurchase(
                recipeIngredientDefinition,
                recipeIngredient.amount,
                recipeIngredient.unit
            );
            const key = `${ingredient.name.trim().toLowerCase()}|${base}`;

            const existing = aggregates.get(key);
            if (existing) {
                existing.baseQuantity += quantity;
                existing.roundUp ||= roundUp;
                existing.sourceRecipeIds.add(recipe.id);
            } else {
                aggregates.set(key, {
                    name: ingredient.name.trim(),
                    category: ingredient.category,
                    baseUnit: base,
                    baseQuantity: quantity,
                    roundUp,
                    sourceRecipeIds: new Set([recipe.id])
                });
            }
        }
    }

    const generatedItems: ShoppingListItem[] = Array.from(aggregates.entries()).map(([key, aggregate]) => {
        const rawQuantity = aggregate.roundUp ? Math.ceil(aggregate.baseQuantity - 1e-9) : aggregate.baseQuantity;
        const { unit, quantity } = fromBaseQuantity(aggregate.baseUnit, rawQuantity);
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
