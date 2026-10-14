import type { Unit } from './mockRecipes';

import chiliPhoto from '../assets/ingredients/chili.webp';
import citrongraesPhoto from '../assets/ingredients/citrongraes.webp';
import citrusfrugtPhoto from '../assets/ingredients/citrusfrugt.webp';
import gingerNinjaPhoto from '../assets/ingredients/ginger-ninja.webp';
import gulerodJuliennePhoto from '../assets/ingredients/gulerod-julienne.webp';
import hakketSvinekoedPhoto from '../assets/ingredients/hakket-svinekoed.webp';
import ingefaerpurePhoto from '../assets/ingredients/ingefaerpure.webp';
import kogevandPhoto from '../assets/ingredients/kogevand.webp';
import myntePhoto from '../assets/ingredients/mynte.webp';
import oliePhoto from '../assets/ingredients/olie.webp';
import peberPhoto from '../assets/ingredients/peber.webp';
import saltPhoto from '../assets/ingredients/salt.webp';
import soedChilisaucePhoto from '../assets/ingredients/soed-chilisauce.webp';
import sojasaucePhoto from '../assets/ingredients/sojasauce.webp';
import spidskaalPhoto from '../assets/ingredients/spidskaal.webp';
import sukkeraerterPhoto from '../assets/ingredients/sukkeraerter.webp';
import udonNudlerPhoto from '../assets/ingredients/udon-nudler.webp';

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

