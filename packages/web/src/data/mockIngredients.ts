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
        id: 'hakket-svinekoed',
        name: 'Hakket svinekød',
        category: 'meat',
        tags: [],
        dietaryProperties: ['gluten-free', 'lactose-free'],
        isStaple: false,
        imageUrl: '🥩'
    },
    {
        id: 'udon-nudler',
        name: 'Udon nudler, tørrede',
        category: 'grain',
        tags: [],
        dietaryProperties: ['vegan', 'vegetarian', 'lactose-free'],
        isStaple: false,
        imageUrl: '🍜'
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
        id: 'citrusfrugt',
        name: 'Citrusfrugt',
        category: 'fruit',
        tags: ['sour'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        imageUrl: '🍋'
    },
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
        id: 'hvidloeg',
        name: 'Hvidløg',
        category: 'vegetable',
        tags: [],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        imageUrl: '🧄',
        unitConversions: [
            { unit: 'pcs', grams: 5 },
            { unit: 'clove', grams: 5 }
        ]
    },
    {
        id: 'fiskesauce',
        name: 'Fiskesauce',
        category: 'sauce',
        tags: ['seasoning'],
        dietaryProperties: ['gluten-free', 'lactose-free'],
        isStaple: false,
        imageUrl: '🫙',
        unitConversions: [
            { unit: 'tsp', grams: 5 },
            { unit: 'tbsp', grams: 16 }
        ]
    },
    {
        id: 'koriander',
        name: 'Koriander',
        category: 'herb',
        tags: [],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        imageUrl: '🌿'
    },
    {
        id: 'foraarsloeg',
        name: 'Forårsløg',
        category: 'vegetable',
        tags: [],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        imageUrl: '🧅'
    }
];
