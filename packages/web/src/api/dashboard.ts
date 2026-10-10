import type { CookingPlan, DashboardProgress, Recipe, Weekday } from '@emealplan/domain';

import { apiGet } from './client';

export interface DashboardSummary {
    date: string;
    weekday: Weekday;
    mealTime: string;
    recipe: Recipe | null;
    label: string | null;
    cookingPlan: CookingPlan | null;
    progress: DashboardProgress | null;
    shoppingListPendingCount: number;
}

export function fetchDashboard(date: string): Promise<DashboardSummary> {
    return apiGet<DashboardSummary>(`/dashboard/${date}`);
}
