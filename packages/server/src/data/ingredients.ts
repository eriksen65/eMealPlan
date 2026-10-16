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
        id: 'ingefaer',
        name: 'Ingefær',
        category: 'spice',
        tags: ['spicy', 'seasoning'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['frisk ingefær', 'ingefærrod', 'ginger', 'fresh ginger'],
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
        id: 'stoedt-ingefaer',
        name: 'Stødt ingefær',
        category: 'spice',
        tags: ['spicy', 'seasoning'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: true,
        aliases: ['ingefærpulver', 'tørret ingefær', 'ground ginger', 'ginger powder', 'dried ginger'],
        emoji: '🫚',
        imageUrl: `${ASSETS}/stoedt-ingefaer.webp`,
        unitConversions: [
            { unit: 'tsp', grams: 2 },
            { unit: 'tbsp', grams: 5.2 }
        ],
        nutritionPer100g: {
            energyKcal: 335,
            fat: 4.24,
            saturatedFat: 2.6,
            carbohydrates: 71.62,
            sugars: 3.39,
            fiber: 14.1,
            protein: 8.98,
            salt: 0.07
        }
    },
    {
        id: 'hvidloegspulver',
        name: 'Hvidløgspulver',
        category: 'spice',
        tags: ['seasoning'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['hvidløg pulver', 'tørret hvidløg', 'garlic powder', 'powdered garlic'],
        emoji: '🧄',
        imageUrl: `${ASSETS}/hvidloegspulver.webp`,
        unitConversions: [{ unit: 'tsp', grams: 3 }],
        nutritionPer100g: {
            energyKcal: 331,
            fat: 0.7,
            saturatedFat: 0.25,
            carbohydrates: 72.7,
            sugars: 2.4,
            fiber: 9.0,
            protein: 16.6,
            salt: 0.15
        }
    },
    {
        id: 'loegpulver',
        name: 'Løgpulver',
        category: 'spice',
        tags: ['seasoning'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['løg pulver', 'tørret løg', 'onion powder', 'powdered onion'],
        emoji: '🧅',
        imageUrl: `${ASSETS}/loegpulver.webp`,
        unitConversions: [{ unit: 'tsp', grams: 2.4 }],
        nutritionPer100g: {
            energyKcal: 341,
            fat: 1.0,
            saturatedFat: 0.2,
            carbohydrates: 79.1,
            sugars: 6.6,
            fiber: 15.2,
            protein: 10.4,
            salt: 0.18
        }
    },
    {
        id: 'paprika',
        name: 'Paprika',
        category: 'spice',
        tags: ['seasoning'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['paprikapulver', 'paprika pulver', 'paprika powder', 'ground paprika'],
        emoji: '🌶️',
        imageUrl: `${ASSETS}/paprika.webp`,
        unitConversions: [{ unit: 'tsp', grams: 2.3 }],
        nutritionPer100g: {
            energyKcal: 282,
            fat: 13.0,
            saturatedFat: 2.1,
            carbohydrates: 54.0,
            sugars: 10.3,
            fiber: 34.9,
            protein: 14.1,
            salt: 0.17
        }
    },
    {
        id: 'chiliflager',
        name: 'Chiliflager',
        category: 'spice',
        tags: ['spicy', 'seasoning'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['chili flager', 'tørret chili', 'knust chili', 'chili flakes', 'red pepper flakes', 'crushed chili'],
        emoji: '🌶️',
        imageUrl: `${ASSETS}/chiliflager.webp`,
        unitConversions: [{ unit: 'tsp', grams: 1.8 }],
        nutritionPer100g: {
            energyKcal: 318,
            fat: 17.3,
            saturatedFat: 3.3,
            carbohydrates: 56.6,
            sugars: 10.3,
            fiber: 27.2,
            protein: 12.0,
            salt: 0.08
        }
    },
    {
        id: 'stoedt-koriander',
        name: 'Stødt koriander',
        category: 'spice',
        tags: ['seasoning'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['korianderpulver', 'koriander pulver', 'stødte korianderfrø', 'ground coriander', 'coriander powder', 'ground coriander seeds'],
        emoji: '🌿',
        imageUrl: `${ASSETS}/stoedt-koriander.webp`,
        unitConversions: [{ unit: 'tsp', grams: 1.8 }],
        nutritionPer100g: {
            energyKcal: 298,
            fat: 17.8,
            saturatedFat: 1.0,
            carbohydrates: 55.0,
            sugars: 0,
            fiber: 41.9,
            protein: 12.4,
            salt: 0.09
        }
    },
    {
        id: 'spidskommen',
        name: 'Spidskommen',
        category: 'spice',
        tags: ['seasoning'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['stødt spidskommen', 'spidskommenpulver', 'cumin', 'ground cumin', 'cumin powder'],
        emoji: '🌿',
        imageUrl: `${ASSETS}/spidskommen.webp`,
        unitConversions: [{ unit: 'tsp', grams: 2.1 }],
        nutritionPer100g: {
            energyKcal: 375,
            fat: 22.3,
            saturatedFat: 1.5,
            carbohydrates: 44.2,
            sugars: 2.3,
            fiber: 10.5,
            protein: 17.8,
            salt: 0.42
        }
    },
    {
        id: 'brun-farin',
        name: 'Brun farin',
        category: 'other',
        tags: ['sweet'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['brun sukker', 'brunt sukker', 'brown sugar', 'soft brown sugar'],
        emoji: '🟤',
        imageUrl: `${ASSETS}/brun-farin.webp`,
        unitConversions: [
            { unit: 'tsp', grams: 4 },
            { unit: 'tbsp', grams: 12 }
        ],
        nutritionPer100g: {
            energyKcal: 380,
            fat: 0,
            saturatedFat: 0,
            carbohydrates: 98,
            sugars: 97,
            fiber: 0,
            protein: 0.1,
            salt: 0.07
        }
    },
    {
        id: 'citron',
        name: 'Citron',
        category: 'fruit',
        tags: ['sour'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['citroner', 'frisk citron', 'lemon', 'lemons', 'fresh lemon'],
        emoji: '🍋',
        imageUrl: `${ASSETS}/citron.webp`,
        unitConversions: [{ unit: 'pcs', grams: 120 }],
        nutritionPer100g: {
            energyKcal: 29,
            fat: 0.3,
            saturatedFat: 0.04,
            carbohydrates: 9.3,
            sugars: 2.5,
            fiber: 2.8,
            protein: 1.1,
            salt: 0.005
        }
    },
    {
        id: 'citronskal',
        name: 'Citronskal',
        category: 'fruit',
        tags: ['sour'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['revet citronskal', 'citronzest', 'citronskal, revet', 'lemon zest', 'grated lemon zest', 'lemon peel'],
        emoji: '🍋',
        imageUrl: `${ASSETS}/citronskal.webp`,
        unitConversions: [
            { unit: 'tsp', grams: 2 },
            { unit: 'tbsp', grams: 6 }
        ],
        derivedFrom: { ingredientId: 'citron', unit: 'pcs', yieldGrams: 8 },
        homemade: {
            ingredients: [{ ingredientId: 'citron', quantity: 1, unit: 'pcs', note: 'økologisk eller ubehandlet' }],
            steps: [
                'Vask: Vask citronen grundigt i varmt vand.',
                'Riv: Riv skallen fint på et rivejern. Undgå det hvide, da det er bittert.',
                'Brug: Én citron giver ca. 8 g skal (ca. 1 tsk).'
            ]
        },
        nutritionPer100g: {
            energyKcal: 47,
            fat: 0.3,
            saturatedFat: 0.04,
            carbohydrates: 16,
            sugars: 4.2,
            fiber: 10.6,
            protein: 1.5,
            salt: 0.015
        }
    },
    {
        id: 'laks',
        name: 'Laks',
        category: 'fish',
        dietaryProperties: ['gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['laksefilet', 'laksestykke', 'frisk laks', 'rå laks', 'salmon', 'salmon fillet', 'atlantic salmon'],
        emoji: '🐟',
        imageUrl: `${ASSETS}/laks.webp`,
        nutritionPer100g: {
            energyKcal: 208,
            fat: 13.42,
            saturatedFat: 3.1,
            carbohydrates: 0,
            sugars: 0,
            fiber: 0,
            protein: 20.42,
            salt: 0.15
        }
    },
    {
        id: 'kartofler',
        name: 'Kartofler',
        category: 'vegetable',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['kartoffel', 'kartofler', 'potato', 'potatoes'],
        emoji: '🥔',
        imageUrl: `${ASSETS}/kartofler.webp`,
        unitConversions: [{ unit: 'pcs', grams: 170 }],
        nutritionPer100g: {
            energyKcal: 77,
            fat: 0.09,
            saturatedFat: 0.03,
            carbohydrates: 17.5,
            sugars: 0.8,
            fiber: 2.1,
            protein: 2.1,
            salt: 0.015
        }
    },
    {
        id: 'gul-karrypasta',
        name: 'Gul karrypasta',
        category: 'sauce',
        tags: ['spicy', 'seasoning'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['gul karrypaste', 'gul currypasta', 'yellow curry paste', 'thai yellow curry paste', 'yellow curry'],
        emoji: '🍛',
        imageUrl: `${ASSETS}/gul-karrypasta.webp`,
        unitConversions: [
            { unit: 'tsp', grams: 5 },
            { unit: 'tbsp', grams: 15 }
        ],
        nutritionPer100g: {
            energyKcal: 153,
            fat: 1.9,
            saturatedFat: 0.3,
            carbohydrates: 22.7,
            sugars: 5.6,
            fiber: 11.9,
            protein: 5.3,
            salt: 14.3
        }
    },
    {
        id: 'fish-sauce',
        name: 'Fiskesauce',
        category: 'sauce',
        tags: ['seasoning'],
        dietaryProperties: ['gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['fish sauce', 'fiskesovs', 'thai fish sauce', 'nam pla'],
        emoji: '🐟',
        imageUrl: `${ASSETS}/fish-sauce.webp`,
        unitConversions: [
            { unit: 'tsp', grams: 5.7 },
            { unit: 'tbsp', grams: 17 }
        ],
        nutritionPer100g: {
            energyKcal: 55,
            fat: 0,
            saturatedFat: 0,
            carbohydrates: 3.4,
            sugars: 3.4,
            fiber: 0,
            protein: 10,
            salt: 24.4
        }
    },
    {
        id: 'kokosmaelk',
        name: 'Kokosmælk',
        category: 'other',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['kokos mælk', 'coconut milk', 'canned coconut milk', 'kokosmælk på dåse'],
        emoji: '🥥',
        imageUrl: `${ASSETS}/kokosmaelk.webp`,
        unitConversions: [
            { unit: 'tsp', grams: 4.7 },
            { unit: 'tbsp', grams: 15 }
        ],
        nutritionPer100g: {
            energyKcal: 197,
            fat: 21.3,
            saturatedFat: 18.9,
            carbohydrates: 2.8,
            sugars: 1.5,
            fiber: 0,
            protein: 2.0,
            salt: 0.033
        }
    },
    {
        id: 'gulerod',
        name: 'Gulerod',
        category: 'vegetable',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['gulerødder', 'carrot', 'carrots', 'rå gulerod'],
        emoji: '🥕',
        imageUrl: `${ASSETS}/gulerod.webp`,
        unitConversions: [{ unit: 'pcs', grams: 61 }],
        nutritionPer100g: {
            energyKcal: 41,
            fat: 0.24,
            saturatedFat: 0.03,
            carbohydrates: 9.58,
            sugars: 4.7,
            fiber: 2.8,
            protein: 0.93,
            salt: 0.17
        }
    },
    {
        id: 'loeg',
        name: 'Løg',
        category: 'vegetable',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['løg', 'gult løg', 'gule løg', 'onion', 'yellow onion'],
        emoji: '🧅',
        imageUrl: `${ASSETS}/loeg.webp`,
        unitConversions: [{ unit: 'pcs', grams: 110 }],
        nutritionPer100g: {
            energyKcal: 40,
            fat: 0.1,
            saturatedFat: 0.042,
            carbohydrates: 9.34,
            sugars: 4.24,
            fiber: 1.7,
            protein: 1.1,
            salt: 0.01
        }
    },
    {
        id: 'hvidloegsfed',
        name: 'Hvidløgsfed',
        category: 'vegetable',
        tags: ['seasoning'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['hvidløg', 'fed hvidløg', 'hvidløgsfed', 'garlic', 'garlic clove', 'garlic cloves'],
        emoji: '🧄',
        imageUrl: `${ASSETS}/hvidloegsfed.webp`,
        unitConversions: [{ unit: 'pcs', grams: 3 }],
        nutritionPer100g: {
            energyKcal: 149,
            fat: 0.5,
            saturatedFat: 0.089,
            carbohydrates: 33.06,
            sugars: 1.0,
            fiber: 2.1,
            protein: 6.36,
            salt: 0.043
        }
    },
    {
        id: 'mayonnaise',
        name: 'Mayonnaise',
        category: 'sauce',
        dietaryProperties: ['vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['mayonaise', 'mayo', 'mayonnaise', 'klassisk mayonnaise', 'classic mayonnaise'],
        emoji: '🥚',
        imageUrl: `${ASSETS}/mayonnaise.webp`,
        unitConversions: [
            { unit: 'tsp', grams: 4.6 },
            { unit: 'tbsp', grams: 13.8 }
        ],
        nutritionPer100g: {
            energyKcal: 680,
            fat: 74.8,
            saturatedFat: 11.7,
            carbohydrates: 0.57,
            sugars: 0.57,
            fiber: 0,
            protein: 0.96,
            salt: 1.59
        }
    },
    {
        id: 'broccoli',
        name: 'Broccoli',
        category: 'vegetable',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['broccoli', 'broccolihoved', 'broccoli head', 'broccoli florets', 'broccolibuketter'],
        emoji: '🥦',
        imageUrl: `${ASSETS}/broccoli.webp`,
        nutritionPer100g: {
            energyKcal: 34,
            fat: 0.37,
            saturatedFat: 0.11,
            carbohydrates: 6.64,
            sugars: 1.7,
            fiber: 2.6,
            protein: 2.82,
            salt: 0.083
        }
    },
    {
        id: 'lime',
        name: 'Lime',
        category: 'fruit',
        tags: ['sour'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['limefrugt', 'frisk lime', 'limes', 'fresh lime'],
        emoji: '🍋‍🟩',
        imageUrl: `${ASSETS}/lime.webp`,
        unitConversions: [{ unit: 'pcs', grams: 67 }],
        nutritionPer100g: {
            energyKcal: 30,
            fat: 0.2,
            saturatedFat: 0.022,
            carbohydrates: 10.54,
            sugars: 1.69,
            fiber: 2.8,
            protein: 0.7,
            salt: 0.005
        }
    },
    {
        id: 'agurk',
        name: 'Agurk',
        category: 'vegetable',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['agurker', 'frisk agurk', 'cucumber', 'cucumbers', 'fresh cucumber'],
        emoji: '🥒',
        imageUrl: `${ASSETS}/agurk.webp`,
        nutritionPer100g: {
            energyKcal: 16,
            fat: 0.18,
            saturatedFat: 0,
            carbohydrates: 2.95,
            sugars: 1.7,
            fiber: 0.5,
            protein: 0.63,
            salt: 0.004
        }
    },
    {
        id: 'basmatiris',
        name: 'Basmatiris',
        category: 'grain',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['basmati', 'basmati ris', 'basmati rice', 'hvide basmatiris', 'white basmati rice'],
        emoji: '🍚',
        imageUrl: `${ASSETS}/basmatiris.webp`,
        unitConversions: [{ unit: 'dl', grams: 80 }],
        nutritionPer100g: {
            energyKcal: 354,
            fat: 0.6,
            saturatedFat: 0.1,
            carbohydrates: 78.5,
            sugars: 0.2,
            fiber: 1.3,
            protein: 7.0,
            salt: 0.015
        }
    },
    {
        id: 'kyllingfond',
        name: 'Kyllingfond',
        category: 'sauce',
        tags: ['seasoning'],
        dietaryProperties: ['gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['kyllingefond', 'kyllingebouillon', 'chicken stock', 'chicken broth', 'chicken bouillon'],
        emoji: '🍲',
        imageUrl: `${ASSETS}/kyllingfond.webp`,
        unitConversions: [
            { unit: 'tsp', grams: 5 },
            { unit: 'tbsp', grams: 15 }
        ],
        nutritionPer100g: {
            energyKcal: 36,
            fat: 1.2,
            saturatedFat: 0.32,
            carbohydrates: 3.5,
            sugars: 1.58,
            fiber: 0,
            protein: 2.5,
            salt: 0.36
        }
    },
    {
        id: 'kyllingebouillon',
        name: 'Kyllingebouillon',
        category: 'spice',
        tags: ['seasoning'],
        dietaryProperties: ['lactose-free'],
        isStaple: false,
        aliases: [
            'kyllingebouillonterning',
            'kyllingebouillon terning',
            'bouillonterning med kylling',
            'chicken bouillon',
            'chicken bouillon cube',
            'chicken stock cube'
        ],
        emoji: '🧊',
        imageUrl: `${ASSETS}/kyllingebouillon.webp`,
        unitConversions: [{ unit: 'pcs', grams: 12 }],
        nutritionPer100g: {
            energyKcal: 250,
            fat: 25,
            saturatedFat: 16.67,
            carbohydrates: 16.67,
            sugars: 0,
            fiber: 0,
            protein: 0,
            salt: 42.92
        }
    },
    {
        id: 'pastinak',
        name: 'Pastinak',
        category: 'vegetable',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['pastinakker', 'parsnip', 'parsnips', 'rå pastinak'],
        emoji: '🥕',
        imageUrl: `${ASSETS}/pastinak.webp`,
        nutritionPer100g: {
            energyKcal: 87,
            fat: 0.54,
            saturatedFat: 0.05,
            carbohydrates: 19.3,
            sugars: 10.5,
            fiber: 5.35,
            protein: 1.27,
            salt: 0.001
        }
    },
    {
        id: 'rasp',
        name: 'Rasp',
        category: 'grain',
        dietaryProperties: ['vegan', 'vegetarian', 'lactose-free'],
        isStaple: false,
        aliases: ['brødkrummer', 'brødrasp', 'breadcrumbs', 'bread crumbs', 'plain breadcrumbs'],
        emoji: '🍞',
        imageUrl: `${ASSETS}/rasp.webp`,
        nutritionPer100g: {
            energyKcal: 395,
            fat: 5.3,
            saturatedFat: 1.2,
            carbohydrates: 72.0,
            sugars: 6.2,
            fiber: 4.5,
            protein: 13.4,
            salt: 1.83
        }
    },
    {
        id: 'gouda',
        name: 'Gouda',
        category: 'dairy',
        dietaryProperties: ['vegetarian', 'gluten-free'],
        isStaple: false,
        aliases: ['goudaost', 'gouda ost', 'gouda cheese'],
        emoji: '🧀',
        imageUrl: `${ASSETS}/gouda.webp`,
        nutritionPer100g: {
            energyKcal: 356,
            fat: 27.44,
            saturatedFat: 17.61,
            carbohydrates: 2.22,
            sugars: 2.22,
            fiber: 0,
            protein: 24.94,
            salt: 2.05
        }
    },
    {
        id: 'revet-gouda',
        name: 'Revet Gouda',
        category: 'dairy',
        dietaryProperties: ['vegetarian', 'gluten-free'],
        isStaple: false,
        aliases: ['revet goudaost', 'revet gouda ost', 'shredded gouda', 'grated gouda', 'grated gouda cheese'],
        emoji: '🧀',
        imageUrl: `${ASSETS}/revet-gouda.webp`,
        homemade: {
            ingredients: [{ ingredientId: 'gouda', quantity: 100, unit: 'g' }],
            steps: [
                'Riv: Riv goudaen på det grove hul på et rivejern.',
                'Opbevar: Brug den med det samme, eller opbevar den i en tæt æske i køleskabet i op til 3 dage.'
            ]
        },
        nutritionPer100g: {
            energyKcal: 356,
            fat: 27.44,
            saturatedFat: 17.61,
            carbohydrates: 2.22,
            sugars: 2.22,
            fiber: 0,
            protein: 24.94,
            salt: 2.05
        }
    },
    {
        id: 'hakket-svine-kalvekoed',
        name: 'Hakket svine-/kalvekød',
        category: 'meat',
        dietaryProperties: ['gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: [
            'hakket svine- og kalvekød',
            'hakket svin og kalv',
            'svine- og kalvefars',
            'svinekalvefars',
            'hakket gris og kalv',
            'pork and veal mince',
            'ground pork and veal'
        ],
        emoji: '🥩',
        imageUrl: `${ASSETS}/hakket-svine-kalvekoed.webp`,
        nutritionPer100g: {
            energyKcal: 171,
            fat: 10,
            saturatedFat: 3.5,
            carbohydrates: 0.5,
            sugars: 0,
            fiber: 0,
            protein: 20,
            salt: 0.21
        }
    },
    {
        id: 'groentsagsfond',
        name: 'Grøntsagsfond',
        category: 'sauce',
        tags: ['seasoning'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['grøntsags fond', 'vegetable stock', 'vegetable broth', 'veg stock'],
        emoji: '🥕',
        imageUrl: `${ASSETS}/groentsagsfond.webp`,
        unitConversions: [
            { unit: 'tsp', grams: 5 },
            { unit: 'tbsp', grams: 15 }
        ],
        nutritionPer100g: {
            energyKcal: 13,
            fat: 0.2,
            saturatedFat: 0,
            carbohydrates: 2.0,
            sugars: 0.5,
            fiber: 0.3,
            protein: 0.5,
            salt: 1.0
        }
    },
    {
        id: 'oksefond',
        name: 'Oksefond',
        category: 'sauce',
        tags: ['seasoning'],
        dietaryProperties: ['gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['okse fond', 'oksebouillon', 'beef stock', 'beef broth'],
        emoji: '🥩',
        imageUrl: `${ASSETS}/oksefond.webp`,
        unitConversions: [
            { unit: 'tsp', grams: 5 },
            { unit: 'tbsp', grams: 15 }
        ],
        nutritionPer100g: {
            energyKcal: 13,
            fat: 0.09,
            saturatedFat: 0.03,
            carbohydrates: 1.2,
            sugars: 0.54,
            fiber: 0,
            protein: 2.0,
            salt: 0.5
        }
    },
    {
        id: 'oksebouillon',
        name: 'Oksebouillon',
        category: 'spice',
        tags: ['seasoning'],
        dietaryProperties: [],
        isStaple: false,
        aliases: [
            'oksebouillonterning',
            'oksebouillon terning',
            'bouillonterning med okse',
            'beef bouillon',
            'beef bouillon cube',
            'beef stock cube'
        ],
        emoji: '🧊',
        imageUrl: `${ASSETS}/oksebouillon.webp`,
        unitConversions: [{ unit: 'pcs', grams: 12 }],
        nutritionPer100g: {
            energyKcal: 162,
            fat: 3.2,
            saturatedFat: 1.6,
            carbohydrates: 15.8,
            sugars: 0,
            fiber: 0,
            protein: 17,
            salt: 56.25
        }
    },
    {
        id: 'groentsagsbouillon',
        name: 'Grøntsagsbouillon',
        category: 'spice',
        tags: ['seasoning'],
        dietaryProperties: ['vegan', 'vegetarian'],
        isStaple: false,
        aliases: [
            'grøntsagsbouillonterning',
            'grøntsagsbouillon terning',
            'vegetable bouillon',
            'vegetable bouillon cube',
            'vegetable stock cube',
            'veg bouillon'
        ],
        emoji: '🧊',
        imageUrl: `${ASSETS}/groentsagsbouillon.webp`,
        unitConversions: [{ unit: 'pcs', grams: 6 }],
        nutritionPer100g: {
            energyKcal: 333,
            fat: 25,
            saturatedFat: 8.33,
            carbohydrates: 33.33,
            sugars: 16.67,
            fiber: 0,
            protein: 0,
            salt: 28.33
        }
    },
    {
        id: 'roedvinssauce',
        name: 'Rødvinssauce',
        category: 'sauce',
        tags: ['seasoning'],
        dietaryProperties: [],
        isStaple: false,
        aliases: ['rødvins sauce', 'rødvinssovs', 'red wine sauce', 'red wine jus'],
        emoji: '🍷',
        imageUrl: `${ASSETS}/roedvinssauce.webp`,
        unitConversions: [
            { unit: 'tsp', grams: 5 },
            { unit: 'tbsp', grams: 15 }
        ],
        nutritionPer100g: {
            energyKcal: 64,
            fat: 0.2,
            saturatedFat: 0.2,
            carbohydrates: 6.4,
            sugars: 3.4,
            fiber: 1.6,
            protein: 8.5,
            salt: 1.2
        }
    },
    {
        id: 'soed-paprika',
        name: 'Sød paprika',
        category: 'spice',
        tags: ['seasoning'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: true,
        aliases: ['sød paprika', 'paprikapulver', 'sød paprikapulver', 'sweet paprika', 'paprika powder'],
        emoji: '🌶️',
        imageUrl: `${ASSETS}/soed-paprika.webp`,
        unitConversions: [
            { unit: 'tsp', grams: 2.3 },
            { unit: 'tbsp', grams: 6.8 }
        ],
        nutritionPer100g: {
            energyKcal: 282,
            fat: 12.9,
            saturatedFat: 2.14,
            carbohydrates: 54,
            sugars: 10.3,
            fiber: 34.9,
            protein: 14.1,
            salt: 0.17
        }
    },
    {
        id: 'oregano-toerret',
        name: 'Oregano (tørret)',
        category: 'spice',
        tags: ['seasoning'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: true,
        aliases: ['oregano', 'tørret oregano', 'oregano tørret', 'dried oregano', 'oregano leaves'],
        emoji: '🌿',
        imageUrl: `${ASSETS}/oregano-toerret.webp`,
        unitConversions: [{ unit: 'tsp', grams: 1 }],
        nutritionPer100g: {
            energyKcal: 265,
            fat: 4.3,
            saturatedFat: 1.6,
            carbohydrates: 68.9,
            sugars: 4.1,
            fiber: 42.5,
            protein: 9.0,
            salt: 0.06
        }
    },
    {
        id: 'timian-toerret',
        name: 'Timian (tørret)',
        category: 'spice',
        tags: ['seasoning'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: true,
        aliases: ['timian', 'tørret timian', 'timian tørret', 'dried thyme', 'thyme', 'thyme leaves'],
        emoji: '🌿',
        imageUrl: `${ASSETS}/timian-toerret.webp`,
        unitConversions: [
            { unit: 'tsp', grams: 1 },
            { unit: 'tbsp', grams: 2.7 }
        ],
        nutritionPer100g: {
            energyKcal: 276,
            fat: 7.43,
            saturatedFat: 2.73,
            carbohydrates: 63.94,
            sugars: 1.71,
            fiber: 37,
            protein: 9.11,
            salt: 0.14
        }
    },
    {
        id: 'salvie-toerret',
        name: 'Salvie (tørret)',
        category: 'spice',
        tags: ['seasoning'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: true,
        aliases: ['salvie', 'tørret salvie', 'salvie tørret', 'dried sage', 'sage', 'sage leaves'],
        emoji: '🌿',
        imageUrl: `${ASSETS}/salvie-toerret.webp`,
        unitConversions: [
            { unit: 'tsp', grams: 0.7 },
            { unit: 'tbsp', grams: 2 }
        ],
        nutritionPer100g: {
            energyKcal: 315,
            fat: 12.8,
            saturatedFat: 7.0,
            carbohydrates: 60.7,
            sugars: 1.7,
            fiber: 40.3,
            protein: 10.6,
            salt: 0.03
        }
    },
    {
        id: 'chilipulver',
        name: 'Chilipulver',
        category: 'spice',
        tags: ['seasoning', 'spicy'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: true,
        aliases: ['chili pulver', 'stødt chili', 'chili powder', 'ground chili', 'ground chilli'],
        emoji: '🌶️',
        imageUrl: `${ASSETS}/chilipulver.webp`,
        unitConversions: [
            { unit: 'tsp', grams: 2.7 },
            { unit: 'tbsp', grams: 8 }
        ],
        nutritionPer100g: {
            energyKcal: 282,
            fat: 14.3,
            saturatedFat: 2.5,
            carbohydrates: 49.7,
            sugars: 7.2,
            fiber: 34.8,
            protein: 13.5,
            salt: 7.17
        }
    },
    {
        id: 'basilikum',
        name: 'Basilikum',
        category: 'herb',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['frisk basilikum', 'basilikumblade', 'basil', 'fresh basil', 'basil leaves'],
        emoji: '🌿',
        imageUrl: `${ASSETS}/basilikum.webp`,
        nutritionPer100g: {
            energyKcal: 23,
            fat: 0.64,
            saturatedFat: 0.041,
            carbohydrates: 2.65,
            sugars: 0.3,
            fiber: 1.6,
            protein: 3.15,
            salt: 0.01
        }
    },
    {
        id: 'soed-kartoffel',
        name: 'Sød kartoffel',
        category: 'vegetable',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['søde kartofler', 'sweet potato', 'sweet potatoes', 'batat', 'batater'],
        emoji: '🍠',
        imageUrl: `${ASSETS}/soed-kartoffel.webp`,
        nutritionPer100g: {
            energyKcal: 86,
            fat: 0.05,
            saturatedFat: 0.02,
            carbohydrates: 20.1,
            sugars: 4.2,
            fiber: 3.0,
            protein: 1.6,
            salt: 0.14
        }
    },
    {
        id: 'blomkaal',
        name: 'Blomkål',
        category: 'vegetable',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['blomkål', 'blomkålsbuketter', 'cauliflower', 'cauliflower florets', 'raw cauliflower'],
        emoji: '🥦',
        imageUrl: `${ASSETS}/blomkaal.webp`,
        nutritionPer100g: {
            energyKcal: 25,
            fat: 0.28,
            saturatedFat: 0.13,
            carbohydrates: 4.97,
            sugars: 1.91,
            fiber: 2.0,
            protein: 1.92,
            salt: 0.075
        }
    },
    {
        id: 'snittet-kaalsalat',
        name: 'Snittet kålsalat',
        category: 'vegetable',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['kålsalat', 'snittet kål', 'coleslaw mix', 'coleslaw blanding', 'slaw mix', 'shredded cabbage mix'],
        emoji: '🥬',
        imageUrl: `${ASSETS}/snittet-kaalsalat.webp`,
        nutritionPer100g: {
            energyKcal: 29,
            fat: 0,
            saturatedFat: 0,
            carbohydrates: 5.88,
            sugars: 3.53,
            fiber: 2.4,
            protein: 1.18,
            salt: 0.06
        }
    },
    {
        id: 'sriracha-mayo',
        name: 'Sriracha mayo',
        category: 'sauce',
        tags: ['spicy'],
        dietaryProperties: ['vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['sriracha mayonnaise', 'srirachamayo', 'spicy mayo', 'chilimayo', 'chili mayo'],
        emoji: '🌶️',
        imageUrl: `${ASSETS}/sriracha-mayo.webp`,
        unitConversions: [
            { unit: 'tsp', grams: 5 },
            { unit: 'tbsp', grams: 15 }
        ],
        nutritionPer100g: {
            energyKcal: 652,
            fat: 70,
            saturatedFat: 5.3,
            carbohydrates: 3.9,
            sugars: 3.4,
            fiber: 0,
            protein: 1,
            salt: 2.1
        }
    },
    {
        id: 'sesammayonnaise',
        name: 'Sesammayonnaise',
        category: 'sauce',
        dietaryProperties: ['vegetarian', 'lactose-free'],
        isStaple: false,
        aliases: ['sesam mayonnaise', 'sesammayo', 'sesam mayo', 'sesame mayonnaise', 'sesame mayo', 'roasted sesame mayo'],
        emoji: '🥣',
        imageUrl: `${ASSETS}/sesammayonnaise.webp`,
        unitConversions: [
            { unit: 'tsp', grams: 5 },
            { unit: 'tbsp', grams: 15 }
        ],
        nutritionPer100g: {
            energyKcal: 638,
            fat: 66.6,
            saturatedFat: 10.0,
            carbohydrates: 6.1,
            sugars: 3.0,
            fiber: 0,
            protein: 3.6,
            salt: 2.7
        }
    },
    {
        id: 'panko',
        name: 'Panko',
        category: 'grain',
        dietaryProperties: ['vegan', 'vegetarian', 'lactose-free'],
        isStaple: false,
        aliases: ['pankorasp', 'panko rasp', 'japansk rasp', 'panko breadcrumbs', 'japanese breadcrumbs'],
        emoji: '🍞',
        imageUrl: `${ASSETS}/panko.webp`,
        nutritionPer100g: {
            energyKcal: 357,
            fat: 2,
            saturatedFat: 0,
            carbohydrates: 68,
            sugars: 4,
            fiber: 4,
            protein: 11,
            salt: 0.8
        }
    },
    {
        id: 'mors-favorit',
        name: 'Mors Favorit',
        category: 'spice',
        tags: ['seasoning'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: true,
        aliases: ['mors favorit krydderi', 'mors favorit krydderiblanding', 'mors krydderiblanding'],
        emoji: '🧂',
        imageUrl: `${ASSETS}/mors-favorit.webp`,
        homemade: {
            ingredients: [
                { ingredientId: 'soed-paprika', quantity: 2, unit: 'tsp' },
                { ingredientId: 'hvidloegspulver', quantity: 1, unit: 'tsp' },
                { ingredientId: 'salt', quantity: 1, unit: 'tsp' },
                { ingredientId: 'loegpulver', quantity: 0.5, unit: 'tsp' },
                { ingredientId: 'oregano-toerret', quantity: 0.5, unit: 'tsp' },
                { ingredientId: 'basilikum', quantity: 0.5, unit: 'tsp' },
                { ingredientId: 'timian-toerret', quantity: 0.5, unit: 'tsp' },
                { ingredientId: 'chilipulver', quantity: 0.5, unit: 'tsp' },
                { ingredientId: 'peber', quantity: 0.25, unit: 'tsp' }
            ],
            steps: [
                'Mål op: Mål alle krydderierne op i en lille skål eller et tomt krydderiglas.',
                'Bland: Rør eller ryst blandingen grundigt sammen, til farven er helt ensartet rødlig.',
                'Opbevar: Opbevar blandingen i en lufttæt beholder et mørkt og tørt sted.'
            ]
        },
        unitConversions: [
            { unit: 'tsp', grams: 3.5 },
            { unit: 'tbsp', grams: 10.5 }
        ],
        nutritionPer100g: {
            energyKcal: 167,
            fat: 5.0,
            saturatedFat: 1.0,
            carbohydrates: 32.0,
            sugars: 5.0,
            fiber: 13.0,
            protein: 6.0,
            salt: 32.0
        }
    },
    {
        id: 'tomatpure',
        name: 'Tomatpuré',
        category: 'sauce',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: true,
        aliases: ['tomat puré', 'tomato paste', 'concentrated tomato paste'],
        emoji: '🍅',
        imageUrl: `${ASSETS}/tomatpure.webp`,
        unitConversions: [
            { unit: 'tsp', grams: 5 },
            { unit: 'tbsp', grams: 15 }
        ],
        nutritionPer100g: {
            energyKcal: 82,
            fat: 0.5,
            saturatedFat: 0.1,
            carbohydrates: 19,
            sugars: 12,
            fiber: 4,
            protein: 4,
            salt: 0.15
        }
    },
    {
        id: 'aubergine',
        name: 'Aubergine',
        category: 'vegetable',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['auberginer', 'eggplant', 'eggplants'],
        emoji: '🍆',
        imageUrl: `${ASSETS}/aubergine.webp`,
        nutritionPer100g: {
            energyKcal: 25,
            fat: 0.18,
            saturatedFat: 0.034,
            carbohydrates: 5.88,
            sugars: 3.53,
            fiber: 3.0,
            protein: 0.98,
            salt: 0.005
        }
    },
    {
        id: 'graesk-yoghurt',
        name: 'Græsk yoghurt',
        category: 'dairy',
        dietaryProperties: ['vegetarian', 'gluten-free'],
        isStaple: false,
        aliases: ['græsk yoghurt 10%', 'græsk inspireret yoghurt', 'greek yogurt', 'greek yoghurt', 'greek yogurt 10%'],
        emoji: '🥛',
        imageUrl: `${ASSETS}/graesk-yoghurt.webp`,
        unitConversions: [
            { unit: 'tsp', grams: 5 },
            { unit: 'tbsp', grams: 15 },
            { unit: 'dl', grams: 100 }
        ],
        nutritionPer100g: {
            energyKcal: 124,
            fat: 10,
            saturatedFat: 6.5,
            carbohydrates: 3.4,
            sugars: 3.4,
            fiber: 0,
            protein: 4.2,
            salt: 0.09
        }
    },
    {
        id: 'tikka-masala-krydderi',
        name: 'Tikka Masala krydderi',
        category: 'spice',
        tags: ['seasoning'],
        dietaryProperties: ['vegetarian', 'gluten-free'],
        isStaple: false,
        aliases: ['tikka masala', 'tikka masala krydderiblanding', 'tikka masala spice', 'tikka masala spice mix', 'tikka seasoning'],
        emoji: '🌶️',
        imageUrl: `${ASSETS}/tikka-masala-krydderi.webp`,
        nutritionPer100g: {
            energyKcal: 398,
            fat: 17.5,
            saturatedFat: 6.9,
            carbohydrates: 48,
            sugars: 24.8,
            fiber: 13.9,
            protein: 12.1,
            salt: 7.38
        }
    },
    {
        id: 'mild-mahal-krydderi',
        name: 'Mild Mahal krydderi',
        category: 'spice',
        tags: ['seasoning'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['mild mahal', 'mahal krydderi', 'mild mahal spice', 'mild mahal seasoning'],
        emoji: '🧂',
        imageUrl: `${ASSETS}/mild-mahal-krydderi.webp`
    },
    {
        id: 'roedbede',
        name: 'Rødbede',
        category: 'vegetable',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['rødbeder', 'beetroot', 'beet', 'beets', 'red beet'],
        emoji: '🫜',
        imageUrl: `${ASSETS}/roedbede.webp`,
        nutritionPer100g: {
            energyKcal: 43,
            fat: 0.17,
            saturatedFat: 0.03,
            carbohydrates: 9.56,
            sugars: 6.76,
            fiber: 2.8,
            protein: 1.61,
            salt: 0.2
        }
    },
    {
        id: 'aeble',
        name: 'Æble',
        category: 'fruit',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['æbler', 'apple', 'apples'],
        emoji: '🍎',
        imageUrl: `${ASSETS}/aeble.webp`,
        nutritionPer100g: {
            energyKcal: 52,
            fat: 0.17,
            saturatedFat: 0.03,
            carbohydrates: 13.8,
            sugars: 10.4,
            fiber: 2.4,
            protein: 0.26,
            salt: 0.003
        }
    },
    {
        id: 'spinat',
        name: 'Spinat',
        category: 'vegetable',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['frisk spinat', 'spinatblade', 'babyspinat', 'spinach', 'fresh spinach', 'baby spinach'],
        emoji: '🥬',
        imageUrl: `${ASSETS}/spinat.webp`,
        nutritionPer100g: {
            energyKcal: 23,
            fat: 0.39,
            saturatedFat: 0.06,
            carbohydrates: 3.63,
            sugars: 0.42,
            fiber: 2.2,
            protein: 2.86,
            salt: 0.2
        }
    },
    {
        id: 'solsikkefroe',
        name: 'Solsikkefrø',
        category: 'seed',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['solsikkekerner', 'sunflower seeds', 'sunflower kernels', 'sunflower seed kernels'],
        emoji: '🌻',
        imageUrl: `${ASSETS}/solsikkefroe.webp`,
        nutritionPer100g: {
            energyKcal: 584,
            fat: 51.5,
            saturatedFat: 4.5,
            carbohydrates: 20,
            sugars: 2.6,
            fiber: 8.6,
            protein: 20.8,
            salt: 0.02
        }
    },
    {
        id: 'remoulade',
        name: 'Remoulade',
        category: 'sauce',
        dietaryProperties: ['vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['remouladesauce', 'remoulade sauce', 'danish remoulade'],
        emoji: '🥣',
        imageUrl: `${ASSETS}/remoulade.webp`,
        unitConversions: [
            { unit: 'tsp', grams: 5 },
            { unit: 'tbsp', grams: 14 },
            { unit: 'dl', grams: 95 }
        ],
        nutritionPer100g: {
            energyKcal: 393,
            fat: 36.8,
            saturatedFat: 3.1,
            carbohydrates: 15.7,
            sugars: 12,
            fiber: 0.5,
            protein: 1.1,
            salt: 0.66
        }
    },
    {
        id: 'citronpeber',
        name: 'Citronpeber',
        category: 'spice',
        tags: ['seasoning'],
        dietaryProperties: ['vegan', 'vegetarian', 'lactose-free'],
        isStaple: true,
        aliases: ['citron peber', 'lemon pepper', 'lemon pepper seasoning', 'citronpeber krydderi'],
        emoji: '🍋',
        imageUrl: `${ASSETS}/citronpeber.webp`,
        nutritionPer100g: {
            energyKcal: 209,
            fat: 4.3,
            saturatedFat: 0.8,
            carbohydrates: 27.7,
            sugars: 9,
            fiber: 0,
            protein: 5.9,
            salt: 25.9
        }
    },
    {
        id: 'purloeg',
        name: 'Purløg',
        category: 'herb',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['frisk purløg', 'chives', 'fresh chives'],
        emoji: '🌿',
        imageUrl: `${ASSETS}/purloeg.webp`,
        nutritionPer100g: {
            energyKcal: 30,
            fat: 0.73,
            saturatedFat: 0.15,
            carbohydrates: 4.35,
            sugars: 1.85,
            fiber: 2.5,
            protein: 3.27,
            salt: 0.008
        }
    },
    {
        id: 'kuller',
        name: 'Kuller',
        category: 'fish',
        dietaryProperties: ['gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['kullerfilet', 'haddock', 'haddock fillet'],
        emoji: '🐟',
        imageUrl: `${ASSETS}/kuller.webp`,
        nutritionPer100g: {
            energyKcal: 74,
            fat: 0.45,
            saturatedFat: 0.09,
            carbohydrates: 0,
            sugars: 0,
            fiber: 0,
            protein: 16.3,
            salt: 0.53
        }
    },
    {
        id: 'bagekartoffel',
        name: 'Bagekartoffel',
        category: 'vegetable',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['bagekartofler', 'stor kartoffel', 'russet kartoffel', 'baking potato', 'russet potato'],
        emoji: '🥔',
        imageUrl: `${ASSETS}/bagekartoffel.webp`,
        nutritionPer100g: {
            energyKcal: 79,
            fat: 0.08,
            saturatedFat: 0.02,
            carbohydrates: 18.07,
            sugars: 0.63,
            fiber: 1.3,
            protein: 2.14,
            salt: 0.01
        }
    },
    {
        id: 'kaalpoelser',
        name: 'Kålpølser',
        category: 'meat',
        dietaryProperties: ['gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['kålpølse', 'kaalpoelse', 'kaalpoelser', 'danish cabbage sausage'],
        emoji: '🌭',
        imageUrl: `${ASSETS}/kaalpoelser.webp`,
        nutritionPer100g: {
            energyKcal: 298,
            fat: 25,
            saturatedFat: 10,
            carbohydrates: 0.9,
            sugars: 0.9,
            fiber: 0,
            protein: 17,
            salt: 3.1
        }
    },
    {
        id: 'kaalblanding',
        name: 'Kålblanding',
        category: 'vegetable',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['snittet kålblanding', 'kålmix', 'grøntsagsblanding med kål', 'cabbage mix', 'shredded cabbage mix'],
        emoji: '🥬',
        imageUrl: `${ASSETS}/kaalblanding.webp`,
        nutritionPer100g: {
            energyKcal: 34,
            fat: 0.3,
            saturatedFat: 0.1,
            carbohydrates: 7.2,
            sugars: 4.8,
            fiber: 2.5,
            protein: 1.2,
            salt: 0.08
        }
    },
    {
        id: 'champignon',
        name: 'Champignon',
        category: 'vegetable',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['champignoner', 'hvide champignoner', 'mushroom', 'mushrooms', 'white mushrooms', 'button mushrooms'],
        emoji: '🍄',
        imageUrl: `${ASSETS}/champignon.webp`,
        nutritionPer100g: {
            energyKcal: 22,
            fat: 0.34,
            saturatedFat: 0.05,
            carbohydrates: 3.26,
            sugars: 1.98,
            fiber: 1.0,
            protein: 3.09,
            salt: 0.01
        }
    },
    {
        id: 'kyllingebryst',
        name: 'Kyllingebryst',
        category: 'meat',
        dietaryProperties: ['gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['kyllingebrystfilet', 'kyllingefilet', 'chicken breast', 'chicken breast fillet', 'boneless chicken breast'],
        emoji: '🍗',
        imageUrl: `${ASSETS}/kyllingebryst.webp`,
        nutritionPer100g: {
            energyKcal: 112,
            fat: 1.93,
            saturatedFat: 0.35,
            carbohydrates: 0,
            sugars: 0,
            fiber: 0,
            protein: 22.5,
            salt: 0.17
        }
    },
    {
        id: 'worcestershire-sauce',
        name: 'Worcestershire sauce',
        category: 'sauce',
        dietaryProperties: ['lactose-free'],
        isStaple: false,
        aliases: ['worcestershire', 'worcester sauce', 'engelsk sauce', 'lea & perrins'],
        emoji: '🥣',
        imageUrl: `${ASSETS}/worcestershire-sauce.webp`,
        unitConversions: [
            { unit: 'tsp', grams: 5 },
            { unit: 'tbsp', grams: 15 }
        ],
        nutritionPer100g: {
            energyKcal: 100,
            fat: 0,
            saturatedFat: 0,
            carbohydrates: 20,
            sugars: 20,
            fiber: 0,
            protein: 0,
            salt: 3.25
        }
    },
    {
        id: 'bredbladet-persille',
        name: 'Bredbladet persille',
        category: 'herb',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['fladbladet persille', 'persille', 'flat leaf parsley', 'flat-leaf parsley', 'italian parsley'],
        emoji: '🌿',
        imageUrl: `${ASSETS}/bredbladet-persille.webp`,
        nutritionPer100g: {
            energyKcal: 36,
            fat: 0.79,
            saturatedFat: 0.13,
            carbohydrates: 6.33,
            sugars: 0,
            fiber: 3.3,
            protein: 2.97,
            salt: 0.14
        }
    },
    {
        id: 'sesamfroe',
        name: 'Sesamfrø',
        category: 'seed',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['sesam', 'sesame seeds', 'sesame seed', 'white sesame seeds'],
        emoji: '🌱',
        imageUrl: `${ASSETS}/sesamfroe.webp`,
        unitConversions: [
            { unit: 'tsp', grams: 3 },
            { unit: 'tbsp', grams: 9 }
        ],
        nutritionPer100g: {
            energyKcal: 573,
            fat: 49.67,
            saturatedFat: 6.96,
            carbohydrates: 23.45,
            sugars: 0.3,
            fiber: 11.8,
            protein: 17.73,
            salt: 0.03
        }
    },
    {
        id: 'sesamolie',
        name: 'Sesamolie',
        category: 'oil',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['sesam olie', 'sesame oil', 'sesame seed oil'],
        emoji: '🫗',
        imageUrl: `${ASSETS}/sesamolie.webp`,
        unitConversions: [
            { unit: 'tsp', grams: 4.5 },
            { unit: 'tbsp', grams: 13.6 }
        ],
        nutritionPer100g: {
            energyKcal: 884,
            fat: 100,
            saturatedFat: 14.2,
            carbohydrates: 0,
            sugars: 0,
            fiber: 0,
            protein: 0,
            salt: 0
        }
    },
    {
        id: 'pak-choi',
        name: 'Pak choi',
        category: 'vegetable',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['pak choy', 'bok choy', 'bok choi', 'pakchoi', 'kinesisk kål'],
        emoji: '🥬',
        imageUrl: `${ASSETS}/pak-choi.webp`,
        nutritionPer100g: {
            energyKcal: 20,
            fat: 0.23,
            saturatedFat: 0,
            carbohydrates: 3.51,
            sugars: 0,
            fiber: 1.26,
            protein: 1.02,
            salt: 0.04
        }
    },
    {
        id: 'umamisauce',
        name: 'Umamisauce',
        category: 'sauce',
        dietaryProperties: ['vegan', 'vegetarian'],
        isStaple: false,
        aliases: [
            'umami sauce',
            'umami soy sauce',
            'umami seasoning sauce',
            'umami dressing'
        ],
        emoji: '🥣',
        imageUrl: `${ASSETS}/umamisauce.webp`,
        nutritionPer100g: {
            energyKcal: 90,
            fat: 0.1,
            saturatedFat: 0,
            carbohydrates: 10.8,
            sugars: 10.8,
            fiber: 0,
            protein: 8.5,
            salt: 0
        }
    },
    {
        id: 'hvide-loejer-og-urter',
        name: 'Hvide Løjer & Urter',
        category: 'spice',
        tags: ['seasoning'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: [
            'hvide løjer og urter',
            'hvidløg og urter',
            'hvidløgskrydderi',
            'garlic and herb seasoning',
            'garlic herb seasoning'
        ],
        emoji: '🧄',
        imageUrl: `${ASSETS}/hvide-loejer-og-urter.webp`,
        homemade: {
            ingredients: [
                { ingredientId: 'hvidloegspulver', quantity: 2, unit: 'tbsp' },
                { ingredientId: 'loegpulver', quantity: 1, unit: 'tbsp' },
                { ingredientId: 'toerret-persille', quantity: 1, unit: 'tbsp' },
                { ingredientId: 'timian-toerret', quantity: 1, unit: 'tsp' },
                { ingredientId: 'oregano-toerret', quantity: 1, unit: 'tsp' },
                { ingredientId: 'salt', quantity: 1, unit: 'tsp' },
                { ingredientId: 'peber', quantity: 0.5, unit: 'tsp' },
                { ingredientId: 'sukker', quantity: 0.25, unit: 'tsp' }
            ],
            steps: [
                'Bland: Hæld alle ingredienserne sammen i et rent, tørt glas.',
                'Ryst: Sæt låg på og ryst glasset grundigt, så urterne og løgpulveret fordeles helt jævnt.',
                'Opbevar: Hold blandingen lufttæt. Den kan nemt holde sig i flere måneder på krydderihylden.',
                'Tip: Til kød eller ovnbagte kartofler kan du tilføje et lille drys stødt koriander eller paprika for en mere intens og fyldig smag.'
            ]
        },
        nutritionPer100g: {
            energyKcal: 260,
            fat: 2.0,
            saturatedFat: 0.5,
            carbohydrates: 52,
            sugars: 6.5,
            fiber: 10,
            protein: 10,
            salt: 12.5
        }
    },
    {
        id: 'toerret-persille',
        name: 'Tørret persille',
        category: 'herb',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: true,
        aliases: ['persille tørret', 'persilleflager', 'dried parsley', 'parsley flakes'],
        emoji: '🌿',
        imageUrl: `${ASSETS}/toerret-persille.webp`,
        unitConversions: [{ unit: 'tsp', grams: 1 }],
        nutritionPer100g: {
            energyKcal: 292,
            fat: 5.48,
            saturatedFat: 1.38,
            carbohydrates: 50.6,
            sugars: 7.27,
            fiber: 26.7,
            protein: 26.6,
            salt: 1.13
        }
    },
    {
        id: 'sukker',
        name: 'Sukker',
        category: 'other',
        tags: ['sweet'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: true,
        aliases: ['hvidt sukker', 'granuleret sukker', 'melis', 'sugar', 'white sugar', 'granulated sugar'],
        emoji: '🧂',
        imageUrl: `${ASSETS}/sukker.webp`,
        unitConversions: [
            { unit: 'tsp', grams: 4 },
            { unit: 'tbsp', grams: 11.8 }
        ],
        nutritionPer100g: {
            energyKcal: 385,
            fat: 0.32,
            saturatedFat: 0,
            carbohydrates: 99.6,
            sugars: 99.8,
            fiber: 0,
            protein: 0,
            salt: 0
        }
    },
    {
        id: 'stoedt-gurkemeje',
        name: 'Stødt gurkemeje',
        category: 'spice',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: true,
        aliases: ['gurkemeje', 'gurkemejepulver', 'turmeric', 'ground turmeric', 'turmeric powder'],
        emoji: '🟡',
        imageUrl: `${ASSETS}/stoedt-gurkemeje.webp`,
        unitConversions: [
            { unit: 'tsp', grams: 3 },
            { unit: 'tbsp', grams: 9 }
        ],
        nutritionPer100g: {
            energyKcal: 312,
            fat: 3.3,
            saturatedFat: 1.84,
            carbohydrates: 67.1,
            sugars: 3.2,
            fiber: 22.7,
            protein: 9.68,
            salt: 0.07
        }
    },
    {
        id: 'kardemomme',
        name: 'Kardemomme',
        category: 'spice',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: true,
        aliases: ['stødt kardemomme', 'kardemommepulver', 'cardamom', 'ground cardamom', 'cardamom powder'],
        emoji: '🌿',
        imageUrl: `${ASSETS}/kardemomme.webp`,
        unitConversions: [
            { unit: 'tsp', grams: 2 },
            { unit: 'tbsp', grams: 5.8 }
        ],
        nutritionPer100g: {
            energyKcal: 311,
            fat: 6.7,
            saturatedFat: 0.7,
            carbohydrates: 68.5,
            sugars: 0,
            fiber: 28,
            protein: 11,
            salt: 0.05
        }
    },
    {
        id: 'stoedt-kryddernellike',
        name: 'Stødt kryddernellike',
        category: 'spice',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: true,
        aliases: ['stødte kryddernelliker', 'kryddernellike', 'nellike', 'ground cloves', 'clove powder'],
        emoji: '🌿',
        imageUrl: `${ASSETS}/stoedt-kryddernellike.webp`,
        unitConversions: [
            { unit: 'tsp', grams: 2.1 },
            { unit: 'tbsp', grams: 6.5 }
        ],
        nutritionPer100g: {
            energyKcal: 274,
            fat: 13,
            saturatedFat: 4,
            carbohydrates: 65.5,
            sugars: 2,
            fiber: 34,
            protein: 6,
            salt: 0.69
        }
    },
    {
        id: 'stoedt-fennikel',
        name: 'Stødt fennikel',
        category: 'spice',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: true,
        aliases: ['fennikelpulver', 'stødte fennikelfrø', 'ground fennel', 'ground fennel seeds', 'fennel powder'],
        emoji: '🌿',
        imageUrl: `${ASSETS}/stoedt-fennikel.webp`,
        nutritionPer100g: {
            energyKcal: 345,
            fat: 14.87,
            saturatedFat: 0.48,
            carbohydrates: 52.29,
            sugars: 0,
            fiber: 39.8,
            protein: 15.8,
            salt: 0.22
        }
    },
    {
        id: 'stoedt-galangalrod',
        name: 'Stødt galangalrod',
        category: 'spice',
        dietaryProperties: ['vegan', 'vegetarian'],
        isStaple: false,
        aliases: [
            'stødt galangal',
            'galangalpulver',
            'galangarod',
            'ground galangal',
            'galangal powder',
            'ground galangal root'
        ],
        emoji: '🫚',
        imageUrl: `${ASSETS}/stoedt-galangalrod.webp`,
        nutritionPer100g: {
            energyKcal: 280,
            fat: 8,
            saturatedFat: 2.7,
            carbohydrates: 1,
            sugars: 0,
            fiber: 0,
            protein: 47,
            salt: 0
        }
    },
    {
        id: 'ga-laksa',
        name: 'Ga-Laksa',
        category: 'spice',
        tags: ['seasoning'],
        dietaryProperties: ['vegan', 'vegetarian', 'lactose-free'],
        isStaple: false,
        aliases: [
            'ga laksa',
            'ga-laksa krydderi',
            'ga-laksa krydderiblanding',
            'laksa krydderi',
            'laksa seasoning',
            'laksa spice mix'
        ],
        emoji: '🌶️',
        imageUrl: `${ASSETS}/ga-laksa.webp`,
        homemade: {
            ingredients: [
                { ingredientId: 'stoedt-koriander', quantity: 1, unit: 'tbsp' },
                { ingredientId: 'spidskommen', quantity: 1, unit: 'tsp' },
                { ingredientId: 'stoedt-gurkemeje', quantity: 1, unit: 'tsp', note: 'giver den gule farve' },
                { ingredientId: 'hvidloegspulver', quantity: 1, unit: 'tsp' },
                { ingredientId: 'stoedt-galangalrod', quantity: 0.5, unit: 'tsp', note: 'kan erstattes med stødt ingefær' },
                { ingredientId: 'stoedt-fennikel', quantity: 0.5, unit: 'tsp' },
                { ingredientId: 'salt', quantity: 0.5, unit: 'tsp' },
                { ingredientId: 'peber', quantity: 0.25, unit: 'tsp' },
                { ingredientId: 'kardemomme', quantity: 0.25, unit: 'tsp' },
                { ingredientId: 'stoedt-kryddernellike', quantity: 1, unit: 'pinch' }
            ],
            steps: [
                'Bland: Rør alle de stødte krydderier godt sammen, så farven og smagen bliver helt ensartet.',
                'Opbevar: Hæld blandingen i et tæt krydderiglas. Opbevar det mørkt og tørt, så holder det sig friskt i flere måneder.',
                'Tip: Brænd blandingen af i lidt olie i gryden i 30-60 sekunder, inden du tilsætter væske (fx kokosmælk til laksa-suppe). Det frigiver de æteriske olier og gør smagen dybere.'
            ]
        },
        nutritionPer100g: {
            energyKcal: 300,
            fat: 8,
            saturatedFat: 1.5,
            carbohydrates: 48,
            sugars: 3,
            fiber: 20,
            protein: 12,
            salt: 5
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
        homemade: {
            ingredients: [
                { ingredientId: 'stoedt-ingefaer', quantity: 2, unit: 'tbsp' },
                { ingredientId: 'hvidloegspulver', quantity: 1, unit: 'tbsp' },
                { ingredientId: 'loegpulver', quantity: 1, unit: 'tbsp' },
                { ingredientId: 'paprika', quantity: 2, unit: 'tsp', note: 'gerne røget' },
                { ingredientId: 'chiliflager', quantity: 1, unit: 'tsp' },
                { ingredientId: 'stoedt-koriander', quantity: 1, unit: 'tsp' },
                { ingredientId: 'spidskommen', quantity: 1, unit: 'tsp', note: 'stødt' },
                { ingredientId: 'salt', quantity: 1, unit: 'tsp' },
                { ingredientId: 'brun-farin', quantity: 1, unit: 'tsp' },
                { ingredientId: 'peber', quantity: 0.5, unit: 'tsp' },
                { ingredientId: 'citronskal', quantity: 0.5, unit: 'tsp' }
            ],
            steps: [
                'Mål: Afmål alle krydderierne.',
                'Bland: Rør det hele grundigt sammen i en skål, indtil blandingen er ensartet.',
                'Opbevar: Fyld krydderiblandingen på en tæt lukket krukke og opbevar den mørkt og tørt.'
            ]
        },
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
        aliases: ['ingefærpuré', 'ingefærpasta', 'ingefær puré', 'ginger puree', 'ginger purée', 'ginger paste'],
        emoji: '🫚',
        imageUrl: `${ASSETS}/ingefaerpure.webp`,
        homemade: {
            ingredients: [
                { ingredientId: 'ingefaer', quantity: 200, unit: 'g', note: 'skrællet' },
                {
                    label: 'Væske',
                    quantity: 2.5,
                    unit: 'tbsp',
                    note: 'nødvendig, for at blenderen kan køre rundt',
                    options: [
                        { ingredientId: 'olie', description: 'Til varm mad (wok, karryretter). Holdbarhed: 1 uge.' },
                        { ingredientId: 'vand', description: 'Til drinks, te eller kager (undgår olielag). Holdbarhed: 3-4 dage.' }
                    ]
                }
            ],
            steps: [
                'Skræl: Skrab skrællen af ingefæren med kanten af en teske.',
                'Snit: Skær ingefæren i mindre stykker.',
                'Blend: Kom ingefær og væske i en minihakker eller blender. Blend til en helt glat masse.'
            ]
        },
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
    },
    {
        id: 'vand',
        name: 'Vand',
        category: 'other',
        tags: [],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: true,
        aliases: ['vand', 'water'],
        emoji: '💧',
        imageUrl: `${ASSETS}/vand.webp`,
        unitConversions: [{ unit: 'ml', grams: 1 }],
        nutritionPer100g: {
            energyKcal: 0,
            fat: 0,
            saturatedFat: 0,
            carbohydrates: 0,
            sugars: 0,
            fiber: 0,
            protein: 0,
            salt: 0
        }
    }
];
