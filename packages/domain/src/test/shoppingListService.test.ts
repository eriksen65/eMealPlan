import { describe, expect, it } from 'vitest';

import type { MealPlan } from '../models/mealPlan';
import type { Recipe } from '../models/recipe';
import { generateShoppingListItems } from '../services/shoppingListService';

function makeRecipe(overrides: Partial<Recipe> & Pick<Recipe, 'id' | 'ingredients'>): Recipe {
    return {
        name: 'Test recipe',
        description: '',
        portions: 4,
        prepTimeMinutes: 10,
        cookTimeMinutes: 10,
        steps: [],
        tags: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        ...overrides
    };
}

function makeMealPlan(days: MealPlan['days']): MealPlan {
    return {
        id: 'plan-1',
        householdId: 'household-1',
        weekStartDate: '2026-03-16',
        days,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };
}

describe('generateShoppingListItems', () => {
    it('combines the same ingredient from multiple recipes into one item, normalizing units', () => {
        const monday = makeRecipe({
            id: 'spaghetti-bolognese',
            ingredients: [{ id: 'i1', name: 'Potatoes', quantity: 500, unit: 'g', category: 'fruit-veg' }]
        });
        const tuesday = makeRecipe({
            id: 'chicken-curry',
            ingredients: [{ id: 'i2', name: 'potatoes', quantity: 0.75, unit: 'kg', category: 'fruit-veg' }]
        });

        const mealPlan = makeMealPlan([
            { date: '2026-03-16', weekday: 'monday', recipeId: monday.id },
            { date: '2026-03-17', weekday: 'tuesday', recipeId: tuesday.id }
        ]);

        const recipesById = new Map([
            [monday.id, monday],
            [tuesday.id, tuesday]
        ]);

        const items = generateShoppingListItems(mealPlan, recipesById);

        expect(items).toHaveLength(1);
        expect(items[0]).toMatchObject({ name: 'Potatoes', quantity: 1.25, unit: 'kg' });
        expect(items[0]?.sourceRecipeIds.sort()).toEqual(['chicken-curry', 'spaghetti-bolognese']);
    });

    it('keeps manually added items unchanged and skips days without a recipe', () => {
        const mealPlan = makeMealPlan([{ date: '2026-03-16', weekday: 'monday', label: 'Leftovers' }]);

        const manualItem = {
            id: 'manual-1',
            name: 'Birthday candles',
            quantity: 1,
            unit: 'pcs' as const,
            category: 'other' as const,
            checked: false,
            sourceRecipeIds: [],
            manuallyAdded: true
        };

        const items = generateShoppingListItems(mealPlan, new Map(), [manualItem]);

        expect(items).toEqual([manualItem]);
    });

    it('preserves checked state across regeneration using the previous checked-by-key map', () => {
        const recipe = makeRecipe({
            id: 'tacos',
            ingredients: [{ id: 'i1', name: 'Tortillas', quantity: 8, unit: 'pcs', category: 'bread' }]
        });
        const mealPlan = makeMealPlan([{ date: '2026-03-20', weekday: 'friday', recipeId: recipe.id }]);
        const recipesById = new Map([[recipe.id, recipe]]);

        const checkedByKey = new Map([['tortillas|pcs', true]]);

        const items = generateShoppingListItems(mealPlan, recipesById, [], checkedByKey);

        expect(items[0]?.checked).toBe(true);
    });
});
