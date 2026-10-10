import type { Id } from './common';

/**
 * Grocery categories used to group shopping-list items into aisles.
 * Kept intentionally small for the MVP; easy to extend later.
 */
export const INGREDIENT_CATEGORIES = ['fruit-veg', 'meat', 'fish', 'dairy', 'bread', 'dry-goods', 'frozen', 'other'] as const;

export type IngredientCategory = (typeof INGREDIENT_CATEGORIES)[number];

/** Units supported by the shopping-list quantity aggregator. */
export const UNITS = ['g', 'kg', 'ml', 'l', 'pcs', 'tbsp', 'tsp', 'pinch'] as const;

export type Unit = (typeof UNITS)[number];

export const RECIPE_TAGS = ['pasta', 'chicken', 'beef', 'fish', 'vegetarian', 'quick-meals', 'weekend-food', 'kid-friendly'] as const;

export type RecipeTag = (typeof RECIPE_TAGS)[number] | string;

export interface RecipeIngredient {
    id: Id;
    name: string;
    quantity: number;
    unit: Unit;
    category: IngredientCategory;
}

export interface RecipeStep {
    id: Id;
    order: number;
    instruction: string;
    /** How long this step takes, in minutes. Used to build the day's cooking plan. */
    durationMinutes: number;
}

export interface Recipe {
    id: Id;
    name: string;
    description: string;
    imageUrl?: string;
    portions: number;
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    ingredients: RecipeIngredient[];
    steps: RecipeStep[];
    tags: RecipeTag[];
    notes?: string;
    createdAt: string;
    updatedAt: string;
}

/** Total time is derived, never stored, so it can't drift from prep + cook time. */
export function getTotalTimeMinutes(recipe: Pick<Recipe, 'prepTimeMinutes' | 'cookTimeMinutes'>): number {
    return recipe.prepTimeMinutes + recipe.cookTimeMinutes;
}