export const MOCK_INGREDIENTS: Ingredient[] = [
    {
        id: 'chili',
        name: 'Chili',
        category: 'vegetable',
        tags: ['spicy'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        emoji: '🌶️',
        imageUrl: chiliPhoto,
        unitConversions: [{ unit: 'pcs', grams: 30 }],
        nutritionPer100g: {
            energyKcal: 40,
            fat: 0.4,
            saturatedFat: 0.04,
            carbohydrates: 8.8,
            sugars: 5.3,
            fiber: 1.5,
            protein: 1.9,
            salt: 0.02
        }
    },
    {
        id: 'citrongraes',
        name: 'Citrongræs',
        category: 'herb',
        tags: ['sour'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        emoji: '🌿',
        imageUrl: citrongraesPhoto,
        unitConversions: [{ unit: 'pcs', grams: 25 }],
        nutritionPer100g: {
            energyKcal: 99,
            fat: 0.49,
            saturatedFat: 0.05,
            carbohydrates: 25,
            sugars: 0,
            fiber: 4.3,
            protein: 1.8,
            salt: 0.015
        }
    },
    {
        id: 'citrusfrugt',
        name: 'Citrusfrugt',
        category: 'fruit',
        tags: ['sour'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        emoji: '🍋',
        imageUrl: citrusfrugtPhoto,
        unitConversions: [{ unit: 'pcs', grams: 30 }],
        nutritionPer100g: {
            energyKcal: 22,
            fat: 0.24,
            saturatedFat: 0.04,
            carbohydrates: 6.9,
            sugars: 2.52,
            fiber: 0.3,
            protein: 0.35,
            salt: 0.0025
        }
    },
    {
        id: 'ginger-ninja',
        name: 'Ginger Ninja',
        category: 'spice',
        tags: ['spicy', 'seasoning'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        emoji: '🧂',
        imageUrl: gingerNinjaPhoto,
        unitConversions: [
            { unit: 'tsp', grams: 6 },
            { unit: 'tbsp', grams: 18 }
        ],
        nutritionPer100g: {
            energyKcal: 80,
            fat: 0.75,
            saturatedFat: 0.2,
            carbohydrates: 17.8,
            sugars: 1.7,
            fiber: 2.0,
            protein: 1.82,
            salt: 0.0325
        }
    },
    {
        id: 'gulerod-julienne',
        name: 'Gulerod, julienne',
        category: 'vegetable',
        tags: ['sweet'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        emoji: '🥕',
        imageUrl: gulerodJuliennePhoto,
        nutritionPer100g: {
            energyKcal: 41,
            fat: 0.6,
            saturatedFat: 0.3,
            carbohydrates: 11,
            sugars: 9.1,
            fiber: 0.5,
            protein: 1.7,
            salt: 0.1
        }
    },
    {
        id: 'hakket-svinekoed',
        name: 'Hakket svinekød',
        category: 'meat',
        tags: [],
        dietaryProperties: ['gluten-free', 'lactose-free'],
        isStaple: false,
        emoji: '🥩',
        imageUrl: hakketSvinekoedPhoto,
        nutritionPer100g: {
            energyKcal: 263,
            fat: 21.2,
            saturatedFat: 7.6,
            carbohydrates: 0,
            sugars: 0,
            fiber: 0,
            protein: 16.9,
            salt: 0.14
        }
    },
    {
        id: 'ingefaerpure',
        name: 'Ingefærpuré',
        category: 'spice',
        tags: [],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        emoji: '🫚',
        imageUrl: ingefaerpurePhoto,
        unitConversions: [
            { unit: 'tsp', grams: 6 },
            { unit: 'tbsp', grams: 18 }
        ],
        nutritionPer100g: {
            energyKcal: 80,
            fat: 0.75,
            saturatedFat: 0,
            carbohydrates: 17.77,
            sugars: 2,
            fiber: 2,
            protein: 1.82,
            salt: 0.0325
        }
    },
    {
        id: 'kogevand',
        name: 'Kogevand',
        category: 'other',
        tags: [],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: true,
        emoji: '💧',
        imageUrl: kogevandPhoto,
        nutritionPer100g: {
            energyKcal: 0,
            fat: 0,
            saturatedFat: 0,
            carbohydrates: 0,
            sugars: 0,
            fiber: 0,
            protein: 0,
            salt: 1
        }
    },
    {
        id: 'mynte',
        name: 'Mynte',
        category: 'herb',
        tags: [],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        emoji: '🌱',
        imageUrl: myntePhoto,
        nutritionPer100g: {
            energyKcal: 44,
            fat: 0.73,
            saturatedFat: 0.191,
            carbohydrates: 8.41,
            sugars: 0,
            fiber: 6.8,
            protein: 3.29,
            salt: 0.075
        }
    },
    {
        id: 'olie',
        name: 'Olie',
        category: 'oil',
        tags: [],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: true,
        emoji: '🫒',
        imageUrl: oliePhoto,
        nutritionPer100g: {
            energyKcal: 884,
            fat: 100,
            saturatedFat: 13.8,
            carbohydrates: 0,
            sugars: 0,
            fiber: 0,
            protein: 0,
            salt: 0.005
        }
    },
    {
        id: 'peber',
        name: 'Peber',
        category: 'spice',
        tags: ['seasoning'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: true,
        emoji: '🧂',
        imageUrl: peberPhoto,
        nutritionPer100g: {
            energyKcal: 251,
            fat: 3.26,
            saturatedFat: 1.39,
            carbohydrates: 63.95,
            sugars: 0.64,
            fiber: 25.3,
            protein: 10.4,
            salt: 0.05
        }
    },
    {
        id: 'salt',
        name: 'Salt',
        category: 'spice',
        tags: ['seasoning'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: true,
        emoji: '🧂',
        imageUrl: saltPhoto,
        nutritionPer100g: {
            energyKcal: 0,
            fat: 0,
            saturatedFat: 0,
            carbohydrates: 0,
            sugars: 0,
            fiber: 0,
            protein: 0,
            salt: 100
        }
    },
    {
        id: 'soed-chilisauce',
        name: 'Sød chilisauce',
        category: 'sauce',
        tags: ['sweet', 'spicy'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        emoji: '🫙',
        imageUrl: soedChilisaucePhoto,
        nutritionPer100g: {
            energyKcal: 125,
            fat: 0,
            saturatedFat: 0,
            carbohydrates: 31.25,
            sugars: 28.1,
            fiber: 0,
            protein: 0,
            salt: 2.19
        }
    },
    {
        id: 'sojasauce',
        name: 'Sojasauce',
        category: 'sauce',
        tags: ['seasoning'],
        dietaryProperties: ['vegan', 'vegetarian', 'lactose-free'],
        isStaple: false,
        emoji: '🍶',
        imageUrl: sojasaucePhoto,
        unitConversions: [{ unit: 'ml', grams: 1.2 }],
        nutritionPer100g: {
            energyKcal: 60,
            fat: 0.1,
            saturatedFat: 0,
            carbohydrates: 5.6,
            sugars: 1.7,
            fiber: 0.8,
            protein: 10.5,
            salt: 13.97
        }
    },
    {
        id: 'spidskaal',
        name: 'Spidskål, skåret',
        category: 'vegetable',
        tags: [],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        emoji: '🥬',
        imageUrl: spidskaalPhoto,
        nutritionPer100g: {
            energyKcal: 27,
            fat: 0.1,
            saturatedFat: 0.01,
            carbohydrates: 6.1,
            sugars: 2.27,
            fiber: 3.1,
            protein: 2.0,
            salt: 0.07
        }
    },
    {
        id: 'sukkeraerter',
        name: 'Sukkerærter',
        category: 'vegetable',
        tags: ['sweet'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        emoji: '🫛',
        imageUrl: sukkeraerterPhoto,
        nutritionPer100g: {
            energyKcal: 42,
            fat: 0.2,
            saturatedFat: 0.04,
            carbohydrates: 7.55,
            sugars: 4.0,
            fiber: 2.6,
            protein: 2.8,
            salt: 0.01
        }
    },
    {
        id: 'udon-nudler',
        name: 'Udon nudler, tørrede',
        category: 'grain',
        tags: [],
        dietaryProperties: ['vegan', 'vegetarian', 'lactose-free'],
        isStaple: false,
        emoji: '🍜',
        imageUrl: udonNudlerPhoto,
        nutritionPer100g: {
            energyKcal: 336,
            fat: 1.2,
            saturatedFat: 0.25,
            carbohydrates: 72.9,
            sugars: 0,
            fiber: 0,
            protein: 8.3,
            salt: 3.8
        }
    }
];
