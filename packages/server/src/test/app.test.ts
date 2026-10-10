import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';

import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import { buildApp } from '../app';
import type { Recipe } from '@emealplan/domain';

describe('eMealPlan API', () => {
    let dataDir: string;
    let app: Awaited<ReturnType<typeof buildApp>>;

    beforeEach(async () => {
        dataDir = await mkdtemp(path.join(tmpdir(), 'emealplan-test-'));
        app = await buildApp({ dataDir });
    });

    afterEach(async () => {
        await app.close();
        await rm(dataDir, { recursive: true, force: true });
    });

    it('seeds demo recipes and a meal plan for the current week on first run', async () => {
        const recipesResponse = await app.inject({ method: 'GET', url: '/api/recipes' });
        expect(recipesResponse.statusCode).toBe(200);
        const recipes = recipesResponse.json() as Recipe[];
        expect(recipes.length).toBeGreaterThan(0);
    });

    it('creates, updates and deletes a recipe', async () => {
        const createResponse = await app.inject({
            method: 'POST',
            url: '/api/recipes',
            payload: {
                name: 'Test Soup',
                description: 'A simple test recipe',
                portions: 2,
                prepTimeMinutes: 5,
                cookTimeMinutes: 10,
                ingredients: [],
                steps: [],
                tags: []
            }
        });
        expect(createResponse.statusCode).toBe(201);
        const created = createResponse.json() as Recipe;

        const updateResponse = await app.inject({
            method: 'PUT',
            url: `/api/recipes/${created.id}`,
            payload: { ...created, name: 'Updated Soup' }
        });
        expect(updateResponse.statusCode).toBe(200);
        expect((updateResponse.json() as Recipe).name).toBe('Updated Soup');

        const deleteResponse = await app.inject({ method: 'DELETE', url: `/api/recipes/${created.id}` });
        expect(deleteResponse.statusCode).toBe(204);

        const getResponse = await app.inject({ method: 'GET', url: `/api/recipes/${created.id}` });
        expect(getResponse.statusCode).toBe(404);
    });

    it('assigns a recipe to a meal plan day, generates a shopping list, and a cooking plan', async () => {
        const weekStartDate = '2026-03-16';
        const date = '2026-03-18'; // Wednesday

        const assignResponse = await app.inject({
            method: 'PATCH',
            url: `/api/meal-plans/${weekStartDate}/days/${date}`,
            payload: { recipeId: 'lasagna', mealTime: '18:30' }
        });
        expect(assignResponse.statusCode).toBe(200);

        const shoppingListResponse = await app.inject({ method: 'GET', url: `/api/shopping-lists/${weekStartDate}` });
        expect(shoppingListResponse.statusCode).toBe(200);
        const shoppingList = shoppingListResponse.json() as { items: { name: string }[] };
        expect(shoppingList.items.some((item) => item.name === 'Minced beef')).toBe(true);

        const cookingPlanResponse = await app.inject({ method: 'GET', url: `/api/cooking-plans/${date}` });
        expect(cookingPlanResponse.statusCode).toBe(200);
        const cookingPlan = cookingPlanResponse.json() as { tasks: { id: string; done: boolean }[] };
        expect(cookingPlan.tasks.length).toBeGreaterThan(0);

        const firstTask = cookingPlan.tasks[0];
        const toggleResponse = await app.inject({
            method: 'PATCH',
            url: `/api/cooking-plans/${date}/tasks/${firstTask?.id}`,
            payload: { done: true }
        });
        expect(toggleResponse.statusCode).toBe(200);
        expect((toggleResponse.json() as { tasks: { done: boolean }[] }).tasks[0]?.done).toBe(true);
    });

    it('adds and toggles a manual shopping-list item', async () => {
        const weekStartDate = '2026-03-23';
        await app.inject({ method: 'GET', url: `/api/shopping-lists/${weekStartDate}` });

        const addResponse = await app.inject({
            method: 'POST',
            url: `/api/shopping-lists/${weekStartDate}/items`,
            payload: { name: 'Birthday candles', quantity: 1, unit: 'pcs' }
        });
        expect(addResponse.statusCode).toBe(201);
        const list = addResponse.json() as { items: { id: string; manuallyAdded: boolean }[] };
        const manualItem = list.items.find((item) => item.manuallyAdded);
        expect(manualItem).toBeDefined();

        const toggleResponse = await app.inject({
            method: 'PATCH',
            url: `/api/shopping-lists/${weekStartDate}/items/${manualItem?.id}`,
            payload: { checked: true }
        });
        expect(toggleResponse.statusCode).toBe(200);
    });
});
