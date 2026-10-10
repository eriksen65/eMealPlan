import { getWeekDates, getWeekStartDate, getWeekdayFromIsoDate, todayIsoDate, type MealPlan, type MealPlanDay } from '@emealplan/domain';

import { buildSeedMealPlan } from './seedMealPlan';
import { SEED_RECIPES, DEFAULT_HOUSEHOLD_ID } from './seedRecipes';
import type { MealPlanRepository, RecipeRepository } from '../repositories/types';

/**
 * Populates an empty data store with demo recipes and the current week's meal plan,
 * so a first run of the app has something meaningful to show instead of a blank slate.
 * No-op once data already exists.
 */
export async function ensureSeedData(recipeRepository: RecipeRepository, mealPlanRepository: MealPlanRepository): Promise<void> {
    const existingRecipes = await recipeRepository.list();
    if (existingRecipes.length === 0) {
        for (const recipe of SEED_RECIPES) {
            await recipeRepository.save(recipe);
        }
    }

    const currentWeekStart = getWeekStartDate(todayIsoDate());
    const existingMealPlan = await mealPlanRepository.getByWeekStart(currentWeekStart);
    if (!existingMealPlan) {
        await mealPlanRepository.save(buildSeedMealPlan(currentWeekStart));
    }
}

/** An empty week: every day present (so the UI can render all 7 days) but nothing planned yet. */
export function buildEmptyMealPlan(weekStartDate: string): MealPlan {
    const now = new Date().toISOString();
    const days: MealPlanDay[] = getWeekDates(weekStartDate).map((date) => ({
        date,
        weekday: getWeekdayFromIsoDate(date),
        mealTime: '18:00'
    }));

    return { id: weekStartDate, householdId: DEFAULT_HOUSEHOLD_ID, weekStartDate, days, createdAt: now, updatedAt: now };
}
