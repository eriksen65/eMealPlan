import type { Id } from './common';

/** Units supported by recipes and the shopping-list quantity aggregator. */
export const UNITS = ['g', 'kg', 'ml', 'l', 'pcs', 'tbsp', 'tsp', 'pinch', 'clove', 'sprig'] as const;

export type Unit = (typeof UNITS)[number];

/**
 * Meta attributes about a recipe that can't be derived from its other fields
 * (e.g. ingredient categories already imply protein/dish type, so those are
 * not repeated here as tags).
 */
export const RECIPE_TAGS = ['quick', 'weekend', 'kid-friendly', 'meal-prep'] as const;

export type RecipeTag = (typeof RECIPE_TAGS)[number];

export interface TimeEstimate {
    portions: number;
    minMinutes: number;
    maxMinutes: number;
}

export interface PortionAmount {
    portions: number;
    amount: number;
}

export type IngredientScaling = { type: 'linear' } | { type: 'portions'; amounts: PortionAmount[] };

export interface RecipeIngredient {
    ingredientId: Id;
    amount: number;
    unit: Unit;
    scaling: IngredientScaling;
    displayName?: string;
    optional?: boolean;
}

export interface RecipeStep {
    title: string;
    instruction: string;
    /** How long this step takes, in minutes. Used to build the day's cooking plan. */
    durationMinutes: number;
    tip?: string;
    vigtig?: string;
    image?: string;
}

/** A recipe as shown in the recipe library. */
export interface Recipe {
    id: Id;
    title: string;
    subtitle: string;
    description: string;
    emoji: string;
    /** Optional real photo; falls back to the emoji when not set. */
    image?: string;
    /** Number of servings the ingredient amounts are based on. */
    baseServings: number;
    timeEstimates: TimeEstimate[];
    tags: RecipeTag[];
    ingredients: RecipeIngredient[];
    steps: RecipeStep[];
}
