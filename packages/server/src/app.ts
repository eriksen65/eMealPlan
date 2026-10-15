import cors from '@fastify/cors';
import fastifyStatic from '@fastify/static';
import Fastify, { type FastifyInstance } from 'fastify';
import { fileURLToPath } from 'node:url';

import { config } from './config';
import { INGREDIENTS } from './data/ingredients';
import { RECIPES } from './data/recipes';

export interface BuildAppOptions {
    webOrigin?: string;
}

export async function buildApp(options: BuildAppOptions = {}): Promise<FastifyInstance> {
    const app = Fastify({ logger: false });

    await app.register(cors, { origin: options.webOrigin ?? config.webOrigin });
    await app.register(fastifyStatic, {
        root: fileURLToPath(new URL('../public', import.meta.url)),
        prefix: '/api/assets/'
    });

    app.get('/api/health', async () => ({ status: 'ok' }));

    app.get('/api/hello', async () => ({ message: 'Hello world from eMealPlan!' }));

    app.get('/api/recipes', async () => RECIPES);

    app.get('/api/ingredients', async () => INGREDIENTS);

    return app;
}
