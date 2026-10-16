import { describe, expect, it } from 'vitest';

import type { Ingredient } from '../models/ingredient';
import type { MealPlan } from '../models/mealPlan';
import type { Recipe, RecipeIngredient } from '../models/recipe';
import { generateShoppingListItems } from '../services/shoppingListService';

function makeIngredient(id: string, name: string, category: Ingredient['category']): Ingredient {
    return { id, name, category, dietaryProperties: [], isStaple: false };
}

function makeRecipeIngredient(ingredientId: string, amount: number, unit: RecipeIngredient['unit']): RecipeIngredient {
    return { ingredientId, amount, unit, scaling: { type: 'linear' } };
}

function makeRecipe(id: string, ingredients: RecipeIngredient[]): Recipe {
    return {
        id,
        title: 'Test recipe',
        subtitle: '',
        description: '',
        emoji: '🍽️',
        baseServings: 4,
        timeEstimates: [],
        tags: [],
        ingredients,
        steps: []
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

const potatoes = makeIngredient('potatoes', 'Potatoes', 'vegetable');
const tortillas = makeIngredient('tortillas', 'Tortillas', 'grain');
const ingredientsById = new Map([potatoes, tortillas].map((ingredient) => [ingredient.id, ingredient]));

describe('generateShoppingListItems', () => {
    it('combines the same ingredient from multiple recipes into one item, normalizing units', () => {
        const monday = makeRecipe('spaghetti-bolognese', [makeRecipeIngredient('potatoes', 500, 'g')]);
        const tuesday = makeRecipe('chicken-curry', [makeRecipeIngredient('potatoes', 0.75, 'kg')]);

        const mealPlan = makeMealPlan([
            { date: '2026-03-16', weekday: 'monday', recipeId: monday.id },
            { date: '2026-03-17', weekday: 'tuesday', recipeId: tuesday.id }
        ]);

        const recipesById = new Map([
            [monday.id, monday],
            [tuesday.id, tuesday]
        ]);

        const items = generateShoppingListItems(mealPlan, recipesById, ingredientsById);

        expect(items).toHaveLength(1);
        expect(items[0]).toMatchObject({ name: 'Potatoes', quantity: 1.25, unit: 'kg', category: 'vegetable' });
        expect(items[0]?.sourceRecipeIds.sort()).toEqual(['chicken-curry', 'spaghetti-bolognese']);
    });

    it('buys the source ingredient for derived ingredients, rounding up whole units', () => {
        const lemon = makeIngredient('citron', 'Citron', 'fruit');
        const zest: Ingredient = {
            ...makeIngredient('citronskal', 'Citronskal', 'fruit'),
            unitConversions: [{ unit: 'tsp', grams: 2 }],
            derivedFrom: { ingredientId: 'citron', unit: 'pcs', yieldGrams: 8 }
        };
        const recipe = makeRecipe('cake', [makeRecipeIngredient('citronskal', 2, 'tsp'), makeRecipeIngredient('citronskal', 10, 'g')]);
        const mealPlan = makeMealPlan([{ date: '2026-03-16', weekday: 'monday', recipeId: recipe.id }]);

        const items = generateShoppingListItems(
            mealPlan,
            new Map([[recipe.id, recipe]]),
            new Map([lemon, zest].map((ingredient) => [ingredient.id, ingredient]))
        );

        expect(items).toHaveLength(1);
        expect(items[0]).toMatchObject({ name: 'Citron', quantity: 2, unit: 'pcs' });
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

        const items = generateShoppingListItems(mealPlan, new Map(), ingredientsById, [manualItem]);

        expect(items).toEqual([manualItem]);
    });

    it('preserves checked state across regeneration using the previous checked-by-key map', () => {
        const recipe = makeRecipe('tacos', [makeRecipeIngredient('tortillas', 8, 'pcs')]);
        const mealPlan = makeMealPlan([{ date: '2026-03-20', weekday: 'friday', recipeId: recipe.id }]);
        const recipesById = new Map([[recipe.id, recipe]]);

        const checkedByKey = new Map([['tortillas|pcs', true]]);

        const items = generateShoppingListItems(mealPlan, recipesById, ingredientsById, [], checkedByKey);

        expect(items[0]?.checked).toBe(true);
    });
});
