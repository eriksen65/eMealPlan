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

    it('responds to /api/hello with a hello world message', async () => {
        const response = await app.inject({ method: 'GET', url: '/api/hello' });

        expect(response.statusCode).toBe(200);
        expect(response.json()).toEqual({ message: 'Hello world from eMealPlan!' });
    });
});
