import type { Recipe } from '@emealplan/domain';

import { apiDelete, apiGet, apiPost, apiPut } from './client';

export type RecipeInput = Omit<Recipe, 'id' | 'createdAt' | 'updatedAt'>;

export function fetchRecipes(filters: { search?: string; tag?: string } = {}): Promise<Recipe[]> {
    const params = new URLSearchParams();
    if (filters.search) params.set('search', filters.search);
    if (filters.tag) params.set('tag', filters.tag);
    const query = params.toString();
    return apiGet<Recipe[]>(`/recipes${query ? `?${query}` : ''}`);
}

export function fetchRecipe(id: string): Promise<Recipe> {
    return apiGet<Recipe>(`/recipes/${id}`);
}

export function createRecipe(input: RecipeInput): Promise<Recipe> {
    return apiPost<Recipe>('/recipes', input);
}

export function updateRecipe(id: string, input: RecipeInput): Promise<Recipe> {
    return apiPut<Recipe>(`/recipes/${id}`, input);
}

export function deleteRecipe(id: string): Promise<void> {
    return apiDelete<void>(`/recipes/${id}`);
}
