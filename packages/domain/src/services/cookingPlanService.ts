import type { ClockTime } from '../models/common';
import type { CookingPlan, CookingTask } from '../models/cookingPlan';
import type { Recipe } from '../models/recipe';

/**
 * Turns a recipe's ordered steps into a scheduled cooking TODO list for a given day.
 *
 * Steps are scheduled sequentially starting early enough that the final step finishes
 * right at `mealTime`. This is a simple rule-based scheduler (sum of step durations),
 * not a dependency/oven-aware planner - a reasonable seam to improve later without
 * touching callers.
 */
export function generateCookingPlan(date: string, recipe: Recipe, mealTime: ClockTime): CookingPlan {
    const totalDurationMinutes = recipe.steps.reduce((sum, step) => sum + step.durationMinutes, 0);
    const startMinutes = toMinutesSinceMidnight(mealTime) - totalDurationMinutes;

    const orderedSteps = [...recipe.steps].sort((a, b) => a.order - b.order);

    let cursor = startMinutes;
    const tasks: CookingTask[] = orderedSteps.map((step) => {
        const task: CookingTask = {
            id: step.id,
            time: toClockTime(cursor),
            description: step.instruction,
            done: false
        };
        cursor += step.durationMinutes;
        return task;
    });

    tasks.push({
        id: `${recipe.id}-ready`,
        time: mealTime,
        description: `${recipe.name} is ready to serve.`,
        done: false
    });

    return {
        id: `${date}-${recipe.id}`,
        date,
        recipeId: recipe.id,
        mealTime,
        tasks
    };
}

function toMinutesSinceMidnight(time: ClockTime): number {
    const [hours, minutes] = time.split(':').map(Number);
    return (hours ?? 0) * 60 + (minutes ?? 0);
}

function toClockTime(minutesSinceMidnight: number): ClockTime {
    const normalized = ((minutesSinceMidnight % 1440) + 1440) % 1440;
    const hours = Math.floor(normalized / 60);
    const minutes = normalized % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}
