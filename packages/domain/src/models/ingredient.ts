import type { Unit } from './recipe';

export type IngredientCategory = 'vegetable' | 'fruit' | 'meat' | 'fish' | 'dairy' | 'grain' | 'spice' | 'herb' | 'sauce' | 'oil' | 'other';

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
    /** Grams-per-unit conversions, used to normalise quantities measured in e.g. tsp/tbsp/pcs for the shopping list. */
    unitConversions?: IngredientUnitConversion[];
}
