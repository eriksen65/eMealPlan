import { generateCookingPlan, getWeekStartDate, type CookingPlan } from '@emealplan/domain';

import type { CookingPlanRepository, MealPlanRepository, RecipeRepository } from '../repositories/types';

/**
 * Resolves (generating and persisting if needed) the cooking plan for a given day, based on
 * whatever recipe is assigned to that day in the meal plan. Returns undefined when no recipe
 * is planned for the day yet.
 */
export async function resolveCookingPlanForDate(
    date: string,
    repositories: {
        cookingPlanRepository: CookingPlanRepository;
        mealPlanRepository: MealPlanRepository;
        recipeRepository: RecipeRepository;
    }
): Promise<CookingPlan | undefined> {
    const { cookingPlanRepository, mealPlanRepository, recipeRepository } = repositories;

    const weekStartDate = getWeekStartDate(date);
    const mealPlan = await mealPlanRepository.getByWeekStart(weekStartDate);
    const day = mealPlan?.days.find((candidate) => candidate.date === date);
    if (!day?.recipeId) return undefined;

    const recipe = await recipeRepository.getById(day.recipeId);
    if (!recipe) return undefined;

    const freshPlan = generateCookingPlan(date, recipe, day.mealTime ?? '18:00');

    const existingPlan = await cookingPlanRepository.getByDate(date);
    if (existingPlan && existingPlan.recipeId === recipe.id) {
        const doneByTaskId = new Map(existingPlan.tasks.map((task) => [task.id, task.done]));
        freshPlan.tasks.forEach((task) => {
            task.done = doneByTaskId.get(task.id) ?? false;
        });
    }

    await cookingPlanRepository.save(freshPlan);
    return freshPlan;
}
