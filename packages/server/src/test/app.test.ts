import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import type { FastifyInstance } from 'fastify';

import { buildApp } from '../app';

describe('eMealPlan API', () => {
    let app: FastifyInstance;

    beforeAll(async () => {
        app = await buildApp();
    });

    afterAll(async () => {
        await app.close();
    });

    it('responds to /api/health', async () => {
        const response = await app.inject({ method: 'GET', url: '/api/health' });

        expect(response.statusCode).toBe(200);
        expect(response.json()).toEqual({ status: 'ok' });
    });

    it('serves recipes and ingredients', async () => {
        const recipes = await app.inject({ method: 'GET', url: '/api/recipes' });
        const ingredients = await app.inject({ method: 'GET', url: '/api/ingredients' });

        expect(recipes.json()[0].id).toBe('vietnamesiske-nudler');
        expect(ingredients.json().length).toBeGreaterThan(0);
    });

    it('serves images', async () => {
        const response = await app.inject({ method: 'GET', url: '/api/assets/ingredients/chili.webp' });

        expect(response.statusCode).toBe(200);
    });

    it('responds to /api/hello with a hello world message', async () => {
        const response = await app.inject({ method: 'GET', url: '/api/hello' });

        expect(response.statusCode).toBe(200);
        expect(response.json()).toEqual({ message: 'Hello world from eMealPlan!' });
    });
});
