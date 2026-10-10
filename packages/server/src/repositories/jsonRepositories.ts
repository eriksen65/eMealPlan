import type { CookingPlan, MealPlan, Recipe, ShoppingList } from '@emealplan/domain';

import { JsonFileStore } from './jsonFileStore';
import type { CookingPlanRepository, MealPlanRepository, RecipeRepository, ShoppingListRepository } from './types';

export function createJsonRecipeRepository(dataDir: string): RecipeRepository {
    const store = new JsonFileStore<Recipe>(dataDir, 'recipes.json');
    return {
        list: () => store.list(),
        getById: (id) => store.getById(id),
        save: (recipe) => store.upsert(recipe),
        remove: (id) => store.remove(id)
    };
}

export function createJsonMealPlanRepository(dataDir: string): MealPlanRepository {
    // One meal plan per week, so the week's start date doubles as the record id.
    const store = new JsonFileStore<MealPlan>(dataDir, 'meal-plans.json');
    return {
        getByWeekStart: (weekStartDate) => store.getById(weekStartDate),
        save: (mealPlan) => store.upsert(mealPlan)
    };
}

export function createJsonShoppingListRepository(dataDir: string): ShoppingListRepository {
    const store = new JsonFileStore<ShoppingList>(dataDir, 'shopping-lists.json');
    return {
        getByWeekStart: (weekStartDate) => store.getById(weekStartDate),
        save: (shoppingList) => store.upsert(shoppingList)
    };
}

export function createJsonCookingPlanRepository(dataDir: string): CookingPlanRepository {
    const store = new JsonFileStore<CookingPlan>(dataDir, 'cooking-plans.json');
    return {
        getByDate: async (date) => (await store.list()).find((plan) => plan.date === date),
        save: (cookingPlan) => store.upsert(cookingPlan)
    };
}
