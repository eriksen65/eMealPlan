import type { Unit } from './mockRecipes';

import chiliPhoto from '../assets/ingredients/chili.webp';
import citrongraesPhoto from '../assets/ingredients/citrongraes.webp';
import citrusfrugtPhoto from '../assets/ingredients/citrusfrugt.webp';
import gingerNinjaPhoto from '../assets/ingredients/ginger-ninja.webp';
import gulerodJuliennePhoto from '../assets/ingredients/gulerod-julienne.webp';
import hakketSvinekoedPhoto from '../assets/ingredients/hakket-svinekoed.webp';
import ingefaerpurePhoto from '../assets/ingredients/ingefaerpure.webp';
import myntePhoto from '../assets/ingredients/mynte.webp';
import soedChilisaucePhoto from '../assets/ingredients/soed-chilisauce.webp';
import sojasaucePhoto from '../assets/ingredients/sojasauce.webp';
import spidskaalPhoto from '../assets/ingredients/spidskaal.webp';
import sukkeraerterPhoto from '../assets/ingredients/sukkeraerter.webp';
import udonNudlerPhoto from '../assets/ingredients/udon-nudler.webp';

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

    /** Mock placeholder icon (emoji), used when no real photo is set. */
    imageUrl?: string;
    /** Optional real photo; falls back to imageUrl (emoji) when not set. */
    image?: string;
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
        imageUrl: '🌶️',
        image: chiliPhoto
    },
    {
        id: 'citrongraes',
        name: 'Citrongræs',
        category: 'herb',
        tags: ['sour'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        imageUrl: '🌿',
        image: citrongraesPhoto
    },
    {
        id: 'citrusfrugt',
        name: 'Citrusfrugt',
        category: 'fruit',
        tags: ['sour'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        imageUrl: '🍋',
        image: citrusfrugtPhoto
    },
    {
        id: 'ginger-ninja',
        name: 'Ginger Ninja',
        category: 'spice',
        tags: ['spicy', 'seasoning'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        imageUrl: '🧂',
        image: gingerNinjaPhoto,
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
        imageUrl: '🥕',
        image: gulerodJuliennePhoto
    },
    {
        id: 'hakket-svinekoed',
        name: 'Hakket svinekød',
        category: 'meat',
        tags: [],
        dietaryProperties: ['gluten-free', 'lactose-free'],
        isStaple: false,
        imageUrl: '🥩',
        image: hakketSvinekoedPhoto
    },
    {
        id: 'ingefaerpure',
        name: 'Ingefærpuré',
        category: 'spice',
        tags: [],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        imageUrl: '🫚',
        image: ingefaerpurePhoto,
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
        imageUrl: '🌱',
        image: myntePhoto
    },
    {
        id: 'soed-chilisauce',
        name: 'Sød chilisauce',
        category: 'sauce',
        tags: ['sweet', 'spicy'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        imageUrl: '🫙',
        image: soedChilisaucePhoto
    },
    {
        id: 'sojasauce',
        name: 'Sojasauce',
        category: 'sauce',
        tags: ['seasoning'],
        dietaryProperties: ['vegan', 'vegetarian', 'lactose-free'],
        isStaple: false,
        imageUrl: '🍶',
        image: sojasaucePhoto
    },
    {
        id: 'spidskaal',
        name: 'Spidskål, skåret',
        category: 'vegetable',
        tags: [],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        imageUrl: '🥬',
        image: spidskaalPhoto
    },
    {
        id: 'sukkeraerter',
        name: 'Sukkerærter',
        category: 'vegetable',
        tags: ['sweet'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        imageUrl: '🫛',
        image: sukkeraerterPhoto
    },
    {
        id: 'udon-nudler',
        name: 'Udon nudler, tørrede',
        category: 'grain',
        tags: [],
        dietaryProperties: ['vegan', 'vegetarian', 'lactose-free'],
        isStaple: false,
        imageUrl: '🍜',
        image: udonNudlerPhoto
    }
];
