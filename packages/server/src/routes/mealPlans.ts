import type { FastifyInstance } from 'fastify';

import { buildEmptyMealPlan } from '../seed/ensureSeedData';
import type { MealPlanRepository } from '../repositories/types';

interface DayAssignmentBody {
    recipeId?: string | null;
    label?: string | null;
    mealTime?: string;
}

export function registerMealPlanRoutes(app: FastifyInstance, mealPlanRepository: MealPlanRepository): void {
    app.get<{ Params: { weekStartDate: string } }>('/api/meal-plans/:weekStartDate', async (request) => {
        const { weekStartDate } = request.params;
        return (await mealPlanRepository.getByWeekStart(weekStartDate)) ?? buildEmptyMealPlan(weekStartDate);
    });

    app.patch<{ Params: { weekStartDate: string; date: string }; Body: DayAssignmentBody }>(
        '/api/meal-plans/:weekStartDate/days/:date',
        async (request, reply) => {
            const { weekStartDate, date } = request.params;
            const mealPlan = (await mealPlanRepository.getByWeekStart(weekStartDate)) ?? buildEmptyMealPlan(weekStartDate);

            const dayIndex = mealPlan.days.findIndex((day) => day.date === date);
            if (dayIndex === -1) return reply.code(404).send({ message: 'Day not found in meal plan' });

            const day = mealPlan.days[dayIndex];
            if (!day) return reply.code(404).send({ message: 'Day not found in meal plan' });

            const { recipeId, label, mealTime } = request.body;
            if (recipeId !== undefined) {
                if (recipeId === null) delete day.recipeId;
                else day.recipeId = recipeId;
            }
            if (label !== undefined) {
                if (label === null) delete day.label;
                else day.label = label;
            }
            if (mealTime !== undefined) day.mealTime = mealTime;

            mealPlan.updatedAt = new Date().toISOString();
            await mealPlanRepository.save(mealPlan);
            return mealPlan;
        }
    );
}
