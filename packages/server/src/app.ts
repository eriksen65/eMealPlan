import cors from '@fastify/cors';
import Fastify, { type FastifyInstance } from 'fastify';

import { config } from './config';

export interface BuildAppOptions {
    webOrigin?: string;
}

export async function buildApp(options: BuildAppOptions = {}): Promise<FastifyInstance> {
    const app = Fastify({ logger: false });

    await app.register(cors, { origin: options.webOrigin ?? config.webOrigin });

    app.get('/api/health', async () => ({ status: 'ok' }));

    app.get('/api/hello', async () => ({ message: 'Hello world from eMealPlan!' }));

    return app;
}
