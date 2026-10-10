import cors from '@fastify/cors';
import Fastify, { type FastifyInstance } from 'fastify';

import { config } from './config';
import {
    createJsonCookingPlanRepository,
    createJsonMealPlanRepository,
    createJsonRecipeRepository,
    createJsonShoppingListRepository
} from './repositories/jsonRepositories';
import { registerCookingPlanRoutes } from './routes/cookingPlans';
import { registerDashboardRoutes } from './routes/dashboard';
import { registerMealPlanRoutes } from './routes/mealPlans';
import { registerRecipeRoutes } from './routes/recipes';
import { registerShoppingListRoutes } from './routes/shoppingLists';
import { ensureSeedData } from './seed/ensureSeedData';

export interface BuildAppOptions {
    dataDir?: string;
    webOrigin?: string;
}

export async function buildApp(options: BuildAppOptions = {}): Promise<FastifyInstance> {
    const dataDir = options.dataDir ?? config.dataDir;
    const app = Fastify({ logger: false });

    await app.register(cors, { origin: options.webOrigin ?? config.webOrigin });

    const recipeRepository = createJsonRecipeRepository(dataDir);
    const mealPlanRepository = createJsonMealPlanRepository(dataDir);
    const shoppingListRepository = createJsonShoppingListRepository(dataDir);
    const cookingPlanRepository = createJsonCookingPlanRepository(dataDir);

    await ensureSeedData(recipeRepository, mealPlanRepository);

    app.get('/api/health', async () => ({ status: 'ok' }));

    registerRecipeRoutes(app, recipeRepository);
    registerMealPlanRoutes(app, mealPlanRepository);
    registerShoppingListRoutes(app, shoppingListRepository, mealPlanRepository, recipeRepository);
    registerCookingPlanRoutes(app, cookingPlanRepository, mealPlanRepository, recipeRepository);
    registerDashboardRoutes(app, { mealPlanRepository, recipeRepository, cookingPlanRepository, shoppingListRepository });

    return app;
}
