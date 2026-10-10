import type { FastifyInstance } from 'fastify';

import { resolveCookingPlanForDate } from '../services/cookingPlans';
import type { CookingPlanRepository, MealPlanRepository, RecipeRepository } from '../repositories/types';

export function registerCookingPlanRoutes(
    app: FastifyInstance,
    cookingPlanRepository: CookingPlanRepository,
    mealPlanRepository: MealPlanRepository,
    recipeRepository: RecipeRepository
): void {
    const repositories = { cookingPlanRepository, mealPlanRepository, recipeRepository };

    app.get<{ Params: { date: string } }>('/api/cooking-plans/:date', async (request, reply) => {
        const plan = await resolveCookingPlanForDate(request.params.date, repositories);
        if (!plan) return reply.code(404).send({ message: 'No meal planned for this day yet' });
        return plan;
    });

    app.patch<{ Params: { date: string; taskId: string }; Body: { done: boolean } }>(
        '/api/cooking-plans/:date/tasks/:taskId',
        async (request, reply) => {
            const plan = await resolveCookingPlanForDate(request.params.date, repositories);
            if (!plan) return reply.code(404).send({ message: 'No cooking plan for this day yet' });

            const task = plan.tasks.find((candidate) => candidate.id === request.params.taskId);
            if (!task) return reply.code(404).send({ message: 'Task not found' });

            task.done = request.body.done;
            await cookingPlanRepository.save(plan);
            return plan;
        }
    );
}
