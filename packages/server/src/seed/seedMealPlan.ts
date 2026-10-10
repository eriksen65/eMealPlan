import { getWeekDates, getWeekdayFromIsoDate, type MealPlan, type MealPlanDay } from '@emealplan/domain';

import { DEFAULT_HOUSEHOLD_ID } from './seedRecipes';

const DEMO_RECIPE_BY_WEEKDAY: Record<string, { recipeId?: string; label?: string }> = {
    monday: { recipeId: 'spaghetti-bolognese' },
    tuesday: { recipeId: 'chicken-curry' },
    wednesday: { label: 'Leftovers' },
    thursday: { recipeId: 'homemade-pizza' },
    friday: { recipeId: 'tacos' },
    saturday: { recipeId: 'steak-with-potatoes' },
    sunday: { recipeId: 'lasagna' }
};

/** Builds a demo meal plan for the given week, so a first run has something meaningful to show. */
export function buildSeedMealPlan(weekStartDate: string): MealPlan {
    const now = new Date().toISOString();
    const days: MealPlanDay[] = getWeekDates(weekStartDate).map((date) => {
        const weekday = getWeekdayFromIsoDate(date);
        const assignment = DEMO_RECIPE_BY_WEEKDAY[weekday] ?? {};
        const day: MealPlanDay = { date, weekday, mealTime: '18:00' };
        if (assignment.recipeId) day.recipeId = assignment.recipeId;
        if (assignment.label) day.label = assignment.label;
        return day;
    });

    return {
        id: weekStartDate,
        householdId: DEFAULT_HOUSEHOLD_ID,
        weekStartDate,
        days,
        createdAt: now,
        updatedAt: now
    };
}
