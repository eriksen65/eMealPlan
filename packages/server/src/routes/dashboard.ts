import type { FastifyInstance } from 'fastify';
import { getWeekStartDate, getWeekdayFromIsoDate, summarizeCookingPlanProgress } from '@emealplan/domain';

import { resolveCookingPlanForDate } from '../services/cookingPlans';
import { buildEmptyMealPlan } from '../seed/ensureSeedData';
import type { CookingPlanRepository, MealPlanRepository, RecipeRepository, ShoppingListRepository } from '../repositories/types';

export function registerDashboardRoutes(
    app: FastifyInstance,
    repositories: {
        mealPlanRepository: MealPlanRepository;
        recipeRepository: RecipeRepository;
        cookingPlanRepository: CookingPlanRepository;
        shoppingListRepository: ShoppingListRepository;
    }
): void {
    const { mealPlanRepository, recipeRepository, cookingPlanRepository, shoppingListRepository } = repositories;

    app.get<{ Params: { date: string } }>('/api/dashboard/:date', async (request) => {
        const { date } = request.params;
        const weekStartDate = getWeekStartDate(date);

        const mealPlan = (await mealPlanRepository.getByWeekStart(weekStartDate)) ?? buildEmptyMealPlan(weekStartDate);
        const day = mealPlan.days.find((candidate) => candidate.date === date);
        const recipe = day?.recipeId ? await recipeRepository.getById(day.recipeId) : undefined;

        const cookingPlan = await resolveCookingPlanForDate(date, {
            cookingPlanRepository,
            mealPlanRepository,
            recipeRepository
        });

        const shoppingList = await shoppingListRepository.getByWeekStart(weekStartDate);
        const shoppingListPendingCount = shoppingList?.items.filter((item) => !item.checked).length ?? 0;

        return {
            date,
            weekday: getWeekdayFromIsoDate(date),
            mealTime: day?.mealTime ?? '18:00',
            recipe: recipe ?? null,
            label: day?.label ?? null,
            cookingPlan: cookingPlan ?? null,
            progress: cookingPlan ? summarizeCookingPlanProgress(cookingPlan) : null,
            shoppingListPendingCount
        };
    });
}
