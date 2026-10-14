import type { Unit } from './mockRecipes';

export type IngredientCategory = 'vegetable' | 'fruit' | 'meat' | 'fish' | 'dairy' | 'grain' | 'spice' | 'herb' | 'sauce' | 'oil' | 'other';

export type IngredientTag = 'spicy' | 'seasoning' | 'sour' | 'sweet' | 'bitter';

export type DietaryProperty = 'vegan' | 'vegetarian' | 'gluten-free' | 'lactose-free';

export interface NutritionPer100g {
    energyKcal: number;
    protein: number;
    carbohydrates: number;
    fat: number;
    fiber?: number;
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

    /** Mock placeholder icon (emoji) for now; real product photos follow later. */
    imageUrl?: string;
    nutritionPer100g?: NutritionPer100g;
    /** Grams-per-unit conversions, used to normalise quantities measured in e.g. tsp/tbsp/pcs for the shopping list. */
    unitConversions?: IngredientUnitConversion[];
}

export const MOCK_INGREDIENTS: Ingredient[] = [
    {
        id: 'chili',
        name: 'Chili',
        category: 'vegetable',
        tags: ['spicy'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        imageUrl: '🌶️'
    },
    {
        id: 'citrongraes',
        name: 'Citrongræs',
        category: 'herb',
        tags: ['sour'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        imageUrl: '🌿'
    },
    {
        id: 'citrusfrugt',
        name: 'Citrusfrugt',
        category: 'fruit',
        tags: ['sour'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        imageUrl: '🍋'
    },
    {
        id: 'ginger-ninja',
        name: 'Ginger Ninja',
        category: 'spice',
        tags: ['spicy', 'seasoning'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        imageUrl: '🧂',
        unitConversions: [
            { unit: 'tsp', grams: 6 },
            { unit: 'tbsp', grams: 18 }
        ]
    },
    {
        id: 'gulerod-julienne',
        name: 'Gulerod, julienne',
        category: 'vegetable',
        tags: ['sweet'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        imageUrl: '🥕'
    },
    {
        id: 'hakket-svinekoed',
        name: 'Hakket svinekød',
        category: 'meat',
        tags: [],
        dietaryProperties: ['gluten-free', 'lactose-free'],
        isStaple: false,
        imageUrl: '🥩'
    },
    {
        id: 'ingefaerpure',
        name: 'Ingefærpuré',
        category: 'spice',
        tags: [],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        imageUrl: '🫚',
        unitConversions: [
            { unit: 'tsp', grams: 6 },
            { unit: 'tbsp', grams: 18 }
        ]
    },
    {
        id: 'mynte',
        name: 'Mynte',
        category: 'herb',
        tags: [],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        imageUrl: '🌱'
    },
    {
        id: 'soed-chilisauce',
        name: 'Sød chilisauce',
        category: 'sauce',
        tags: ['sweet', 'spicy'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        imageUrl: '🫙'
    },
    {
        id: 'sojasauce',
        name: 'Sojasauce',
        category: 'sauce',
        tags: ['seasoning'],
        dietaryProperties: ['vegan', 'vegetarian', 'lactose-free'],
        isStaple: false,
        imageUrl: '🍶'
    },
    {
        id: 'spidskaal',
        name: 'Spidskål, skåret',
        category: 'vegetable',
        tags: [],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        imageUrl: '🥬'
    },
    {
        id: 'sukkeraerter',
        name: 'Sukkerærter',
        category: 'vegetable',
        tags: ['sweet'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        imageUrl: '🫛'
    },
    {
        id: 'udon-nudler',
        name: 'Udon nudler, tørrede',
        category: 'grain',
        tags: [],
        dietaryProperties: ['vegan', 'vegetarian', 'lactose-free'],
        isStaple: false,
        imageUrl: '🍜'
    }
];
