import type { Unit } from './recipe';

export type IngredientCategory = 'vegetable' | 'fruit' | 'meat' | 'fish' | 'dairy' | 'grain' | 'spice' | 'herb' | 'sauce' | 'oil' | 'seed' | 'other';

export type IngredientTag = 'spicy' | 'seasoning' | 'sour' | 'sweet' | 'bitter';

export type DietaryProperty = 'vegan' | 'vegetarian' | 'gluten-free' | 'lactose-free';

export interface NutritionPer100g {
    /** Energi */
    energyKcal: number;
    /** Fedt */
    fat: number;
    /** Heraf mættede fedtsyrer */
    saturatedFat: number;
    /** Kulhydrat */
    carbohydrates: number;
    /** Heraf sukkerarter */
    sugars: number;
    /** Kostfibre */
    fiber: number;
    /** Protein */
    protein: number;
    /** Salt */
    salt: number;
}

export interface IngredientUnitConversion {
    unit: Unit;
    grams: number;
}

export interface HomemadeOption {
    /** Id of an existing ingredient. */
    ingredientId: string;
    /** When to choose this option, e.g. shelf life. */
    description: string;
}

export interface HomemadeLine {
    quantity: number;
    unit: Unit;
    /** E.g. "skrællet". */
    note?: string;
    /** Id of an existing ingredient (fixed line). */
    ingredientId?: string;
    /** Plain-text name for a generic line such as "Væske"; used together with `options`. */
    label?: string;
    /** Either/or choices for a generic line. */
    options?: HomemadeOption[];
}

/** Description of how an ingredient can be made at home from other ingredients. */
export interface HomemadeRecipe {
    ingredients: HomemadeLine[];
    /** Step-by-step instructions for making the ingredient at home. Support markdown formatting. */
    steps: string[];
}

export interface IngredientDerivation {
    /** Id of the ingredient that is bought and processed into this one. */
    ingredientId: string;
    /** Unit in which the source ingredient is bought, e.g. `pcs`. */
    unit: Unit;
    /** Grams of this ingredient that one `unit` of the source yields. */
    yieldGrams: number;
}

export interface Ingredient {
    id: string;
    name: string;

    category: IngredientCategory;
    tags?: IngredientTag[];
    dietaryProperties: DietaryProperty[];

    isStaple: boolean;
    aliases?: string[];

    /** Emoji placeholder icon, used when no real photo is set. */
    emoji?: string;
    /** Optional real photo URL; falls back to emoji when not set. */
    imageUrl?: string;
    nutritionPer100g?: NutritionPer100g;
    /** Set when the ingredient can be made at home from other ingredients. */
    homemade?: HomemadeRecipe;
    /** Set when the shopping list should buy another ingredient instead (e.g. citronskal -> citron). */
    derivedFrom?: IngredientDerivation;
    /** Grams-per-unit conversions, used to normalise quantities measured in e.g. tsp/tbsp/pcs for the shopping list. */
    unitConversions?: IngredientUnitConversion[];
}
