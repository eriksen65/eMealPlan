import type { CookingPlan } from '@emealplan/domain';

import { apiGet, apiPatch } from './client';

export function fetchCookingPlan(date: string): Promise<CookingPlan> {
    return apiGet<CookingPlan>(`/cooking-plans/${date}`);
}

export function setTaskDone(date: string, taskId: string, done: boolean): Promise<CookingPlan> {
    return apiPatch<CookingPlan>(`/cooking-plans/${date}/tasks/${taskId}`, { done });
}
