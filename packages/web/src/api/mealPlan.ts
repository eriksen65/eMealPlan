import type { MealPlan } from '@emealplan/domain';

import { apiGet, apiPatch } from './client';

export interface DayAssignmentInput {
    recipeId?: string | null;
    label?: string | null;
    mealTime?: string;
}

export function fetchMealPlan(weekStartDate: string): Promise<MealPlan> {
    return apiGet<MealPlan>(`/meal-plans/${weekStartDate}`);
}

export function assignMealPlanDay(weekStartDate: string, date: string, input: DayAssignmentInput): Promise<MealPlan> {
    return apiPatch<MealPlan>(`/meal-plans/${weekStartDate}/days/${date}`, input);
}
