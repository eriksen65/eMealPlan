import type { FastifyInstance } from 'fastify';
import { generateShoppingListItems, type IngredientCategory, type Recipe, type Unit } from '@emealplan/domain';

import { generateId } from '../ids';
import { buildEmptyMealPlan } from '../seed/ensureSeedData';
import type { MealPlanRepository, RecipeRepository, ShoppingListRepository } from '../repositories/types';

interface ManualItemBody {
    name: string;
    quantity: number;
    unit: Unit;
    category?: IngredientCategory;
}

interface UpdateItemBody {
    checked?: boolean;
    quantity?: number;
}

export function registerShoppingListRoutes(
    app: FastifyInstance,
    shoppingListRepository: ShoppingListRepository,
    mealPlanRepository: MealPlanRepository,
    recipeRepository: RecipeRepository
): void {
    app.get<{ Params: { weekStartDate: string } }>('/api/shopping-lists/:weekStartDate', async (request) => {
        return regenerateAndPersist(request.params.weekStartDate);
    });

    app.post<{ Params: { weekStartDate: string }; Body: ManualItemBody }>('/api/shopping-lists/:weekStartDate/items', async (request, reply) => {
        const list = await regenerateAndPersist(request.params.weekStartDate);
        const { name, quantity, unit, category } = request.body;
        list.items.push({
            id: generateId(),
            name,
            quantity,
            unit,
            category: category ?? 'other',
            checked: false,
            sourceRecipeIds: [],
            manuallyAdded: true
        });
        list.updatedAt = new Date().toISOString();
        await shoppingListRepository.save(list);
        return reply.code(201).send(list);
    });

    app.patch<{ Params: { weekStartDate: string; itemId: string }; Body: UpdateItemBody }>(
        '/api/shopping-lists/:weekStartDate/items/:itemId',
        async (request, reply) => {
            const list = await shoppingListRepository.getByWeekStart(request.params.weekStartDate);
            if (!list) return reply.code(404).send({ message: 'Shopping list not found' });

            const item = list.items.find((candidate) => candidate.id === request.params.itemId);
            if (!item) return reply.code(404).send({ message: 'Item not found' });

            if (request.body.checked !== undefined) item.checked = request.body.checked;
            if (request.body.quantity !== undefined) item.quantity = request.body.quantity;

            list.updatedAt = new Date().toISOString();
            await shoppingListRepository.save(list);
            return list;
        }
    );

    app.delete<{ Params: { weekStartDate: string; itemId: string } }>('/api/shopping-lists/:weekStartDate/items/:itemId', async (request, reply) => {
        const list = await shoppingListRepository.getByWeekStart(request.params.weekStartDate);
        if (!list) return reply.code(404).send({ message: 'Shopping list not found' });

        const item = list.items.find((candidate) => candidate.id === request.params.itemId);
        if (!item?.manuallyAdded) return reply.code(404).send({ message: 'Manual item not found' });

        list.items = list.items.filter((candidate) => candidate.id !== request.params.itemId);
        list.updatedAt = new Date().toISOString();
        await shoppingListRepository.save(list);
        return list;
    });

    async function regenerateAndPersist(weekStartDate: string) {
        const mealPlan = (await mealPlanRepository.getByWeekStart(weekStartDate)) ?? buildEmptyMealPlan(weekStartDate);
        const allRecipes = await recipeRepository.list();
        const recipesById = new Map<string, Recipe>(allRecipes.map((recipe) => [recipe.id, recipe]));

        const existing = await shoppingListRepository.getByWeekStart(weekStartDate);
        const manualItems = existing?.items.filter((item) => item.manuallyAdded) ?? [];
        const checkedByKey = new Map(existing?.items.map((item) => [item.id, item.checked]) ?? []);

        const items = generateShoppingListItems(mealPlan, recipesById, manualItems, checkedByKey);

        const list = {
            id: weekStartDate,
            householdId: mealPlan.householdId,
            weekStartDate,
            items,
            updatedAt: new Date().toISOString()
        };
        await shoppingListRepository.save(list);
        return list;
    }
}
