import type { FastifyInstance } from 'fastify';
import type { Recipe } from '@emealplan/domain';

import { generateId } from '../ids';
import type { RecipeRepository } from '../repositories/types';

interface RecipeInput {
    name: string;
    description: string;
    imageUrl?: string;
    portions: number;
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    ingredients: Recipe['ingredients'];
    steps: Recipe['steps'];
    tags: Recipe['tags'];
    notes?: string;
}

export function registerRecipeRoutes(app: FastifyInstance, recipeRepository: RecipeRepository): void {
    app.get<{ Querystring: { search?: string; tag?: string } }>('/api/recipes', async (request) => {
        const { search, tag } = request.query;
        let recipes = await recipeRepository.list();

        if (search) {
            const needle = search.toLowerCase();
            recipes = recipes.filter((recipe) => recipe.name.toLowerCase().includes(needle) || recipe.description.toLowerCase().includes(needle));
        }
        if (tag) {
            recipes = recipes.filter((recipe) => recipe.tags.includes(tag));
        }

        return recipes.sort((a, b) => a.name.localeCompare(b.name));
    });

    app.get<{ Params: { id: string } }>('/api/recipes/:id', async (request, reply) => {
        const recipe = await recipeRepository.getById(request.params.id);
        if (!recipe) return reply.code(404).send({ message: 'Recipe not found' });
        return recipe;
    });

    app.post<{ Body: RecipeInput }>('/api/recipes', async (request, reply) => {
        const now = new Date().toISOString();
        const recipe: Recipe = { id: generateId(), ...request.body, createdAt: now, updatedAt: now };
        await recipeRepository.save(recipe);
        return reply.code(201).send(recipe);
    });

    app.put<{ Params: { id: string }; Body: RecipeInput }>('/api/recipes/:id', async (request, reply) => {
        const existing = await recipeRepository.getById(request.params.id);
        if (!existing) return reply.code(404).send({ message: 'Recipe not found' });

        const updated: Recipe = { ...existing, ...request.body, id: existing.id, updatedAt: new Date().toISOString() };
        await recipeRepository.save(updated);
        return updated;
    });

    app.delete<{ Params: { id: string } }>('/api/recipes/:id', async (request, reply) => {
        const removed = await recipeRepository.remove(request.params.id);
        if (!removed) return reply.code(404).send({ message: 'Recipe not found' });
        return reply.code(204).send();
    });
}
