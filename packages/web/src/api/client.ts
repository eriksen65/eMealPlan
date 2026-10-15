import type { Ingredient } from '@emealplan/domain';
import type { Recipe } from '@emealplan/domain';

async function getJson<T>(url: string): Promise<T> {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Request to ${url} failed with ${response.status}`);
    return (await response.json()) as T;
}

export const fetchRecipes = () => getJson<Recipe[]>('/api/recipes');

export const fetchIngredients = () => getJson<Ingredient[]>('/api/ingredients');
