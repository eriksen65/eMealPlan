import type { Ingredient } from '@emealplan/domain';

const ASSETS = '/api/assets/ingredients';

export const INGREDIENTS: Ingredient[] = [
    {
        id: 'chili',
        name: 'Chili',
        category: 'vegetable',
        tags: ['spicy'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['chili', 'chilipeber', 'chili pepper', 'hot pepper', 'chilifrugt'],
        emoji: '🌶️',
        imageUrl: `${ASSETS}/chili.webp`,
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
        aliases: ['citron græs', 'lemongrass', 'citrongræsstilk'],
        emoji: '🌿',
        imageUrl: `${ASSETS}/citrongraes.webp`,
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
        aliases: ['citrusfrugt', 'citrus fruit', 'citrus'],
        emoji: '🍋',
        imageUrl: `${ASSETS}/citrusfrugt.webp`,
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
        id: 'ginger',
        name: 'Ingefær',
        category: 'spice',
        tags: ['spicy', 'seasoning'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['frisk ingefær', 'ingefærrod', 'ginger'],
        emoji: '🫚',
        imageUrl: `${ASSETS}/ingefaer.webp`,
        unitConversions: [{ unit: 'tsp', grams: 2 }],
        nutritionPer100g: {
            energyKcal: 80,
            fat: 0.75,
            saturatedFat: 0.2,
            carbohydrates: 17.8,
            sugars: 1.7,
            fiber: 2.0,
            protein: 1.82,
            salt: 0.033
        }
    },
    {
        id: 'ginger-ninja',
        name: 'Ginger Ninja',
        category: 'spice',
        tags: ['spicy', 'seasoning'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['ginger ninja', 'spicy ginger', 'ginger spice'],
        emoji: '🧂',
        imageUrl: `${ASSETS}/ginger-ninja.webp`,
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
        aliases: ['gulerod julienne', 'julienne carrot'],
        emoji: '🥕',
        imageUrl: `${ASSETS}/gulerod-julienne.webp`,
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
        aliases: ['hakket svinekød', 'svinefars', 'hakket gris', 'minced pork', 'ground pork', 'pork mince'],
        emoji: '🥩',
        imageUrl: `${ASSETS}/hakket-svinekoed.webp`,
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
        aliases: ['ingefærpuré', 'ingefær puré', 'ginger puree', 'ginger purée'],
        emoji: '🫚',
        imageUrl: `${ASSETS}/ingefaerpure.webp`,
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
        aliases: ['kogevand', 'pastavand', 'nudelvand', 'cooking water', 'boiling water'],
        emoji: '💧',
        imageUrl: `${ASSETS}/kogevand.webp`,
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
        aliases: ['mynte', 'frisk mynte', 'mynteblade', 'pebermynte', 'mint', 'spearmint', 'peppermint'],
        emoji: '🌱',
        imageUrl: `${ASSETS}/mynte.webp`,
        unitConversions: [{ unit: 'sprig', grams: 2 }],
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
        aliases: ['olie', 'madolie', 'madlavningsolie', 'neutral olie', 'vegetabilsk olie', 'cooking oil', 'vegetable oil'],
        emoji: '🫒',
        imageUrl: `${ASSETS}/olie.webp`,
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
        aliases: ['peber', 'sort peber', 'stødt peber', 'black pepper'],
        emoji: '🧂',
        imageUrl: `${ASSETS}/peber.webp`,
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
        aliases: ['salt', 'fint salt', 'bordsalt', 'køkkensalt', 'table salt', 'cooking salt'],
        emoji: '🧂',
        imageUrl: `${ASSETS}/salt.webp`,
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
        aliases: ['sød chilisauce', 'sød chili', 'chilisauce', 'sweet chili sauce', 'sweet chilli sauce'],
        emoji: '🫙',
        imageUrl: `${ASSETS}/soed-chilisauce.webp`,
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
        aliases: ['sojasauce', 'soya', 'soy sauce', 'soy', 'soy condiment'],
        isStaple: false,
        emoji: '🍶',
        imageUrl: `${ASSETS}/sojasauce.webp`,
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
        aliases: ['spidskål', 'spidskålshoved', 'spidskål skåret', 'pointed cabbage', 'shredded cabbage'],
        emoji: '🥬',
        imageUrl: `${ASSETS}/spidskaal.webp`,
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
        aliases: ['sukkerærter', 'sukker ærter', 'sukkerærte', 'sugar snap peas', 'snap peas', 'sugar peas'],
        emoji: '🫛',
        imageUrl: `${ASSETS}/sukkeraerter.webp`,
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
        aliases: ['udon-nudler', 'udon', 'udon noodles', 'dried udon noodles', 'japanske udon-nudler'],
        emoji: '🍜',
        imageUrl: `${ASSETS}/udon-nudler.webp`,
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
