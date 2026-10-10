import type { CookingPlan } from '../models/cookingPlan';

export interface DashboardProgress {
    completedTasks: number;
    totalTasks: number;
    nextTask?: { time: string; description: string };
}

/** Summarizes a day's cooking plan for the dashboard: how far along we are, and what's next. */
export function summarizeCookingPlanProgress(cookingPlan: CookingPlan): DashboardProgress {
    const completedTasks = cookingPlan.tasks.filter((task) => task.done).length;
    const nextPending = cookingPlan.tasks.find((task) => !task.done);

    const progress: DashboardProgress = {
        completedTasks,
        totalTasks: cookingPlan.tasks.length
    };
    if (nextPending) {
        progress.nextTask = { time: nextPending.time, description: nextPending.description };
    }
    return progress;
}
