import type { Id, IsoDate } from './common';

export const WEEKDAYS = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'] as const;

export type Weekday = (typeof WEEKDAYS)[number];

/**
 * One day's dinner slot in a meal plan.
 * Either references a recipe, or carries a free-text label (e.g. "Leftovers", "Eating out")
 * so a day can be meaningful without being tied to a recipe.
 */
export interface MealPlanDay {
    date: IsoDate;
    weekday: Weekday;
    recipeId?: Id;
    label?: string;
    /** Planned time dinner should be ready, used to build the cooking plan. Defaults to 18:00 if omitted. */
    mealTime?: string;
}

export interface MealPlan {
    id: Id;
    householdId: Id;
    /** Monday of the week this plan covers. */
    weekStartDate: IsoDate;
    days: MealPlanDay[];
    createdAt: string;
    updatedAt: string;
}
