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
        id: 'gnocchi',
        name: 'Gnocchi',
        category: 'grain',
        dietaryProperties: ['vegan', 'vegetarian', 'lactose-free'],
        isStaple: false,
        aliases: ['gnocchi', 'kartoffelgnocchi', 'potato gnocchi'],
        emoji: '🥟',
        imageUrl: `${ASSETS}/gnocchi.webp`,
        nutritionPer100g: {
            energyKcal: 133,
            fat: 0.4,
            saturatedFat: 0.1,
            carbohydrates: 29,
            sugars: 1.5,
            fiber: 1.8,
            protein: 3.3,
            salt: 0.9
        }
    },
    {
        id: 'perlecouscous',
        name: 'Perlecouscous',
        category: 'grain',
        dietaryProperties: ['vegan', 'vegetarian', 'lactose-free'],
        isStaple: false,
        aliases: ['perle couscous', 'israelsk couscous', 'ptitim', 'pearl couscous', 'israeli couscous'],
        emoji: '🍚',
        imageUrl: `${ASSETS}/perlecouscous.webp`,
        nutritionPer100g: {
            energyKcal: 352,
            fat: 1.5,
            saturatedFat: 0.3,
            carbohydrates: 72,
            sugars: 2.5,
            fiber: 3.5,
            protein: 12,
            salt: 0.02
        }
    },
    {
        id: 'prosciutto',
        name: 'Prosciutto',
        category: 'meat',
        tags: ['seasoning'],
        dietaryProperties: ['gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['parmaskinke', 'parma ham', 'prosciutto crudo', 'lufttørret skinke', 'skinke'],
        emoji: '🥓',
        imageUrl: `${ASSETS}/prosciutto.webp`,
        unitConversions: [{ unit: 'pcs', grams: 12 }],
        nutritionPer100g: {
            energyKcal: 250,
            fat: 15,
            saturatedFat: 5.5,
            carbohydrates: 0.5,
            sugars: 0.3,
            fiber: 0,
            protein: 28,
            salt: 4.5
        }
    },
    {
        id: 'toerrede-tranebaer',
        name: 'Tørrede tranebær',
        category: 'fruit',
        tags: ['sweet', 'sour'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['tranebær', 'tørrede tranebær', 'tranebaer', 'cranberries', 'dried cranberries'],
        emoji: '🍒',
        imageUrl: `${ASSETS}/tranebaer.webp`,
        nutritionPer100g: {
            energyKcal: 308,
            fat: 1.4,
            saturatedFat: 0.1,
            carbohydrates: 77,
            sugars: 65,
            fiber: 5,
            protein: 0.2,
            salt: 0.01
        }
    },
    {
        id: 'chorizo-ternet',
        name: 'Chorizo (tern)',
        category: 'meat',
        tags: ['spicy', 'seasoning'],
        dietaryProperties: ['gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['chorizo', 'chorizoterninger', 'chorizo i tern', 'ternet chorizo', 'diced chorizo'],
        emoji: '🌭',
        imageUrl: `${ASSETS}/chorizo-ternet.webp`,
        nutritionPer100g: {
            energyKcal: 455,
            fat: 38,
            saturatedFat: 14,
            carbohydrates: 2,
            sugars: 1,
            fiber: 0,
            protein: 25,
            salt: 4
        }
    },
    {
        id: 'pizzadej',
        name: 'Pizzadej',
        category: 'grain',
        dietaryProperties: ['vegan', 'vegetarian', 'lactose-free'],
        isStaple: false,
        aliases: ['pizzabund', 'pizza dej', 'pizza dough', 'pizzadejs'],
        emoji: '🍕',
        imageUrl: `${ASSETS}/pizzadej.webp`,
        nutritionPer100g: {
            energyKcal: 270,
            fat: 3,
            saturatedFat: 0.5,
            carbohydrates: 52,
            sugars: 2,
            fiber: 2.5,
            protein: 8.5,
            salt: 1.2
        }
    },
    {
        id: 'tortelloni-med-ricotta-og-spinat',
        name: 'Tortelloni med ricotta og spinat',
        category: 'grain',
        dietaryProperties: ['vegetarian'],
        isStaple: false,
        aliases: ['tortelloni', 'tortelloni ricotta spinat', 'ricotta og spinat tortelloni', 'spinat tortelloni', 'ricotta spinach tortelloni'],
        emoji: '🥟',
        imageUrl: `${ASSETS}/tortelloni-med-ricotta-og-spinat.webp`,
        nutritionPer100g: {
            energyKcal: 250,
            fat: 6.5,
            saturatedFat: 3.2,
            carbohydrates: 39,
            sugars: 2,
            fiber: 2.5,
            protein: 9.5,
            salt: 1.1
        }
    },
    {
        id: 'fuldkornsnudler',
        name: 'Fuldkornsnudler',
        category: 'grain',
        dietaryProperties: ['vegan', 'vegetarian', 'lactose-free'],
        isStaple: false,
        aliases: ['fuldkornsnudler tørrede', 'fuldkornsbåndpasta', 'fuldkornspasta', 'whole wheat noodles', 'wholegrain noodles'],
        emoji: '🍜',
        imageUrl: `${ASSETS}/fuldkornsnudler.webp`,
        nutritionPer100g: {
            energyKcal: 350,
            fat: 2.5,
            saturatedFat: 0.5,
            carbohydrates: 66,
            sugars: 3,
            fiber: 9,
            protein: 13,
            salt: 0.02
        }
    },
    {
        id: 'flaaede-tomater',
        name: 'Flåede tomater',
        category: 'vegetable',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['flåede tomater på dåse', 'tomater på dåse', 'dåsetomater', 'peeled tomatoes', 'whole peeled tomatoes'],
        emoji: '🍅',
        imageUrl: `${ASSETS}/flaaet-tomater.webp`,
        nutritionPer100g: {
            energyKcal: 24,
            fat: 0.2,
            saturatedFat: 0.03,
            carbohydrates: 4,
            sugars: 3.5,
            fiber: 1.2,
            protein: 1.2,
            salt: 0.1
        }
    },
    {
        id: 'hakkede-tomater',
        name: 'Hakkede tomater',
        category: 'vegetable',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['hakket tomat', 'hakkede tomater på dåse', 'tomater i tern', 'chopped tomatoes', 'diced tomatoes', 'canned chopped tomatoes'],
        emoji: '🍅',
        imageUrl: `${ASSETS}/hakket-tomater.webp`,
        nutritionPer100g: {
            energyKcal: 24,
            fat: 0.2,
            saturatedFat: 0.03,
            carbohydrates: 4,
            sugars: 3.5,
            fiber: 1.2,
            protein: 1.2,
            salt: 0.1
        }
    },
    {
        id: 'abrikoschutney',
        name: 'Abrikoschutney',
        category: 'sauce',
        tags: ['sweet', 'sour'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['chutney', 'abrikos chutney', 'apricot chutney'],
        emoji: '🍑',
        imageUrl: `${ASSETS}/abrikoschutney.webp`,
        unitConversions: [
            { unit: 'tbsp', grams: 20 },
            { unit: 'tsp', grams: 7 }
        ],
        nutritionPer100g: {
            energyKcal: 200,
            fat: 0.2,
            saturatedFat: 0,
            carbohydrates: 49,
            sugars: 42,
            fiber: 1.5,
            protein: 0.6,
            salt: 0.6
        }
    },
    {
        id: 'svineschnitzel',
        name: 'Svineschnitzel',
        category: 'meat',
        dietaryProperties: ['gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['schnitzel', 'svineschnitzler', 'svinekotelet uden ben', 'svinemørbrad i skiver', 'pork schnitzel', 'pork cutlet'],
        emoji: '🥩',
        imageUrl: `${ASSETS}/svineschnitzel.webp`,
        unitConversions: [{ unit: 'pcs', grams: 120 }],
        nutritionPer100g: {
            energyKcal: 125,
            fat: 3,
            saturatedFat: 1.1,
            carbohydrates: 0,
            sugars: 0,
            fiber: 0,
            protein: 23,
            salt: 0.15
        }
    },
    {
        id: 'groen-karrypasta',
        name: 'Grøn karrypasta',
        category: 'sauce',
        tags: ['spicy', 'seasoning'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['grøn karrypaste', 'grøn currypasta', 'green curry paste', 'thai green curry paste', 'green curry'],
        emoji: '🍛',
        imageUrl: `${ASSETS}/groen-karrypasta.webp`,
        unitConversions: [
            { unit: 'tsp', grams: 5 },
            { unit: 'tbsp', grams: 15 }
        ],
        nutritionPer100g: {
            energyKcal: 110,
            fat: 5,
            saturatedFat: 1.5,
            carbohydrates: 12,
            sugars: 4,
            fiber: 4,
            protein: 3,
            salt: 7
        }
    },
    {
        id: 'gyoza-med-groentsager',
        name: 'Gyoza med grøntsager',
        category: 'other',
        dietaryProperties: ['vegan', 'vegetarian', 'lactose-free'],
        isStaple: false,
        aliases: ['gyoza', 'grøntsagsgyoza', 'vegetar gyoza', 'veggie gyoza', 'vegetable gyoza', 'dumplings'],
        emoji: '🥟',
        imageUrl: `${ASSETS}/gyoza-med-groentsager.webp`,
        unitConversions: [{ unit: 'pcs', grams: 25 }],
        nutritionPer100g: {
            energyKcal: 190,
            fat: 5,
            saturatedFat: 0.8,
            carbohydrates: 30,
            sugars: 2.5,
            fiber: 2.5,
            protein: 6,
            salt: 1.1
        }
    },
    {
        id: 'ras-el-hanout',
        name: 'Ras el hanout',
        category: 'spice',
        tags: ['seasoning'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['ras el hanout krydderiblanding', 'ras-el-hanout', 'marokkansk krydderiblanding'],
        emoji: '🧂',
        imageUrl: `${ASSETS}/ras-el-hanout.webp`,
        unitConversions: [
            { unit: 'tsp', grams: 2.5 },
            { unit: 'tbsp', grams: 7.5 }
        ],
        nutritionPer100g: {
            energyKcal: 330,
            fat: 12,
            saturatedFat: 2,
            carbohydrates: 50,
            sugars: 3,
            fiber: 25,
            protein: 11,
            salt: 0.1
        }
    },
    {
        id: 'grillost',
        name: 'Grillost',
        category: 'dairy',
        dietaryProperties: ['vegetarian', 'gluten-free'],
        isStaple: false,
        aliases: ['halloumi', 'grill ost', 'grilling cheese', 'grillosten'],
        emoji: '🧀',
        imageUrl: `${ASSETS}/grillost.webp`,
        nutritionPer100g: {
            energyKcal: 320,
            fat: 25,
            saturatedFat: 16,
            carbohydrates: 1.5,
            sugars: 1,
            fiber: 0,
            protein: 22,
            salt: 2.8
        }
    },
    {
        id: 'ristede-loeg',
        name: 'Ristede løg',
        category: 'vegetable',
        tags: ['seasoning'],
        dietaryProperties: ['vegan', 'vegetarian', 'lactose-free'],
        isStaple: false,
        aliases: ['ristet løg', 'ristede løg', 'sprøde løg', 'stegte løg', 'fried onions', 'crispy onions'],
        emoji: '🧅',
        imageUrl: `${ASSETS}/ristede-loeg.webp`,
        unitConversions: [
            { unit: 'tsp', grams: 2 },
            { unit: 'tbsp', grams: 6 }
        ],
        nutritionPer100g: {
            energyKcal: 560,
            fat: 40,
            saturatedFat: 4,
            carbohydrates: 40,
            sugars: 10,
            fiber: 5,
            protein: 5,
            salt: 1
        }
    },
    {
        id: 'skalotteloeg',
        name: 'Skalotteløg',
        category: 'vegetable',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['skalotteløg', 'skalotte', 'skalotter', 'shallot', 'shallots'],
        emoji: '🧅',
        imageUrl: `${ASSETS}/skalotteloeg.webp`,
        unitConversions: [{ unit: 'pcs', grams: 40 }],
        nutritionPer100g: {
            energyKcal: 72,
            fat: 0.1,
            saturatedFat: 0,
            carbohydrates: 16.8,
            sugars: 7.9,
            fiber: 3.2,
            protein: 2.5,
            salt: 0.04
        }
    },
    {
        id: 'roed-miso',
        name: 'Rød miso',
        category: 'sauce',
        tags: ['seasoning'],
        dietaryProperties: ['vegan', 'vegetarian', 'lactose-free'],
        isStaple: false,
        aliases: ['miso', 'rød misopasta', 'misopasta', 'red miso', 'red miso paste'],
        emoji: '🥣',
        imageUrl: `${ASSETS}/roed-miso.webp`,
        unitConversions: [
            { unit: 'tsp', grams: 6 },
            { unit: 'tbsp', grams: 18 }
        ],
        nutritionPer100g: {
            energyKcal: 200,
            fat: 6,
            saturatedFat: 1,
            carbohydrates: 26,
            sugars: 6,
            fiber: 5,
            protein: 12,
            salt: 12
        }
    },
    {
        id: 'kikaerter',
        name: 'Kikærter',
        category: 'vegetable',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['kikærter på dåse', 'kikærter i dåse', 'kikaerter', 'chickpeas', 'garbanzo beans'],
        emoji: '🫘',
        imageUrl: `${ASSETS}/kikaerter.webp`,
        unitConversions: [
            { unit: 'tsp', grams: 4 },
            { unit: 'tbsp', grams: 12 }
        ],
        nutritionPer100g: {
            energyKcal: 120,
            fat: 2.6,
            saturatedFat: 0.3,
            carbohydrates: 16,
            sugars: 2.5,
            fiber: 5,
            protein: 7,
            salt: 0.3
        }
    },
    {
        id: 'linser',
        name: 'Linser',
        category: 'vegetable',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['brune linser', 'grønne linser', 'tørrede linser', 'lentils', 'green lentils', 'brown lentils'],
        emoji: '🫘',
        imageUrl: `${ASSETS}/linser.webp`,
        unitConversions: [
            { unit: 'tsp', grams: 5 },
            { unit: 'tbsp', grams: 15 }
        ],
        nutritionPer100g: {
            energyKcal: 330,
            fat: 1.5,
            saturatedFat: 0.2,
            carbohydrates: 50,
            sugars: 2,
            fiber: 11,
            protein: 24,
            salt: 0.02
        }
    },
    {
        id: 'pasta-penne-fusilli',
        name: 'Pasta (penne/fusilli)',
        category: 'grain',
        dietaryProperties: ['vegan', 'vegetarian', 'lactose-free'],
        isStaple: true,
        aliases: ['pasta', 'penne', 'fusilli', 'skruer', 'pastaskruer', 'tørret pasta', 'dried pasta'],
        emoji: '🍝',
        imageUrl: `${ASSETS}/pasta-penne-fusilli.webp`,
        unitConversions: [{ unit: 'tbsp', grams: 10 }],
        nutritionPer100g: {
            energyKcal: 350,
            fat: 1.5,
            saturatedFat: 0.3,
            carbohydrates: 71,
            sugars: 3,
            fiber: 3,
            protein: 12,
            salt: 0.02
        }
    },
    {
        id: 'bulgur',
        name: 'Bulgur',
        category: 'grain',
        dietaryProperties: ['vegan', 'vegetarian', 'lactose-free'],
        isStaple: false,
        aliases: ['bulgur hvede', 'bulgur wheat'],
        emoji: '🌾',
        imageUrl: `${ASSETS}/bulgur.webp`,
        unitConversions: [
            { unit: 'tsp', grams: 4 },
            { unit: 'tbsp', grams: 12 }
        ],
        nutritionPer100g: {
            energyKcal: 345,
            fat: 1.5,
            saturatedFat: 0.3,
            carbohydrates: 69,
            sugars: 0.8,
            fiber: 8,
            protein: 12,
            salt: 0.02
        }
    },
    {
        id: 'couscous',
        name: 'Couscous',
        category: 'grain',
        dietaryProperties: ['vegan', 'vegetarian', 'lactose-free'],
        isStaple: false,
        aliases: ['kuskus', 'almindelig couscous', 'hvedecouscous'],
        emoji: '🌾',
        imageUrl: `${ASSETS}/couscous.webp`,
        unitConversions: [
            { unit: 'tsp', grams: 4 },
            { unit: 'tbsp', grams: 12 }
        ],
        nutritionPer100g: {
            energyKcal: 360,
            fat: 1.5,
            saturatedFat: 0.3,
            carbohydrates: 73,
            sugars: 2,
            fiber: 4,
            protein: 12,
            salt: 0.02
        }
    },
    {
        id: 'sorte-bonner',
        name: 'Sorte bønner',
        category: 'vegetable',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['sorte bønner på dåse', 'black beans', 'sorte bonner'],
        emoji: '🫘',
        imageUrl: `${ASSETS}/sorte-bonner.webp`,
        unitConversions: [
            { unit: 'tsp', grams: 5 },
            { unit: 'tbsp', grams: 15 }
        ],
        nutritionPer100g: {
            energyKcal: 120,
            fat: 0.6,
            saturatedFat: 0.1,
            carbohydrates: 18,
            sugars: 0.5,
            fiber: 7,
            protein: 8,
            salt: 0.3
        }
    },
    {
        id: 'tofu',
        name: 'Tofu',
        category: 'other',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['fast tofu', 'naturel tofu', 'tofu naturel', 'bean curd'],
        emoji: '🧈',
        imageUrl: `${ASSETS}/tofu.webp`,
        nutritionPer100g: {
            energyKcal: 120,
            fat: 7,
            saturatedFat: 1,
            carbohydrates: 1.5,
            sugars: 0.5,
            fiber: 1,
            protein: 13,
            salt: 0.02
        }
    },
    {
        id: 'havregryn',
        name: 'Havregryn',
        category: 'grain',
        dietaryProperties: ['vegan', 'vegetarian', 'lactose-free'],
        isStaple: false,
        aliases: ['havregryn fint', 'store havregryn', 'oats', 'rolled oats', 'oatmeal'],
        emoji: '🌾',
        imageUrl: `${ASSETS}/havregryn.webp`,
        unitConversions: [
            { unit: 'tsp', grams: 3 },
            { unit: 'tbsp', grams: 9 }
        ],
        nutritionPer100g: {
            energyKcal: 370,
            fat: 7,
            saturatedFat: 1.3,
            carbohydrates: 58,
            sugars: 1,
            fiber: 10,
            protein: 13,
            salt: 0.02
        }
    },
    {
        id: 'hvidkaal',
        name: 'Hvidkål',
        category: 'vegetable',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['hvidkål', 'hvid kål', 'white cabbage', 'cabbage'],
        emoji: '🥬',
        imageUrl: `${ASSETS}/hvidkaal.webp`,
        unitConversions: [{ unit: 'pcs', grams: 1000 }],
        nutritionPer100g: {
            energyKcal: 25,
            fat: 0.1,
            saturatedFat: 0,
            carbohydrates: 4.7,
            sugars: 3.2,
            fiber: 2.5,
            protein: 1.3,
            salt: 0.02
        }
    },
    {
        id: 'hvedenudler',
        name: 'Hvedenudler',
        category: 'grain',
        dietaryProperties: ['vegan', 'vegetarian', 'lactose-free'],
        isStaple: false,
        aliases: ['wheat noodles', 'nudler', 'kinesiske nudler'],
        emoji: '🍜',
        imageUrl: `${ASSETS}/hvedenudler.webp`,
        nutritionPer100g: {
            energyKcal: 350,
            fat: 1.5,
            saturatedFat: 0.3,
            carbohydrates: 72,
            sugars: 2,
            fiber: 3,
            protein: 11,
            salt: 1
        }
    },
    {
        id: 'glasnudler',
        name: 'Glasnudler',
        category: 'grain',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['glass noodles', 'cellophane noodles', 'mungbønnenudler'],
        emoji: '🍜',
        imageUrl: `${ASSETS}/glasnudler.webp`,
        nutritionPer100g: {
            energyKcal: 350,
            fat: 0.1,
            saturatedFat: 0,
            carbohydrates: 86,
            sugars: 0.1,
            fiber: 1,
            protein: 0.2,
            salt: 0.05
        }
    },
    {
        id: 'aegnudler',
        name: 'Ægnudler',
        category: 'grain',
        dietaryProperties: ['vegetarian', 'lactose-free'],
        isStaple: false,
        aliases: ['ægnudler', 'egg noodles', 'æggenudler'],
        emoji: '🍜',
        imageUrl: `${ASSETS}/aegnudler.webp`,
        nutritionPer100g: {
            energyKcal: 370,
            fat: 4,
            saturatedFat: 1,
            carbohydrates: 70,
            sugars: 2,
            fiber: 3,
            protein: 14,
            salt: 0.1
        }
    },
    {
        id: 'risnudler',
        name: 'Risnudler',
        category: 'grain',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['rice noodles', 'rismel nudler', 'pad thai nudler'],
        emoji: '🍜',
        imageUrl: `${ASSETS}/risnudler.webp`,
        nutritionPer100g: {
            energyKcal: 360,
            fat: 0.6,
            saturatedFat: 0.2,
            carbohydrates: 83,
            sugars: 0.1,
            fiber: 1.6,
            protein: 6,
            salt: 0.05
        }
    },
    {
        id: 'rosenkaal',
        name: 'Rosenkål',
        category: 'vegetable',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['rosenkål', 'brussels sprouts', 'sprouts'],
        emoji: '🥬',
        imageUrl: `${ASSETS}/rosenkaal.webp`,
        unitConversions: [{ unit: 'pcs', grams: 20 }],
        nutritionPer100g: {
            energyKcal: 43,
            fat: 0.3,
            saturatedFat: 0.1,
            carbohydrates: 5,
            sugars: 2.2,
            fiber: 3.8,
            protein: 3.4,
            salt: 0.02
        }
    },
    {
        id: 'tun-i-vand',
        name: 'Tun i vand',
        category: 'fish',
        dietaryProperties: ['gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['tun', 'tun på dåse', 'tunfisk i vand', 'tunfisk', 'tuna in water', 'canned tuna'],
        emoji: '🐟',
        imageUrl: `${ASSETS}/tun-i-vand.webp`,
        nutritionPer100g: {
            energyKcal: 110,
            fat: 0.8,
            saturatedFat: 0.2,
            carbohydrates: 0,
            sugars: 0,
            fiber: 0,
            protein: 25,
            salt: 0.9
        }
    },
    {
        id: 'tun-i-olie',
        name: 'Tun i olie',
        category: 'fish',
        dietaryProperties: ['gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['tunfisk i olie', 'tuna in oil', 'tuna in olive oil'],
        emoji: '🐟',
        imageUrl: `${ASSETS}/tun-i-olie.webp`,
        nutritionPer100g: {
            energyKcal: 200,
            fat: 10,
            saturatedFat: 1.7,
            carbohydrates: 0,
            sugars: 0,
            fiber: 0,
            protein: 27,
            salt: 0.9
        }
    },
    {
        id: 'bagepulver',
        name: 'Bagepulver',
        category: 'other',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: true,
        aliases: ['baking powder'],
        emoji: '🧂',
        imageUrl: `${ASSETS}/bagepulver.webp`,
        unitConversions: [
            { unit: 'tsp', grams: 4 },
            { unit: 'tbsp', grams: 12 }
        ],
        nutritionPer100g: {
            energyKcal: 50,
            fat: 0,
            saturatedFat: 0,
            carbohydrates: 28,
            sugars: 0,
            fiber: 0,
            protein: 0,
            salt: 20
        }
    },
    {
        id: 'kyllingeoverlaar',
        name: 'Kyllingeoverlår',
        category: 'meat',
        dietaryProperties: ['gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['kyllingoverlår', 'kyllingeoverlår', 'overlår af kylling', 'chicken thighs', 'chicken thigh'],
        emoji: '🍗',
        imageUrl: `${ASSETS}/kyllingeoverlaar.webp`,
        unitConversions: [{ unit: 'pcs', grams: 150 }],
        nutritionPer100g: {
            energyKcal: 210,
            fat: 14,
            saturatedFat: 4,
            carbohydrates: 0,
            sugars: 0,
            fiber: 0,
            protein: 19,
            salt: 0.2
        }
    },
    {
        id: 'kyllingelaar',
        name: 'Kyllingelår',
        category: 'meat',
        dietaryProperties: ['gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['kyllinglår', 'kyllingelår', 'kyllingelår med ben', 'chicken legs', 'chicken leg'],
        emoji: '🍗',
        imageUrl: `${ASSETS}/kyllingelaar.webp`,
        unitConversions: [{ unit: 'pcs', grams: 250 }],
        nutritionPer100g: {
            energyKcal: 190,
            fat: 12,
            saturatedFat: 3.5,
            carbohydrates: 0,
            sugars: 0,
            fiber: 0,
            protein: 19,
            salt: 0.2
        }
    },
    {
        id: 'kyllingeunderlaar',
        name: 'Kyllingeunderlår',
        category: 'meat',
        dietaryProperties: ['gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['kyllingunderlår', 'kyllingeunderlår', 'trommestikker', 'drumsticks', 'chicken drumsticks'],
        emoji: '🍗',
        imageUrl: `${ASSETS}/kyllingeunderlaar.webp`,
        unitConversions: [{ unit: 'pcs', grams: 110 }],
        nutritionPer100g: {
            energyKcal: 170,
            fat: 9,
            saturatedFat: 2.5,
            carbohydrates: 0,
            sugars: 0,
            fiber: 0,
            protein: 20,
            salt: 0.2
        }
    },
    {
        id: 'helkylling',
        name: 'Hel kylling',
        category: 'meat',
        dietaryProperties: ['gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['hel kylling', 'helkylling', 'hel frisk kylling', 'whole chicken'],
        emoji: '🍗',
        imageUrl: `${ASSETS}/helkylling.webp`,
        unitConversions: [{ unit: 'pcs', grams: 1300 }],
        nutritionPer100g: {
            energyKcal: 200,
            fat: 13,
            saturatedFat: 3.7,
            carbohydrates: 0,
            sugars: 0,
            fiber: 0,
            protein: 19,
            salt: 0.2
        }
    },
    {
        id: 'torskerogn',
        name: 'Torskerogn',
        category: 'fish',
        dietaryProperties: ['gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['torskerogn', 'rogn', 'cod roe'],
        emoji: '🐟',
        imageUrl: `${ASSETS}/torskerogn.webp`,
        unitConversions: [
            { unit: 'tsp', grams: 5 },
            { unit: 'tbsp', grams: 15 }
        ],
        nutritionPer100g: {
            energyKcal: 110,
            fat: 1.5,
            saturatedFat: 0.3,
            carbohydrates: 0.5,
            sugars: 0,
            fiber: 0,
            protein: 24,
            salt: 2
        }
    },
    {
        id: 'mozzarella',
        name: 'Mozzarella',
        category: 'dairy',
        dietaryProperties: ['vegetarian', 'gluten-free'],
        isStaple: false,
        aliases: ['mozzarellakugle', 'mozzarellakugler', 'frisk mozzarella', 'fresh mozzarella'],
        emoji: '🧀',
        imageUrl: `${ASSETS}/mozzarella.webp`,
        unitConversions: [{ unit: 'pcs', grams: 125 }],
        nutritionPer100g: {
            energyKcal: 250,
            fat: 19,
            saturatedFat: 12,
            carbohydrates: 1,
            sugars: 0.5,
            fiber: 0,
            protein: 19,
            salt: 0.6
        }
    },
    {
        id: 'revet-mozzarella',
        name: 'Revet mozzarella',
        category: 'dairy',
        dietaryProperties: ['vegetarian', 'gluten-free'],
        isStaple: false,
        aliases: ['revet mozzarella', 'mozzarella revet', 'shredded mozzarella', 'pizzaost'],
        emoji: '🧀',
        imageUrl: `${ASSETS}/revet-mozzarella.webp`,
        unitConversions: [
            { unit: 'tbsp', grams: 7 },
            { unit: 'dl', grams: 40 }
        ],
        nutritionPer100g: {
            energyKcal: 280,
            fat: 21,
            saturatedFat: 13,
            carbohydrates: 1,
            sugars: 0.5,
            fiber: 0,
            protein: 22,
            salt: 1.5
        }
    },
    {
        id: 'salatost',
        name: 'Salatost',
        category: 'dairy',
        dietaryProperties: ['vegetarian', 'gluten-free'],
        isStaple: false,
        aliases: ['feta', 'fetaost', 'hvid ost', 'salatost i tern', 'feta cheese'],
        emoji: '🧀',
        imageUrl: `${ASSETS}/salatost.webp`,
        unitConversions: [{ unit: 'tbsp', grams: 10 }],
        nutritionPer100g: {
            energyKcal: 260,
            fat: 21,
            saturatedFat: 14,
            carbohydrates: 1.5,
            sugars: 1,
            fiber: 0,
            protein: 15,
            salt: 2.8
        }
    },
    {
        id: 'piskefloede-36',
        name: 'Piskefløde 36%',
        category: 'dairy',
        dietaryProperties: ['vegetarian', 'gluten-free'],
        isStaple: false,
        aliases: ['piskefløde', 'fløde', 'piskefløde 38%', 'whipping cream', 'heavy cream'],
        emoji: '🥛',
        imageUrl: `${ASSETS}/piskefloede-36.webp`,
        unitConversions: [
            { unit: 'tsp', grams: 5 },
            { unit: 'tbsp', grams: 15 },
            { unit: 'dl', grams: 100 }
        ],
        nutritionPer100g: {
            energyKcal: 340,
            fat: 36,
            saturatedFat: 23,
            carbohydrates: 3,
            sugars: 3,
            fiber: 0,
            protein: 2.2,
            salt: 0.1
        }
    },
    {
        id: 'rugmel',
        name: 'Rugmel',
        category: 'grain',
        dietaryProperties: ['vegan', 'vegetarian', 'lactose-free'],
        isStaple: false,
        aliases: ['rugmel fint', 'rugmel groft', 'rye flour'],
        emoji: '🌾',
        imageUrl: `${ASSETS}/rugmel.webp`,
        unitConversions: [
            { unit: 'tbsp', grams: 8 },
            { unit: 'dl', grams: 55 }
        ],
        nutritionPer100g: {
            energyKcal: 330,
            fat: 1.5,
            saturatedFat: 0.2,
            carbohydrates: 62,
            sugars: 1,
            fiber: 14,
            protein: 9,
            salt: 0.01
        }
    },
    {
        id: 'rosiner',
        name: 'Rosiner',
        category: 'fruit',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['rosin', 'raisins'],
        emoji: '🍇',
        imageUrl: `${ASSETS}/rosiner.webp`,
        unitConversions: [
            { unit: 'tsp', grams: 4 },
            { unit: 'tbsp', grams: 12 }
        ],
        nutritionPer100g: {
            energyKcal: 300,
            fat: 0.5,
            saturatedFat: 0.1,
            carbohydrates: 70,
            sugars: 60,
            fiber: 4,
            protein: 3,
            salt: 0.03
        }
    },
    {
        id: 'bladselleri',
        name: 'Bladselleri',
        category: 'vegetable',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['selleri', 'stangselleri', 'selleristængel', 'celery'],
        emoji: '🥬',
        imageUrl: `${ASSETS}/bladselleri.webp`,
        unitConversions: [{ unit: 'pcs', grams: 50 }],
        nutritionPer100g: {
            energyKcal: 16,
            fat: 0.2,
            saturatedFat: 0,
            carbohydrates: 3,
            sugars: 1.8,
            fiber: 1.6,
            protein: 0.7,
            salt: 0.2
        }
    },
    {
        id: 'mandler',
        name: 'Mandler',
        category: 'seed',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['hele mandler', 'hakkede mandler', 'almonds'],
        emoji: '🌰',
        imageUrl: `${ASSETS}/mandler.webp`,
        unitConversions: [
            { unit: 'tsp', grams: 3 },
            { unit: 'tbsp', grams: 9 }
        ],
        nutritionPer100g: {
            energyKcal: 600,
            fat: 52,
            saturatedFat: 4,
            carbohydrates: 7,
            sugars: 4,
            fiber: 12,
            protein: 21,
            salt: 0.01
        }
    },
    {
        id: 'cashewnodder',
        name: 'Cashewnødder',
        category: 'seed',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['cashewnødder', 'cashew', 'cashews', 'cashew nuts'],
        emoji: '🌰',
        imageUrl: `${ASSETS}/cashewnodder.webp`,
        unitConversions: [
            { unit: 'tsp', grams: 3 },
            { unit: 'tbsp', grams: 9 }
        ],
        nutritionPer100g: {
            energyKcal: 580,
            fat: 46,
            saturatedFat: 9,
            carbohydrates: 25,
            sugars: 6,
            fiber: 3,
            protein: 18,
            salt: 0.02
        }
    },
    {
        id: 'kidneybonner',
        name: 'Kidneybønner',
        category: 'vegetable',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['kidneybønner på dåse', 'kidney bønner', 'røde bønner', 'kidney beans', 'red kidney beans'],
        emoji: '🫘',
        imageUrl: `${ASSETS}/kidneybonner.webp`,
        unitConversions: [
            { unit: 'tsp', grams: 5 },
            { unit: 'tbsp', grams: 15 }
        ],
        nutritionPer100g: {
            energyKcal: 110,
            fat: 0.5,
            saturatedFat: 0.1,
            carbohydrates: 17,
            sugars: 1,
            fiber: 6,
            protein: 8,
            salt: 0.3
        }
    },
    {
        id: 'kylling-burgerboffer',
        name: 'Kylling burgerbøffer',
        category: 'meat',
        dietaryProperties: ['lactose-free'],
        isStaple: false,
        aliases: [
            'kyllingebøffer',
            'kylling burgerbøf',
            'kyllingeburgerbøffer',
            'kyllingeburger',
            'kylling burgerbøffer',
            'Panerede kyllingebøffer',
            'Crispy kyllingebøffer',
            'Crispy paneret kyllingeburger'
        ],
        emoji: '🍔',
        imageUrl: `${ASSETS}/kylling-burgerboffer.png`,
        unitConversions: [{ unit: 'pcs', grams: 90 }],
        nutritionPer100g: {
            energyKcal: 250,
            fat: 14,
            saturatedFat: 2.5,
            carbohydrates: 14,
            sugars: 1,
            fiber: 1,
            protein: 16,
            salt: 1.2
        }
    },
    {
        id: 'kyllingkebab',
        name: 'Kyllingekebab',
        category: 'meat',
        dietaryProperties: ['lactose-free', 'gluten-free'],
        isStaple: false,
        aliases: ['kyllingkebab', 'kylling kebab', 'kebabkød kylling', 'kyllingedöner', 'kyllingedoner', 'chicken kebab'],
        emoji: '🍗',
        imageUrl: `${ASSETS}/kyllingkebab.webp`,
        nutritionPer100g: {
            energyKcal: 190,
            fat: 9,
            saturatedFat: 2.5,
            carbohydrates: 1,
            sugars: 0.5,
            fiber: 0,
            protein: 26,
            salt: 1.3
        }
    },
    {
        id: 'hindbaer',
        name: 'Hindbær',
        category: 'fruit',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['hindbær', 'raspberries', 'raspberry'],
        emoji: '🍓',
        imageUrl: `${ASSETS}/hindbaer.webp`,
        nutritionPer100g: { energyKcal: 52, fat: 0.7, saturatedFat: 0, carbohydrates: 8, sugars: 4.4, fiber: 6.5, protein: 1.2, salt: 0 }
    },
    {
        id: 'blabaer',
        name: 'Blåbær',
        category: 'fruit',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['blåbær', 'blueberries', 'blueberry'],
        emoji: '🫐',
        imageUrl: `${ASSETS}/blabaer.webp`,
        nutritionPer100g: { energyKcal: 57, fat: 0.3, saturatedFat: 0, carbohydrates: 12, sugars: 10, fiber: 2.4, protein: 0.7, salt: 0 }
    },
    {
        id: 'jordbaer',
        name: 'Jordbær',
        category: 'fruit',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['jordbær', 'strawberries', 'strawberry'],
        emoji: '🍓',
        imageUrl: `${ASSETS}/jordbaer.webp`,
        nutritionPer100g: { energyKcal: 32, fat: 0.3, saturatedFat: 0, carbohydrates: 6, sugars: 5, fiber: 2, protein: 0.7, salt: 0 }
    },
    {
        id: 'karse',
        name: 'Karse',
        category: 'herb',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['havekarse', 'cress', 'garden cress'],
        emoji: '🌱',
        imageUrl: `${ASSETS}/karse.webp`,
        nutritionPer100g: { energyKcal: 32, fat: 0.7, saturatedFat: 0, carbohydrates: 5, sugars: 4, fiber: 1.1, protein: 2.6, salt: 0.1 }
    },
    {
        id: 'portobello-svampe',
        name: 'Portobellosvampe',
        category: 'vegetable',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['portobello', 'portobello svampe', 'portobellosvamp', 'portobello mushrooms'],
        emoji: '🍄',
        imageUrl: `${ASSETS}/portobello-svampe.webp`,
        unitConversions: [{ unit: 'pcs', grams: 80 }],
        nutritionPer100g: { energyKcal: 22, fat: 0.3, saturatedFat: 0, carbohydrates: 3.3, sugars: 1.7, fiber: 1.5, protein: 2.5, salt: 0 }
    },
    {
        id: 'babymajs',
        name: 'Babymajs',
        category: 'vegetable',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['baby majs', 'minimajs', 'baby corn', 'majskolber mini'],
        emoji: '🌽',
        imageUrl: `${ASSETS}/babymajs.webp`,
        unitConversions: [{ unit: 'pcs', grams: 15 }],
        nutritionPer100g: { energyKcal: 26, fat: 0.4, saturatedFat: 0.1, carbohydrates: 4, sugars: 2, fiber: 2, protein: 2, salt: 0.1 }
    },
    {
        id: 'bonnespirer',
        name: 'Bønnespirer',
        category: 'vegetable',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['mungbønnespirer', 'bean sprouts', 'bønnespirer'],
        emoji: '🌱',
        imageUrl: `${ASSETS}/bonnespirer.webp`,
        nutritionPer100g: { energyKcal: 30, fat: 0.2, saturatedFat: 0, carbohydrates: 4, sugars: 4, fiber: 1.8, protein: 3, salt: 0 }
    },
    {
        id: 'kinakaal',
        name: 'Kinakål',
        category: 'vegetable',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['kinakål', 'chinese cabbage', 'napa cabbage'],
        emoji: '🥬',
        imageUrl: `${ASSETS}/kinakaal.webp`,
        nutritionPer100g: { energyKcal: 16, fat: 0.2, saturatedFat: 0, carbohydrates: 2.2, sugars: 1.4, fiber: 1.2, protein: 1.2, salt: 0.05 }
    },
    {
        id: 'oksekebab',
        name: 'Oksekebab',
        category: 'meat',
        dietaryProperties: ['lactose-free'],
        isStaple: false,
        aliases: ['oksekebabkød', 'oksekød kebab', 'beef kebab', 'kebabkød okse'],
        emoji: '🥩',
        imageUrl: `${ASSETS}/oksekebab.webp`,
        nutritionPer100g: { energyKcal: 240, fat: 16, saturatedFat: 6.5, carbohydrates: 1, sugars: 0.5, fiber: 0, protein: 23, salt: 1.3 }
    },
    {
        id: 'artiskokker',
        name: 'Artiskokker',
        category: 'vegetable',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['artiskokhjerter', 'artiskokker på glas', 'artichokes', 'artichoke hearts'],
        emoji: '🌿',
        imageUrl: `${ASSETS}/artiskokker.webp`,
        nutritionPer100g: { energyKcal: 47, fat: 0.2, saturatedFat: 0, carbohydrates: 5.1, sugars: 1, fiber: 5.4, protein: 3.3, salt: 0.1 }
    },
    {
        id: 'granataebler',
        name: 'Granatæbler',
        category: 'fruit',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['granatæble', 'granatæblekerner', 'pomegranate', 'pomegranate seeds'],
        emoji: '🍎',
        imageUrl: `${ASSETS}/granataebler.webp`,
        nutritionPer100g: { energyKcal: 83, fat: 1.2, saturatedFat: 0.1, carbohydrates: 18.7, sugars: 13.7, fiber: 4, protein: 1.7, salt: 0 }
    },
    {
        id: 'medister',
        name: 'Medisterpølse',
        category: 'meat',
        dietaryProperties: [],
        isStaple: false,
        aliases: ['medister', 'medisterpølse', 'medister sausage'],
        emoji: '🌭',
        imageUrl: `${ASSETS}/medister.webp`,
        nutritionPer100g: { energyKcal: 280, fat: 24, saturatedFat: 9, carbohydrates: 1, sugars: 0.5, fiber: 0, protein: 15, salt: 1.8 }
    },
    {
        id: 'nakkefilet',
        name: 'Nakkefilet af gris',
        category: 'meat',
        dietaryProperties: ['gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['nakkefilet', 'svinenakkefilet', 'pork neck fillet'],
        emoji: '🥩',
        imageUrl: `${ASSETS}/nakkefilet.webp`,
        nutritionPer100g: { energyKcal: 230, fat: 16, saturatedFat: 6, carbohydrates: 0, sugars: 0, fiber: 0, protein: 21, salt: 0.1 }
    },
    {
        id: 'svinekoteletter',
        name: 'Svinekoteletter',
        category: 'meat',
        dietaryProperties: ['gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['svinekotelet', 'koteletter', 'pork chops', 'pork chop'],
        emoji: '🥩',
        imageUrl: `${ASSETS}/svinekoteletter.webp`,
        unitConversions: [{ unit: 'pcs', grams: 175 }],
        nutritionPer100g: { energyKcal: 231, fat: 15, saturatedFat: 5.5, carbohydrates: 0, sugars: 0, fiber: 0, protein: 23, salt: 0.1 }
    },
    {
        id: 'gullaschkoed',
        name: 'Gullaschkød af okse',
        category: 'meat',
        dietaryProperties: ['gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['gullasch', 'gullasch kød', 'oksekød i tern', 'beef goulash meat'],
        emoji: '🥩',
        imageUrl: `${ASSETS}/gullaschkoed.webp`,
        nutritionPer100g: { energyKcal: 140, fat: 5, saturatedFat: 2, carbohydrates: 0, sugars: 0, fiber: 0, protein: 22, salt: 0.1 }
    },
    {
        id: 'svinemorbrad',
        name: 'Svinemørbrad',
        category: 'meat',
        dietaryProperties: ['gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['mørbrad af gris', 'svine mørbrad', 'pork tenderloin'],
        emoji: '🥩',
        imageUrl: `${ASSETS}/svinemorbrad.webp`,
        nutritionPer100g: { energyKcal: 120, fat: 3.5, saturatedFat: 1.2, carbohydrates: 0, sugars: 0, fiber: 0, protein: 22, salt: 0.1 }
    },
    {
        id: 'flaeskesteg',
        name: 'Flæskesteg',
        category: 'meat',
        dietaryProperties: ['gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['flæskesteg af gris', 'svinekam med svær', 'pork roast'],
        emoji: '🥩',
        imageUrl: `${ASSETS}/flaeskesteg.webp`,
        nutritionPer100g: { energyKcal: 280, fat: 22, saturatedFat: 8, carbohydrates: 0, sugars: 0, fiber: 0, protein: 19, salt: 0.2 }
    },
    {
        id: 'flaesk-i-skiver',
        name: 'Flæsk i skiver',
        category: 'meat',
        dietaryProperties: ['gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['stegt flæsk', 'flæskeskiver', 'pork belly slices'],
        emoji: '🥓',
        imageUrl: `${ASSETS}/flaesk-i-skiver.webp`,
        nutritionPer100g: { energyKcal: 518, fat: 53, saturatedFat: 19, carbohydrates: 0, sugars: 0, fiber: 0, protein: 9, salt: 0.1 }
    },
    {
        id: 'roget-hamburgerryg',
        name: 'Røget hamburgerryg',
        category: 'meat',
        dietaryProperties: [],
        isStaple: false,
        aliases: ['hamburgerryg', 'røget skinke', 'smoked ham'],
        emoji: '🍖',
        imageUrl: `${ASSETS}/roget-hamburgerryg.webp`,
        nutritionPer100g: { energyKcal: 130, fat: 4, saturatedFat: 1.4, carbohydrates: 1, sugars: 1, fiber: 0, protein: 21, salt: 2.2 }
    },
    {
        id: 'aromat',
        name: 'Aromat krydderi',
        category: 'spice',
        tags: ['seasoning'],
        dietaryProperties: [],
        isStaple: false,
        aliases: ['aromat', 'aromat allround krydderi', 'knorr aromat'],
        emoji: '🧂',
        imageUrl: `${ASSETS}/aromat.webp`,
        nutritionPer100g: { energyKcal: 180, fat: 3, saturatedFat: 1, carbohydrates: 15, sugars: 5, fiber: 1, protein: 15, salt: 55 }
    },
    {
        id: 'kulor',
        name: 'Kulør',
        category: 'other',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['madkulør', 'sovsekulør', 'kulør til sovs', 'gravy browning'],
        emoji: '🫙',
        imageUrl: `${ASSETS}/kulor.webp`,
        nutritionPer100g: { energyKcal: 30, fat: 0, saturatedFat: 0, carbohydrates: 7, sugars: 6, fiber: 0, protein: 0, salt: 0.1 }
    },
    {
        id: 'estragon-toerret',
        name: 'Estragon, tørret',
        category: 'herb',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['tørret estragon', 'estragon tørret', 'dried tarragon'],
        emoji: '🌿',
        imageUrl: `${ASSETS}/estragon-toerret.webp`,
        nutritionPer100g: { energyKcal: 295, fat: 7.2, saturatedFat: 1.9, carbohydrates: 50, sugars: 0, fiber: 7.4, protein: 23, salt: 0.1 }
    },
    {
        id: 'cayennepeber',
        name: 'Stødt cayennepeber',
        category: 'spice',
        tags: ['spicy', 'seasoning'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['cayennepeber', 'cayenne', 'stødt cayenne', 'ground cayenne pepper'],
        emoji: '🌶️',
        imageUrl: `${ASSETS}/cayennepeber.webp`,
        nutritionPer100g: { energyKcal: 318, fat: 17, saturatedFat: 3.2, carbohydrates: 57, sugars: 10, fiber: 27, protein: 12, salt: 0.1 }
    },
    {
        id: 'tandoori-krydderi',
        name: 'Tandoori-krydderi',
        category: 'spice',
        tags: ['seasoning', 'spicy'],
        dietaryProperties: [],
        isStaple: false,
        aliases: ['tandoori', 'tandoori masala', 'tandoori spice mix'],
        emoji: '🌶️',
        imageUrl: `${ASSETS}/tandoori-krydderi.webp`,
        nutritionPer100g: { energyKcal: 300, fat: 12, saturatedFat: 2, carbohydrates: 40, sugars: 8, fiber: 18, protein: 12, salt: 8 }
    },
    {
        id: 'garam-masala',
        name: 'Garam masala',
        category: 'spice',
        tags: ['seasoning'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['garam masala krydderi', 'garam masala spice mix'],
        emoji: '🫚',
        imageUrl: `${ASSETS}/garam-masala.webp`,
        nutritionPer100g: { energyKcal: 380, fat: 15, saturatedFat: 3, carbohydrates: 55, sugars: 5, fiber: 25, protein: 12, salt: 0.1 }
    },
    {
        id: 'kapers',
        name: 'Kapers',
        category: 'vegetable',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['kapersbær', 'capers'],
        emoji: '🫒',
        imageUrl: `${ASSETS}/kapers.webp`,
        nutritionPer100g: { energyKcal: 23, fat: 0.9, saturatedFat: 0.2, carbohydrates: 4.9, sugars: 0.4, fiber: 3.2, protein: 2.4, salt: 5.5 }
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
        id: 'roedloeg',
        name: 'Rødløg',
        category: 'vegetable',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['rødløg', 'røde løg', 'red onion', 'roedloeg'],
        emoji: '🧅',
        imageUrl: `${ASSETS}/roedloeg.webp`,
        unitConversions: [{ unit: 'pcs', grams: 110 }],
        nutritionPer100g: {
            energyKcal: 40,
            fat: 0.1,
            saturatedFat: 0.04,
            carbohydrates: 9.3,
            sugars: 4.2,
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
        id: 'aeg',
        name: 'Æg',
        category: 'dairy',
        dietaryProperties: ['vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['æg', 'hønseæg', 'egg', 'eggs'],
        emoji: '🥚',
        imageUrl: `${ASSETS}/aeg.webp`,
        unitConversions: [{ unit: 'pcs', grams: 55 }],
        nutritionPer100g: {
            energyKcal: 143,
            fat: 9.5,
            saturatedFat: 3.1,
            carbohydrates: 0.7,
            sugars: 0.4,
            fiber: 0,
            protein: 12.6,
            salt: 0.37
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
        id: 'jasminris',
        name: 'Jasminris',
        category: 'grain',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['jasmin ris', 'jasmine rice', 'jasminerice', 'thai ris'],
        emoji: '🍚',
        imageUrl: `${ASSETS}/jasminris.webp`,
        unitConversions: [{ unit: 'dl', grams: 80 }],
        nutritionPer100g: {
            energyKcal: 355,
            fat: 0.6,
            saturatedFat: 0.2,
            carbohydrates: 79,
            sugars: 0.1,
            fiber: 1.2,
            protein: 7,
            salt: 0.01
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
        id: 'roeget-paprika',
        name: 'Røget paprika',
        category: 'spice',
        tags: ['seasoning'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['røget paprikapulver', 'smoked paprika', 'pimentón', 'pimenton', 'paprika røget'],
        emoji: '🌶️',
        imageUrl: `${ASSETS}/roeget-paprika.webp`,
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
        id: 'oregano-frisk',
        name: 'Oregano (frisk)',
        category: 'herb',
        tags: ['seasoning'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['frisk oregano', 'oregano frisk', 'fresh oregano'],
        emoji: '🌿',
        imageUrl: `${ASSETS}/oregano-frisk.webp`,
        unitConversions: [{ unit: 'tsp', grams: 1.5 }],
        nutritionPer100g: {
            energyKcal: 66,
            fat: 1.0,
            saturatedFat: 0.3,
            carbohydrates: 10,
            sugars: 4,
            fiber: 6.8,
            protein: 2.2,
            salt: 0.05
        }
    },
    {
        id: 'timian-frisk',
        name: 'Timian (frisk)',
        category: 'herb',
        tags: ['seasoning'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['frisk timian', 'timian frisk', 'fresh thyme', 'timiankviste'],
        emoji: '🌿',
        imageUrl: `${ASSETS}/timian-frisk.webp`,
        unitConversions: [{ unit: 'tsp', grams: 1 }],
        nutritionPer100g: {
            energyKcal: 101,
            fat: 1.7,
            saturatedFat: 0.5,
            carbohydrates: 14.9,
            sugars: 0,
            fiber: 14,
            protein: 5.6,
            salt: 0.2
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
        id: 'basilikum-frisk',
        name: 'Basilikum (frisk)',
        category: 'herb',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['frisk basilikum', 'basilikumblade', 'fresh basil', 'basil leaves'],
        emoji: '🌿',
        imageUrl: `${ASSETS}/basilikum-frisk.webp`,
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
        id: 'basilikum-torret',
        name: 'Basilikum (tørret)',
        category: 'herb',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['basilikum', 'tørret basilikum', 'basil', 'dried basil'],
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
        id: 'groenkaal',
        name: 'Grønkål',
        category: 'vegetable',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['grønkål', 'groenkaal', 'kale', 'curly kale', 'grønkålsblade'],
        emoji: '🥬',
        imageUrl: `${ASSETS}/groenkaal.webp`,
        nutritionPer100g: {
            energyKcal: 49,
            fat: 0.9,
            saturatedFat: 0.1,
            carbohydrates: 8.8,
            sugars: 2.3,
            fiber: 3.6,
            protein: 4.3,
            salt: 0.1
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
        id: 'ketchup',
        name: 'Ketchup',
        category: 'sauce',
        tags: ['sweet'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['ketchup', 'tomatketchup', 'tomato ketchup'],
        emoji: '🍅',
        imageUrl: `${ASSETS}/ketchup.webp`,
        unitConversions: [
            { unit: 'tsp', grams: 6 },
            { unit: 'tbsp', grams: 17 }
        ],
        nutritionPer100g: {
            energyKcal: 101,
            fat: 0.1,
            saturatedFat: 0,
            carbohydrates: 25,
            sugars: 22,
            fiber: 0.3,
            protein: 1,
            salt: 1.8
        }
    },
    {
        id: 'hvedemel',
        name: 'Hvedemel',
        category: 'grain',
        tags: [],
        dietaryProperties: ['vegan', 'vegetarian', 'lactose-free'],
        isStaple: true,
        aliases: ['mel', 'hvede', 'wheat flour', 'hvedemel'],
        emoji: '🌾',
        imageUrl: `${ASSETS}/hvedemel.webp`,
        unitConversions: [
            { unit: 'dl', grams: 60 },
            { unit: 'tbsp', grams: 9 },
            { unit: 'tsp', grams: 3 }
        ],
        nutritionPer100g: {
            energyKcal: 350,
            fat: 1.5,
            saturatedFat: 0.3,
            carbohydrates: 71,
            sugars: 0.5,
            fiber: 3.5,
            protein: 10,
            salt: 0.01
        }
    },
    {
        id: 'letmaelk',
        name: 'Letmælk',
        category: 'dairy',
        tags: [],
        dietaryProperties: ['vegetarian', 'gluten-free'],
        isStaple: true,
        aliases: ['letmælk', 'mælk 1,5%', '1,5% mælk'],
        emoji: '🥛',
        imageUrl: `${ASSETS}/letmaelk.webp`,
        unitConversions: [
            { unit: 'ml', grams: 1.03 },
            { unit: 'dl', grams: 103 },
            { unit: 'tsp', grams: 5.15 },
            { unit: 'tbsp', grams: 15.45 }
        ],
        nutritionPer100g: {
            energyKcal: 46,
            fat: 1.5,
            saturatedFat: 1.0,
            carbohydrates: 4.7,
            sugars: 4.7,
            fiber: 0,
            protein: 3.5,
            salt: 0.1
        }
    },
    {
        id: 'butter',
        name: 'Smør',
        category: 'dairy',
        tags: [],
        dietaryProperties: ['vegetarian', 'gluten-free'],
        isStaple: true,
        aliases: ['smør', 'saltet smør'],
        emoji: '🧈',
        imageUrl: `${ASSETS}/smoer.webp`,
        unitConversions: [
            { unit: 'tsp', grams: 5 },
            { unit: 'tbsp', grams: 15 }
        ],
        nutritionPer100g: {
            energyKcal: 740,
            fat: 82,
            saturatedFat: 52,
            carbohydrates: 0.7,
            sugars: 0.7,
            fiber: 0,
            protein: 0.6,
            salt: 1.2
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
        isStaple: false,
        aliases: ['mors favorit krydderi', 'mors favorit krydderiblanding', 'mors krydderiblanding', 'Mamas Favorit'],
        emoji: '🧂',
        imageUrl: `${ASSETS}/mors-favorit.webp`,
        homemade: {
            ingredients: [
                { ingredientId: 'soed-paprika', quantity: 2, unit: 'tsp' },
                { ingredientId: 'hvidloegspulver', quantity: 1, unit: 'tsp' },
                { ingredientId: 'salt', quantity: 1, unit: 'tsp' },
                { ingredientId: 'loegpulver', quantity: 0.5, unit: 'tsp' },
                { ingredientId: 'oregano-toerret', quantity: 0.5, unit: 'tsp' },
                { ingredientId: 'basilikum-torret', quantity: 0.5, unit: 'tsp' },
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
        id: 'mango',
        name: 'Mango',
        category: 'fruit',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['mangoer', 'mango frugt', 'mangos'],
        emoji: '🥭',
        imageUrl: `${ASSETS}/mango.webp`,
        nutritionPer100g: {
            energyKcal: 60,
            fat: 0.4,
            saturatedFat: 0.1,
            carbohydrates: 15,
            sugars: 13.7,
            fiber: 1.6,
            protein: 0.8,
            salt: 0.003
        }
    },
    {
        id: 'honning',
        name: 'Honning',
        category: 'other',
        dietaryProperties: ['vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['honning', 'flydende honning', 'honey'],
        emoji: '🍯',
        imageUrl: `${ASSETS}/honning.webp`,
        nutritionPer100g: {
            energyKcal: 304,
            fat: 0,
            saturatedFat: 0,
            carbohydrates: 82.4,
            sugars: 82.1,
            fiber: 0.2,
            protein: 0.3,
            salt: 0.004
        }
    },
    {
        id: 'olivenolie',
        name: 'Olivenolie',
        category: 'oil',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: true,
        aliases: ['olivenolie', 'extra virgin olivenolie', 'olive oil'],
        emoji: '🫒',
        imageUrl: `${ASSETS}/olivenolie.webp`,
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
        id: 'sej',
        name: 'Sej',
        category: 'fish',
        dietaryProperties: ['gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['sejfilet', 'sej filet', 'saithe', 'pollock'],
        emoji: '🐟',
        imageUrl: `${ASSETS}/sej.webp`,
        nutritionPer100g: {
            energyKcal: 82,
            fat: 0.9,
            saturatedFat: 0.2,
            carbohydrates: 0,
            sugars: 0,
            fiber: 0,
            protein: 18.3,
            salt: 0.3
        }
    },
    {
        id: 'zucchini',
        name: 'Zucchini',
        category: 'vegetable',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['squash', 'zucchini', 'courgette', 'zucchinier'],
        emoji: '🥒',
        imageUrl: `${ASSETS}/zucchini.webp`,
        nutritionPer100g: {
            energyKcal: 17,
            fat: 0.3,
            saturatedFat: 0.1,
            carbohydrates: 3.1,
            sugars: 2.5,
            fiber: 1,
            protein: 1.2,
            salt: 0.002
        }
    },
    {
        id: 'briocheburgerboller',
        name: 'Brioche burgerboller',
        category: 'grain',
        dietaryProperties: ['vegetarian'],
        isStaple: false,
        aliases: ['briocheboller', 'Brioche burgerbolle', 'brioche boller', 'brioche burgerboller', 'brioche buns', 'burgerboller'],
        emoji: '🍞',
        imageUrl: `${ASSETS}/briocheburgerboller.webp`,
        nutritionPer100g: {
            energyKcal: 330,
            fat: 8,
            saturatedFat: 4,
            carbohydrates: 52,
            sugars: 9,
            fiber: 2,
            protein: 9,
            salt: 1
        }
    },
    {
        id: 'porre',
        name: 'Porre',
        category: 'vegetable',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['porrer', 'leek'],
        emoji: '🥬',
        imageUrl: `${ASSETS}/porre.webp`,
        nutritionPer100g: {
            energyKcal: 61,
            fat: 0.3,
            saturatedFat: 0.04,
            carbohydrates: 14.2,
            sugars: 3.9,
            fiber: 1.8,
            protein: 1.5,
            salt: 0.05
        }
    },
    {
        id: 'soltoerrede-tomater',
        name: 'Soltørrede tomater',
        category: 'vegetable',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['soltørrede tomater', 'soltørret tomat', 'tørrede tomater', 'sun-dried tomatoes'],
        emoji: '🍅',
        imageUrl: `${ASSETS}/soltoerrede-tomater.webp`,
        nutritionPer100g: {
            energyKcal: 258,
            fat: 3,
            saturatedFat: 0.4,
            carbohydrates: 55.8,
            sugars: 37.6,
            fiber: 12.3,
            protein: 14.1,
            salt: 2.9
        }
    },
    {
        id: 'madlavningsfloede-15',
        name: 'Madlavningsfløde 15%',
        category: 'dairy',
        dietaryProperties: ['vegetarian', 'gluten-free'],
        isStaple: false,
        aliases: ['madlavningsfløde', 'cremefine 15%', 'fløde 15%', 'cooking cream 15%'],
        emoji: '🥛',
        imageUrl: `${ASSETS}/madlavningsfloede-15pct.webp`,
        unitConversions: [
            { unit: 'tbsp', grams: 15 },
            { unit: 'tsp', grams: 5 }
        ],
        nutritionPer100g: {
            energyKcal: 160,
            fat: 15,
            saturatedFat: 10,
            carbohydrates: 3.9,
            sugars: 3.9,
            fiber: 0,
            protein: 2.6,
            salt: 0.1
        }
    },
    {
        id: 'madlavningsfloede-8',
        name: 'Madlavningsfløde 8%',
        category: 'dairy',
        dietaryProperties: ['vegetarian', 'gluten-free'],
        isStaple: false,
        aliases: ['madlavningsfløde', 'cremefine 8%', 'fløde 8%', 'cooking cream 8%'],
        emoji: '🥛',
        imageUrl: `${ASSETS}/madlavningsfloede-8pct.webp`,
        unitConversions: [
            { unit: 'tbsp', grams: 15 },
            { unit: 'tsp', grams: 5 }
        ],
        nutritionPer100g: {
            energyKcal: 100,
            fat: 8,
            saturatedFat: 5.4,
            carbohydrates: 4.2,
            sugars: 4.2,
            fiber: 0,
            protein: 3,
            salt: 0.1
        }
    },
    {
        id: 'creme-fraiche-9',
        name: 'Cremefraiche 9%',
        category: 'dairy',
        dietaryProperties: ['vegetarian', 'gluten-free'],
        isStaple: false,
        aliases: ['creme fraiche 9%', 'cremefraiche', 'creme fraiche', 'cremefraiche 9 %'],
        emoji: '🥛',
        imageUrl: `${ASSETS}/creme-fraiche-9pct.webp`,
        unitConversions: [
            { unit: 'tbsp', grams: 15 },
            { unit: 'tsp', grams: 5 }
        ],
        nutritionPer100g: {
            energyKcal: 120,
            fat: 9,
            saturatedFat: 6,
            carbohydrates: 3.8,
            sugars: 3.8,
            fiber: 0,
            protein: 3,
            salt: 0.1
        }
    },
    {
        id: 'creme-fraiche-18',
        name: 'Cremefraiche 18%',
        category: 'dairy',
        dietaryProperties: ['vegetarian', 'gluten-free'],
        isStaple: false,
        aliases: ['creme fraiche 18%', 'cremefraiche', 'creme fraiche', 'cremefraiche 18 %'],
        emoji: '🥛',
        imageUrl: `${ASSETS}/creme-fraiche-18pct.webp`,
        unitConversions: [
            { unit: 'tbsp', grams: 15 },
            { unit: 'tsp', grams: 5 }
        ],
        nutritionPer100g: {
            energyKcal: 190,
            fat: 18,
            saturatedFat: 12,
            carbohydrates: 3.5,
            sugars: 3.5,
            fiber: 0,
            protein: 2.8,
            salt: 0.1
        }
    },
    {
        id: 'creme-fraiche-38',
        name: 'Cremefraiche 38%',
        category: 'dairy',
        dietaryProperties: ['vegetarian', 'gluten-free'],
        isStaple: false,
        aliases: ['creme fraiche 38%', 'cremefraiche', 'creme fraiche', 'cremefraiche 38 %'],
        emoji: '🥛',
        imageUrl: `${ASSETS}/creme-fraiche-38pct.webp`,
        unitConversions: [
            { unit: 'tbsp', grams: 15 },
            { unit: 'tsp', grams: 5 }
        ],
        nutritionPer100g: {
            energyKcal: 365,
            fat: 38,
            saturatedFat: 25,
            carbohydrates: 2.8,
            sugars: 2.8,
            fiber: 0,
            protein: 2.2,
            salt: 0.1
        }
    },
    {
        id: 'tagliatelle-frisk',
        name: 'Frisk tagliatelle',
        category: 'grain',
        dietaryProperties: ['vegetarian', 'lactose-free'],
        isStaple: false,
        aliases: ['tagliatelle', 'frisk pasta', 'friske tagliatelle', 'fresh tagliatelle'],
        emoji: '🍝',
        imageUrl: `${ASSETS}/tagliatelle-frisk.webp`,
        nutritionPer100g: {
            energyKcal: 280,
            fat: 2.5,
            saturatedFat: 0.6,
            carbohydrates: 54,
            sugars: 2.5,
            fiber: 2.5,
            protein: 11,
            salt: 0.1
        }
    },
    {
        id: 'dild-frisk',
        name: 'Dild (frisk)',
        category: 'herb',
        tags: [],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['frisk dild', 'dildtoppe', 'dildtopper', 'dill'],
        emoji: '🌿',
        imageUrl: `${ASSETS}/dild.webp`,
        unitConversions: [{ unit: 'sprig', grams: 1 }],
        nutritionPer100g: {
            energyKcal: 43,
            fat: 1.1,
            saturatedFat: 0.1,
            carbohydrates: 7,
            sugars: 0,
            fiber: 2.1,
            protein: 3.5,
            salt: 0.17
        }
    },
    {
        id: 'hvidvinseddike',
        name: 'Hvidvinseddike',
        category: 'sauce',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['hvidvinseddike', 'hvidvins eddike', 'eddike', 'white wine vinegar'],
        emoji: '🍾',
        imageUrl: `${ASSETS}/hvidvinseddike.webp`,
        unitConversions: [
            { unit: 'tbsp', grams: 15 },
            { unit: 'tsp', grams: 5 }
        ],
        nutritionPer100g: {
            energyKcal: 19,
            fat: 0,
            saturatedFat: 0,
            carbohydrates: 0.5,
            sugars: 0.4,
            fiber: 0,
            protein: 0,
            salt: 0.02
        }
    },
    {
        id: 'grov-sennep',
        name: 'Grov sennep',
        category: 'sauce',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['grov sennep', 'kornet sennep', 'wholegrain mustard'],
        emoji: '🟡',
        imageUrl: `${ASSETS}/grov-sennep.webp`,
        unitConversions: [
            { unit: 'tbsp', grams: 15 },
            { unit: 'tsp', grams: 5 }
        ],
        nutritionPer100g: {
            energyKcal: 150,
            fat: 8.5,
            saturatedFat: 0.5,
            carbohydrates: 8,
            sugars: 3.5,
            fiber: 4,
            protein: 8,
            salt: 3
        }
    },
    {
        id: 'rosmarin',
        name: 'Rosmarin',
        category: 'herb',
        tags: [],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['frisk rosmarin', 'rosmarinkviste', 'rosemary'],
        emoji: '🌿',
        imageUrl: `${ASSETS}/rosmarin.webp`,
        unitConversions: [{ unit: 'sprig', grams: 3 }],
        nutritionPer100g: {
            energyKcal: 131,
            fat: 5.9,
            saturatedFat: 2.8,
            carbohydrates: 20.7,
            sugars: 0,
            fiber: 14.1,
            protein: 3.3,
            salt: 0.06
        }
    },
    {
        id: 'aioli',
        name: 'Aioli',
        category: 'sauce',
        dietaryProperties: ['vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['hvidløgsmayo', 'hvidløgsmayonnaise', 'garlic mayo', 'garlic aioli'],
        emoji: '🧄',
        imageUrl: `${ASSETS}/aioli.webp`,
        unitConversions: [
            { unit: 'tbsp', grams: 15 },
            { unit: 'tsp', grams: 5 }
        ],
        nutritionPer100g: {
            energyKcal: 600,
            fat: 65,
            saturatedFat: 5.5,
            carbohydrates: 2.5,
            sugars: 1.5,
            fiber: 0,
            protein: 1.2,
            salt: 1.3
        }
    },
    {
        id: 'hoisinsauce',
        name: 'Hoisinsauce',
        category: 'sauce',
        dietaryProperties: ['vegetarian', 'lactose-free'],
        isStaple: false,
        aliases: ['hoisin', 'hoisin sauce'],
        emoji: '🥢',
        imageUrl: `${ASSETS}/hoisinsauce.webp`,
        unitConversions: [
            { unit: 'tbsp', grams: 18 },
            { unit: 'tsp', grams: 6 }
        ],
        nutritionPer100g: {
            energyKcal: 220,
            fat: 3,
            saturatedFat: 0.5,
            carbohydrates: 44,
            sugars: 28,
            fiber: 2,
            protein: 3,
            salt: 5
        }
    },
    {
        id: 'groenne-boenner',
        name: 'Grønne bønner',
        category: 'vegetable',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['haricots verts', 'fine bønner', 'bønner', 'snittebønner'],
        emoji: '🫛',
        imageUrl: `${ASSETS}/groenne-boenner.webp`,
        nutritionPer100g: {
            energyKcal: 31,
            fat: 0.2,
            saturatedFat: 0.1,
            carbohydrates: 4.5,
            sugars: 2,
            fiber: 3,
            protein: 1.8,
            salt: 0.01
        }
    },
    {
        id: 'majsstivelse',
        name: 'Majsstivelse',
        category: 'grain',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['maizena', 'majsmel', 'cornstarch', 'cornflour'],
        emoji: '🌽',
        imageUrl: `${ASSETS}/majsstivelse.webp`,
        unitConversions: [
            { unit: 'tbsp', grams: 8 },
            { unit: 'tsp', grams: 3 }
        ],
        nutritionPer100g: {
            energyKcal: 360,
            fat: 0.1,
            saturatedFat: 0,
            carbohydrates: 88,
            sugars: 0,
            fiber: 1,
            protein: 0.3,
            salt: 0.02
        }
    },
    {
        id: 'radiser',
        name: 'Radiser',
        category: 'vegetable',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['radise', 'radis', 'radishes'],
        emoji: '🌱',
        imageUrl: `${ASSETS}/radiser.webp`,
        nutritionPer100g: {
            energyKcal: 16,
            fat: 0.1,
            saturatedFat: 0,
            carbohydrates: 2,
            sugars: 1.9,
            fiber: 1.6,
            protein: 0.7,
            salt: 0.05
        }
    },
    {
        id: 'parmigiano-reggiano',
        name: 'Parmigiano Reggiano',
        category: 'dairy',
        dietaryProperties: ['gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['parmesan', 'parmesanost', 'parmigiano', 'revet parmesan'],
        emoji: '🧀',
        imageUrl: `${ASSETS}/parmigiano-reggiano.webp`,
        unitConversions: [
            { unit: 'tbsp', grams: 6 },
            { unit: 'dl', grams: 40 }
        ],
        nutritionPer100g: {
            energyKcal: 400,
            fat: 28,
            saturatedFat: 18,
            carbohydrates: 0,
            sugars: 0,
            fiber: 0,
            protein: 35,
            salt: 1.6
        }
    },
    {
        id: 'hakket-oksekoed',
        name: 'Hakket oksekød',
        category: 'meat',
        dietaryProperties: ['gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['hakket okse', 'oksekød hakket', 'hakkebøf', 'hakket kød'],
        emoji: '🥩',
        imageUrl: `${ASSETS}/hakket-oksekoed.webp`,
        nutritionPer100g: {
            energyKcal: 180,
            fat: 12,
            saturatedFat: 5,
            carbohydrates: 0,
            sugars: 0,
            fiber: 0,
            protein: 18,
            salt: 0.2
        }
    },
    {
        id: 'kyllingebrystfilet-bbq',
        name: 'Kyllingebrystfilet, BBQ-marineret',
        category: 'meat',
        dietaryProperties: ['lactose-free'],
        isStaple: false,
        aliases: ['bbq kylling', 'marineret kyllingebryst', 'bbq kyllingebryst', 'kyllingebrystfilet bbq'],
        emoji: '🍗',
        imageUrl: `${ASSETS}/kyllingbrystfilet-bbq-marineret.webp`,
        nutritionPer100g: {
            energyKcal: 130,
            fat: 2.5,
            saturatedFat: 0.7,
            carbohydrates: 6,
            sugars: 5,
            fiber: 0.3,
            protein: 20,
            salt: 1.2
        }
    },
    {
        id: 'svinekamfilet',
        name: 'Svinekamfilet',
        category: 'meat',
        dietaryProperties: ['gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['svinekam', 'svinefilet', 'kamfilet', 'svinekam uden ben'],
        emoji: '🥩',
        imageUrl: `${ASSETS}/svinekamfilet.webp`,
        nutritionPer100g: {
            energyKcal: 160,
            fat: 8,
            saturatedFat: 3,
            carbohydrates: 0,
            sugars: 0,
            fiber: 0,
            protein: 22,
            salt: 0.2
        }
    },
    {
        id: 'peberfrugt',
        name: 'Peberfrugt',
        category: 'vegetable',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['rød peberfrugt', 'gul peberfrugt', 'grøn peberfrugt', 'peberfrugter', 'bell pepper'],
        emoji: '🫑',
        imageUrl: `${ASSETS}/peberfrugt.webp`,
        nutritionPer100g: {
            energyKcal: 30,
            fat: 0.3,
            saturatedFat: 0.1,
            carbohydrates: 5,
            sugars: 4,
            fiber: 1.9,
            protein: 1,
            salt: 0.01
        }
    },
    {
        id: 'saltede-peanuts',
        name: 'Saltede peanuts',
        category: 'seed',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['peanuts', 'jordnødder', 'ristede peanuts', 'salted peanuts'],
        emoji: '🥜',
        imageUrl: `${ASSETS}/saltede-peanuts.webp`,
        unitConversions: [
            { unit: 'tbsp', grams: 10 },
            { unit: 'dl', grams: 65 }
        ],
        nutritionPer100g: {
            energyKcal: 610,
            fat: 52,
            saturatedFat: 8,
            carbohydrates: 11,
            sugars: 4,
            fiber: 8,
            protein: 26,
            salt: 1.5
        }
    },
    {
        id: 'tortillabroed-fuldkorn',
        name: 'Tortillabrød, fuldkorn',
        category: 'grain',
        dietaryProperties: ['vegan', 'vegetarian', 'lactose-free'],
        isStaple: false,
        aliases: ['tortilla', 'fuldkornstortilla', 'tortillas', 'wraps', 'fuldkornswrap'],
        emoji: '🫓',
        imageUrl: `${ASSETS}/tortillabroed-fuldkorn.webp`,
        nutritionPer100g: {
            energyKcal: 290,
            fat: 6,
            saturatedFat: 1,
            carbohydrates: 47,
            sugars: 2.5,
            fiber: 7,
            protein: 9,
            salt: 1.2
        }
    },
    {
        id: 'knoldselleri',
        name: 'Knoldselleri',
        category: 'vegetable',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['selleri', 'selleriknold', 'celeriac'],
        emoji: '🥔',
        imageUrl: `${ASSETS}/knoldselleri.webp`,
        nutritionPer100g: {
            energyKcal: 42,
            fat: 0.3,
            saturatedFat: 0.1,
            carbohydrates: 9,
            sugars: 1.6,
            fiber: 1.8,
            protein: 1.5,
            salt: 0.2
        }
    },
    {
        id: 'tomat',
        name: 'Tomat',
        category: 'vegetable',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['tomater', 'frisk tomat', 'tomato'],
        emoji: '🍅',
        imageUrl: `${ASSETS}/tomat.webp`,
        nutritionPer100g: {
            energyKcal: 18,
            fat: 0.2,
            saturatedFat: 0,
            carbohydrates: 3.5,
            sugars: 2.6,
            fiber: 1.2,
            protein: 0.9,
            salt: 0.01
        }
    },
    {
        id: 'cherrytomater',
        name: 'Cherrytomater',
        category: 'vegetable',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['cherrytomat', 'cherry tomater', 'cherry tomat', 'cocktailtomater', 'cherry tomatoes'],
        emoji: '🍅',
        imageUrl: `${ASSETS}/cherrytomater.webp`,
        nutritionPer100g: {
            energyKcal: 20,
            fat: 0.2,
            saturatedFat: 0,
            carbohydrates: 3.9,
            sugars: 3.1,
            fiber: 1.2,
            protein: 0.9,
            salt: 0.01
        }
    },
    {
        id: 'koriander',
        name: 'Koriander',
        category: 'herb',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['frisk koriander', 'korianderblade', 'coriander', 'cilantro'],
        emoji: '🌿',
        imageUrl: `${ASSETS}/koriander.webp`,
        nutritionPer100g: {
            energyKcal: 23,
            fat: 0.5,
            saturatedFat: 0,
            carbohydrates: 3.7,
            sugars: 0.9,
            fiber: 2.8,
            protein: 2.1,
            salt: 0.12
        }
    },
    {
        id: 'jalapeno',
        name: 'Jalapeño',
        category: 'vegetable',
        tags: ['spicy'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['jalapeno', 'jalapeños', 'jalapenos', 'grøn chili'],
        emoji: '🌶️',
        imageUrl: `${ASSETS}/jalapeno.webp`,
        nutritionPer100g: {
            energyKcal: 29,
            fat: 0.4,
            saturatedFat: 0.1,
            carbohydrates: 4,
            sugars: 4,
            fiber: 2.8,
            protein: 0.9,
            salt: 0.01
        }
    },
    {
        id: 'smaa-tortillabroed',
        name: 'Små tortillabrød',
        category: 'grain',
        dietaryProperties: ['vegan', 'vegetarian', 'lactose-free'],
        isStaple: false,
        aliases: ['små tortillas', 'tortillabrød', 'taco tortillas', 'små wraps', 'hvide tortillas'],
        emoji: '🫓',
        imageUrl: `${ASSETS}/smaa-tortillabroed.webp`,
        nutritionPer100g: {
            energyKcal: 300,
            fat: 7,
            saturatedFat: 1.2,
            carbohydrates: 50,
            sugars: 2.5,
            fiber: 3,
            protein: 8,
            salt: 1.3
        }
    },
    {
        id: 'rejer',
        name: 'Rejer',
        category: 'fish',
        dietaryProperties: ['gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['rejer pillede', 'pillede rejer', 'jumbo rejer', 'shrimp', 'kogte rejer', 'kogte koldvandsrejer'],
        emoji: '🦐',
        imageUrl: `${ASSETS}/rejer.webp`,
        nutritionPer100g: {
            energyKcal: 90,
            fat: 1,
            saturatedFat: 0.2,
            carbohydrates: 0,
            sugars: 0,
            fiber: 0,
            protein: 20,
            salt: 1.2
        }
    },
    {
        id: 'groen-pesto',
        name: 'Grøn pesto',
        category: 'sauce',
        dietaryProperties: ['vegetarian', 'gluten-free'],
        isStaple: false,
        aliases: ['pesto', 'basilikumpesto', 'pesto genovese', 'pesto verde', 'green pesto'],
        emoji: '🌿',
        imageUrl: `${ASSETS}/groen-pesto.webp`,
        unitConversions: [
            { unit: 'tbsp', grams: 15 },
            { unit: 'tsp', grams: 5 }
        ],
        nutritionPer100g: {
            energyKcal: 450,
            fat: 44,
            saturatedFat: 7,
            carbohydrates: 5,
            sugars: 2,
            fiber: 2,
            protein: 6,
            salt: 1.8
        }
    },
    {
        id: 'roed-pesto',
        name: 'Rød pesto',
        category: 'sauce',
        dietaryProperties: ['vegetarian', 'gluten-free'],
        isStaple: false,
        aliases: ['pesto rosso', 'tomatpesto', 'rød basilikumpesto', 'red pesto'],
        emoji: '🍅',
        imageUrl: `${ASSETS}/roed-pesto.webp`,
        unitConversions: [
            { unit: 'tbsp', grams: 15 },
            { unit: 'tsp', grams: 5 }
        ],
        nutritionPer100g: {
            energyKcal: 380,
            fat: 35,
            saturatedFat: 5,
            carbohydrates: 9,
            sugars: 6,
            fiber: 3,
            protein: 5,
            salt: 2.2
        }
    },
    {
        id: 'calabrese-pesto',
        name: 'Calabrese pesto',
        category: 'sauce',
        tags: ['spicy'],
        dietaryProperties: ['vegetarian', 'gluten-free'],
        isStaple: false,
        aliases: ['pesto calabrese', 'calabrese', 'pesto alla calabrese', 'rød pesto med chili', 'calabrian pesto'],
        emoji: '🌶️',
        imageUrl: `${ASSETS}/calabrese-pesto.webp`,
        unitConversions: [
            { unit: 'tbsp', grams: 15 },
            { unit: 'tsp', grams: 5 }
        ],
        nutritionPer100g: {
            energyKcal: 330,
            fat: 30,
            saturatedFat: 4.5,
            carbohydrates: 8,
            sugars: 5,
            fiber: 3,
            protein: 4,
            salt: 2
        }
    },
    {
        id: 'laurbaerblade',
        name: 'Laurbærblade',
        category: 'herb',
        tags: ['seasoning'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: true,
        aliases: ['laurbærblad', 'laurbær', 'laurbærblade tørrede', 'bay leaf', 'bay leaves'],
        emoji: '🍃',
        imageUrl: `${ASSETS}/laurbaerblade.webp`,
        nutritionPer100g: {
            energyKcal: 313,
            fat: 8.4,
            saturatedFat: 2.3,
            carbohydrates: 48,
            sugars: 0,
            fiber: 26,
            protein: 7.6,
            salt: 0.08
        }
    },
    {
        id: 'karry',
        name: 'Karry',
        category: 'spice',
        tags: ['seasoning'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: true,
        aliases: ['karrypulver', 'karry pulver', 'madras karry', 'curry', 'curry powder'],
        emoji: '🥘',
        imageUrl: `${ASSETS}/karry.webp`,
        unitConversions: [
            { unit: 'tsp', grams: 2.2 },
            { unit: 'tbsp', grams: 6.5 }
        ],
        nutritionPer100g: {
            energyKcal: 325,
            fat: 14,
            saturatedFat: 2.2,
            carbohydrates: 55,
            sugars: 2.8,
            fiber: 33,
            protein: 14,
            salt: 0.2
        }
    },
    {
        id: 'skinke-tern',
        name: 'Skinketern',
        category: 'meat',
        dietaryProperties: ['lactose-free'],
        isStaple: false,
        aliases: ['skinke', 'skinke i tern', 'skinketern', 'kogt skinke', 'diced ham'],
        emoji: '🍖',
        imageUrl: `${ASSETS}/skinke-tern.webp`,
        nutritionPer100g: {
            energyKcal: 110,
            fat: 3.5,
            saturatedFat: 1.2,
            carbohydrates: 1,
            sugars: 0.8,
            fiber: 0,
            protein: 19,
            salt: 2.2
        }
    },
    {
        id: 'skinke-strimler',
        name: 'Skinkestrimler',
        category: 'meat',
        dietaryProperties: ['lactose-free'],
        isStaple: false,
        aliases: ['skinke i strimler', 'skinkestrimler', 'strimlet skinke', 'ham strips'],
        emoji: '🍖',
        imageUrl: `${ASSETS}/skinke-strimler.webp`,
        nutritionPer100g: {
            energyKcal: 110,
            fat: 3.5,
            saturatedFat: 1.2,
            carbohydrates: 1,
            sugars: 0.8,
            fiber: 0,
            protein: 19,
            salt: 2.2
        }
    },
    {
        id: 'rosmarin-torret',
        name: 'Rosmarin, tørret',
        category: 'spice',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: true,
        aliases: ['tørret rosmarin', 'rosmarin tørret', 'dried rosemary'],
        emoji: '🌿',
        imageUrl: `${ASSETS}/rosmarin-torret.webp`,
        unitConversions: [
            { unit: 'tsp', grams: 1.2 },
            { unit: 'tbsp', grams: 3.6 }
        ],
        nutritionPer100g: {
            energyKcal: 331,
            fat: 15.2,
            saturatedFat: 7.4,
            carbohydrates: 21,
            sugars: 0,
            fiber: 42.6,
            protein: 4.9,
            salt: 0.1
        }
    },
    {
        id: 'middelhavsdroem-krydderiblanding',
        name: 'Middelhavsdrøm krydderiblanding',
        category: 'spice',
        tags: ['seasoning'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['middelhavsdrøm', 'middelhavskrydderi', 'middelhavskrydderiblanding', 'middelhavsdrøm krydderi'],
        emoji: '🧂',
        imageUrl: `${ASSETS}/middelhavsdrom-krydderiblanding.webp`,
        homemade: {
            ingredients: [
                { ingredientId: 'oregano-toerret', quantity: 2, unit: 'tbsp' },
                { ingredientId: 'basilikum-torret', quantity: 2, unit: 'tbsp' },
                { ingredientId: 'timian-toerret', quantity: 1, unit: 'tbsp' },
                { ingredientId: 'rosmarin-torret', quantity: 1, unit: 'tbsp', note: 'gerne let knust' },
                { ingredientId: 'soed-paprika', quantity: 2, unit: 'tbsp' },
                { ingredientId: 'hvidloegspulver', quantity: 1, unit: 'tbsp' },
                { ingredientId: 'loegpulver', quantity: 1, unit: 'tbsp' },
                { ingredientId: 'salt', quantity: 1, unit: 'tsp' },
                { ingredientId: 'peber', quantity: 0.5, unit: 'tsp', note: 'kværnet' },
                { ingredientId: 'chiliflager', quantity: 0.5, unit: 'tsp', note: 'kan udelades, hvis den ikke skal være stærk' }
            ],
            steps: [
                'Mål op: Mål alle ingredienserne af og kom dem i en lille skål.',
                'Bland: Rør blandingen godt rundt, så alle krydderierne fordeler sig jævnt.',
                'Opbevar: Hæld blandingen på et rent, lufttæt glas eller en krydderidåse. Holder sig op til 6 måneder, hvis den opbevares mørkt, tørt og køligt.'
            ]
        },
        unitConversions: [
            { unit: 'tsp', grams: 2 },
            { unit: 'tbsp', grams: 6 }
        ],
        nutritionPer100g: {
            energyKcal: 270,
            fat: 5,
            saturatedFat: 1,
            carbohydrates: 48,
            sugars: 10,
            fiber: 17,
            protein: 11,
            salt: 9
        }
    },
    {
        id: 'dijonsennep',
        name: 'Dijonsennep',
        category: 'sauce',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['dijon sennep', 'dijon', 'dijon mustard', 'fransk sennep'],
        emoji: '🟡',
        imageUrl: `${ASSETS}/dijonsennep.webp`,
        unitConversions: [
            { unit: 'tsp', grams: 5 },
            { unit: 'tbsp', grams: 15 }
        ],
        nutritionPer100g: {
            energyKcal: 66,
            fat: 3.6,
            saturatedFat: 0.2,
            carbohydrates: 5,
            sugars: 1,
            fiber: 3,
            protein: 4,
            salt: 4.5
        }
    },
    {
        id: 'sennep',
        name: 'Sennep',
        category: 'sauce',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['mellemskarp sennep', 'almindelig sennep', 'yellow mustard', 'mustard'],
        emoji: '🟡',
        imageUrl: `${ASSETS}/sennep.webp`,
        unitConversions: [
            { unit: 'tsp', grams: 5 },
            { unit: 'tbsp', grams: 15 }
        ],
        nutritionPer100g: {
            energyKcal: 70,
            fat: 3.5,
            saturatedFat: 0.2,
            carbohydrates: 6,
            sugars: 2,
            fiber: 3,
            protein: 4,
            salt: 4
        }
    },
    {
        id: 'soed-sennep',
        name: 'Sød sennep',
        category: 'sauce',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['sød sennep', 'svensk sennep', 'honningsennep', 'sweet mustard'],
        emoji: '🟡',
        imageUrl: `${ASSETS}/sod-sennep.webp`,
        unitConversions: [
            { unit: 'tsp', grams: 5 },
            { unit: 'tbsp', grams: 15 }
        ],
        nutritionPer100g: {
            energyKcal: 130,
            fat: 3,
            saturatedFat: 0.2,
            carbohydrates: 22,
            sugars: 19,
            fiber: 2,
            protein: 3,
            salt: 2.5
        }
    },
    {
        id: 'tex-mex',
        name: 'Tex Mex krydderiblanding',
        category: 'spice',
        tags: ['spicy', 'seasoning'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['tex mex', 'tex-mex', 'tex mex krydderi', 'taco krydderi', 'taco krydderiblanding', 'fajita krydderi'],
        emoji: '🧂',
        imageUrl: `${ASSETS}/tex-mex.webp`,
        unitConversions: [
            { unit: 'tsp', grams: 3 },
            { unit: 'tbsp', grams: 9 }
        ],
        homemade: {
            ingredients: [
                { ingredientId: 'soed-paprika', quantity: 2, unit: 'tsp' },
                { ingredientId: 'spidskommen', quantity: 1, unit: 'tsp', note: 'stødt' },
                { ingredientId: 'hvidloegspulver', quantity: 1, unit: 'tsp' },
                { ingredientId: 'loegpulver', quantity: 1, unit: 'tsp' },
                { ingredientId: 'oregano-toerret', quantity: 1, unit: 'tsp' },
                { ingredientId: 'salt', quantity: 1, unit: 'tsp' },
                { ingredientId: 'paprika', quantity: 0.5, unit: 'tsp', note: 'røget' },
                { ingredientId: 'chilipulver', quantity: 0.5, unit: 'tsp', note: 'justeres efter ønsket styrke' },
                { ingredientId: 'peber', quantity: 0.5, unit: 'tsp', note: 'friskkværnet' },
                { ingredientId: 'sukker', quantity: 0.25, unit: 'tsp', note: 'valgfrit' }
            ],
            steps: [
                'Bland: Hæld alle ingredienserne sammen i en lille skål eller et tomt krydderiglas.',
                'Ryst: Rør eller ryst blandingen godt sammen, så alle krydderierne er jævnt fordelt.',
                'Brug eller gem: Svarer til ca. 1 brev (500 g kød). Brug den til hakket oksekød, kylling, bønner eller bagte grøntsager. Holder sig op til 6 måneder i en lufttæt beholder.'
            ]
        },
        nutritionPer100g: {
            energyKcal: 230,
            fat: 6,
            saturatedFat: 1,
            carbohydrates: 38,
            sugars: 7,
            fiber: 14,
            protein: 10,
            salt: 20
        }
    },
    {
        id: 'cajun',
        name: 'Cajun',
        category: 'spice',
        tags: ['spicy', 'seasoning'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['cajun', 'cajun krydderi', 'cajunkrydderi', 'cajun spice', 'cajun seasoning', 'Cajun krydderiblanding'],
        emoji: '🧂',
        imageUrl: `${ASSETS}/cajun.webp`,
        unitConversions: [
            { unit: 'tsp', grams: 3 },
            { unit: 'tbsp', grams: 9 }
        ],
        nutritionPer100g: {
            energyKcal: 240,
            fat: 6,
            saturatedFat: 1,
            carbohydrates: 40,
            sugars: 7,
            fiber: 14,
            protein: 10,
            salt: 18
        }
    },
    {
        id: 'hjertesalat',
        name: 'Hjertesalat',
        category: 'vegetable',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['romaine', 'romainesalat', 'romaine salat', 'cosalat', 'romaine lettuce'],
        emoji: '🥬',
        imageUrl: `${ASSETS}/hjertesalat.webp`,
        unitConversions: [{ unit: 'pcs', grams: 150 }],
        nutritionPer100g: {
            energyKcal: 17,
            fat: 0.3,
            saturatedFat: 0.05,
            carbohydrates: 2.1,
            sugars: 1.2,
            fiber: 2.1,
            protein: 1.2,
            salt: 0.02
        }
    },
    {
        id: 'teriyakisauce',
        name: 'Teriyakisauce',
        category: 'sauce',
        dietaryProperties: ['vegan', 'vegetarian', 'lactose-free'],
        isStaple: false,
        aliases: ['teriyaki', 'teriyaki sauce', 'teriyakimarinade'],
        emoji: '🥢',
        imageUrl: `${ASSETS}/teriyakisauce.webp`,
        unitConversions: [
            { unit: 'tsp', grams: 6 },
            { unit: 'tbsp', grams: 18 },
            { unit: 'dl', grams: 110 }
        ],
        nutritionPer100g: {
            energyKcal: 110,
            fat: 0.1,
            saturatedFat: 0,
            carbohydrates: 24,
            sugars: 20,
            fiber: 0.2,
            protein: 3,
            salt: 6
        }
    },
    {
        id: 'vannamei-rejer',
        name: 'Vannamei rejer',
        category: 'fish',
        dietaryProperties: ['gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['vannamei', 'rå rejer', 'king prawns', 'rå jumbo rejer', 'raw shrimp'],
        emoji: '🦐',
        imageUrl: `${ASSETS}/vannamei-rejer.webp`,
        nutritionPer100g: {
            energyKcal: 85,
            fat: 0.8,
            saturatedFat: 0.2,
            carbohydrates: 0,
            sugars: 0,
            fiber: 0,
            protein: 19,
            salt: 0.7
        }
    },
    {
        id: 'tigerrejer',
        name: 'Tigerrejer',
        category: 'fish',
        dietaryProperties: ['gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['tiger rejer', 'black tiger', 'tiger prawns', 'rå tigerrejer'],
        emoji: '🦐',
        imageUrl: `${ASSETS}/tigerrejer.webp`,
        nutritionPer100g: {
            energyKcal: 85,
            fat: 0.8,
            saturatedFat: 0.2,
            carbohydrates: 0,
            sugars: 0,
            fiber: 0,
            protein: 19,
            salt: 0.7
        }
    },
    {
        id: 'roedkaal',
        name: 'Rødkål',
        category: 'vegetable',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['rødkålshoved', 'frisk rødkål', 'red cabbage'],
        emoji: '🥬',
        imageUrl: `${ASSETS}/rodkal.webp`,
        unitConversions: [{ unit: 'pcs', grams: 900 }],
        nutritionPer100g: {
            energyKcal: 31,
            fat: 0.2,
            saturatedFat: 0.03,
            carbohydrates: 5.5,
            sugars: 3.8,
            fiber: 2.1,
            protein: 1.4,
            salt: 0.05
        }
    },
    {
        id: 'roedkaal-skaaret',
        name: 'Rødkål, skåret',
        category: 'vegetable',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['skåret rødkål', 'snittet rødkål', 'strimlet rødkål', 'revet rødkål', 'shredded red cabbage'],
        emoji: '🥬',
        imageUrl: `${ASSETS}/rodkal-skaret.webp`,
        derivedFrom: { ingredientId: 'roedkaal', unit: 'pcs', yieldGrams: 750 },
        homemade: {
            ingredients: [{ ingredientId: 'roedkaal', quantity: 1, unit: 'pcs', note: 'hele hoved' }],
            steps: [
                'Fjern de yderste blade, og skyl kålhovedet.',
                'Skær kålhovedet i kvarte, og skær den hårde stok ud i midten.',
                'Læg kvartene med snitfladen nedad, og skær dem i tynde strimler (ca. 2-3 mm) med en skarp kniv, eller brug en mandolin eller foodprocessor.',
                'Ét kålhoved giver ca. 750 g skåret rødkål. Kan opbevares i en lufttæt beholder i køleskabet i 3-4 dage.'
            ]
        },
        nutritionPer100g: {
            energyKcal: 31,
            fat: 0.2,
            saturatedFat: 0.03,
            carbohydrates: 5.5,
            sugars: 3.8,
            fiber: 2.1,
            protein: 1.4,
            salt: 0.05
        }
    },
    {
        id: 'foraarsloeg',
        name: 'Forårsløg',
        category: 'vegetable',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['forårsløg', 'spring onion', 'scallion', 'grønne løg', 'spring onions'],
        emoji: '🧅',
        imageUrl: `${ASSETS}/forarslog.webp`,
        unitConversions: [{ unit: 'pcs', grams: 20 }],
        nutritionPer100g: {
            energyKcal: 32,
            fat: 0.2,
            saturatedFat: 0.03,
            carbohydrates: 5.5,
            sugars: 2.3,
            fiber: 2.6,
            protein: 1.8,
            salt: 0.02
        }
    },
    {
        id: 'sriracha',
        name: 'Sriracha chilisauce',
        category: 'sauce',
        tags: ['spicy'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['sriracha', 'sriracha sauce', 'sriracha hot chili sauce', 'hot chili sauce', 'stærk chilisauce'],
        emoji: '🌶️',
        imageUrl: `${ASSETS}/sriracha-chilisauce.webp`,
        unitConversions: [
            { unit: 'tsp', grams: 5 },
            { unit: 'tbsp', grams: 15 }
        ],
        nutritionPer100g: {
            energyKcal: 93,
            fat: 0.9,
            saturatedFat: 0.1,
            carbohydrates: 19,
            sugars: 15,
            fiber: 1.9,
            protein: 2,
            salt: 5
        }
    },
    {
        id: 'asiatisk-woksauce',
        name: 'Asiatisk woksauce',
        category: 'sauce',
        dietaryProperties: ['vegan', 'vegetarian', 'lactose-free'],
        isStaple: false,
        aliases: ['woksauce', 'wok sauce', 'asiatisk wok sauce', 'wok sauce asian style'],
        emoji: '🥢',
        imageUrl: `${ASSETS}/asiatisk-woksauce.webp`,
        unitConversions: [
            { unit: 'tsp', grams: 6 },
            { unit: 'tbsp', grams: 18 },
            { unit: 'dl', grams: 110 }
        ],
        nutritionPer100g: {
            energyKcal: 120,
            fat: 0.3,
            saturatedFat: 0.1,
            carbohydrates: 27,
            sugars: 22,
            fiber: 0.5,
            protein: 2.5,
            salt: 5.5
        }
    },
    {
        id: 'fennikel',
        name: 'Fennikel',
        category: 'vegetable',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['fennikelknold', 'fennikelløg', 'fennel', 'fennel bulb'],
        emoji: '🌿',
        imageUrl: `${ASSETS}/fennikel.webp`,
        unitConversions: [{ unit: 'pcs', grams: 250 }],
        nutritionPer100g: {
            energyKcal: 31,
            fat: 0.2,
            saturatedFat: 0,
            carbohydrates: 7,
            sugars: 3.9,
            fiber: 3.1,
            protein: 1.2,
            salt: 0.2
        }
    },
    {
        id: 'paere',
        name: 'Pære',
        category: 'fruit',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['pærer', 'pear', 'pears'],
        emoji: '🍐',
        imageUrl: `${ASSETS}/paere.webp`,
        unitConversions: [{ unit: 'pcs', grams: 170 }],
        nutritionPer100g: {
            energyKcal: 57,
            fat: 0.1,
            saturatedFat: 0,
            carbohydrates: 13.5,
            sugars: 9.8,
            fiber: 3.1,
            protein: 0.4,
            salt: 0
        }
    },
    {
        id: 'koreansk-bbq-sauce',
        name: 'Koreansk BBQ-sauce',
        category: 'sauce',
        dietaryProperties: ['vegan', 'vegetarian', 'lactose-free'],
        isStaple: false,
        aliases: ['korean bbq sauce', 'koreansk bbq', 'bulgogi sauce', 'bulgogisauce', 'bibigo bbq sauce'],
        emoji: '🍖',
        imageUrl: `${ASSETS}/koreansk-bbq-sauce.webp`,
        unitConversions: [
            { unit: 'tsp', grams: 6 },
            { unit: 'tbsp', grams: 18 }
        ],
        nutritionPer100g: {
            energyKcal: 150,
            fat: 1.5,
            saturatedFat: 0.2,
            carbohydrates: 31,
            sugars: 24,
            fiber: 1,
            protein: 2.5,
            salt: 5
        }
    },
    {
        id: 'koldroget-laks',
        name: 'Koldrøget laks',
        category: 'fish',
        dietaryProperties: ['gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['røget laks', 'koldrøget laks', 'laksemad', 'smoked salmon', 'cold smoked salmon', 'lox'],
        emoji: '🐟',
        imageUrl: `${ASSETS}/koldroget-laks.webp`,
        unitConversions: [{ unit: 'pcs', grams: 25 }],
        nutritionPer100g: {
            energyKcal: 180,
            fat: 11,
            saturatedFat: 2,
            carbohydrates: 0,
            sugars: 0,
            fiber: 0,
            protein: 20,
            salt: 2.8
        }
    },
    {
        id: 'varmroget-laks',
        name: 'Varmrøget laks',
        category: 'fish',
        dietaryProperties: ['gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['varmrøget laks', 'varmrøget laksefilet', 'hot smoked salmon', 'kiln roasted salmon'],
        emoji: '🐟',
        imageUrl: `${ASSETS}/varmroget-laks.webp`,
        unitConversions: [{ unit: 'pcs', grams: 125 }],
        nutritionPer100g: {
            energyKcal: 190,
            fat: 11,
            saturatedFat: 2.2,
            carbohydrates: 0,
            sugars: 0,
            fiber: 0,
            protein: 23,
            salt: 2.2
        }
    },
    {
        id: 'allehaande',
        name: 'Allehånde',
        category: 'spice',
        tags: ['seasoning'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: true,
        aliases: ['allehånde stødt', 'stødt allehånde', 'allspice', 'ground allspice', 'jamaica peber'],
        emoji: '🧂',
        imageUrl: `${ASSETS}/allehaande.webp`,
        unitConversions: [
            { unit: 'tsp', grams: 2 },
            { unit: 'tbsp', grams: 6 }
        ],
        nutritionPer100g: {
            energyKcal: 263,
            fat: 8.7,
            saturatedFat: 2.5,
            carbohydrates: 72,
            sugars: 0,
            fiber: 21,
            protein: 6.1,
            salt: 0.2
        }
    },
    {
        id: 'panamad-krydderiblanding',
        name: 'Panamad krydderiblanding',
        category: 'spice',
        tags: ['seasoning'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['panamad', 'panamad krydderi', 'panamad krydderier', 'panamad seasoning'],
        emoji: '🧂',
        imageUrl: `${ASSETS}/panamad-krydderiblanding.webp`,
        unitConversions: [
            { unit: 'tsp', grams: 3 },
            { unit: 'tbsp', grams: 9 }
        ],
        homemade: {
            ingredients: [
                { ingredientId: 'paprika', quantity: 0.5, unit: 'tsp' },
                { ingredientId: 'spidskommen', quantity: 0.5, unit: 'tsp' },
                { ingredientId: 'peber', quantity: 0.5, unit: 'tsp' },
                { ingredientId: 'allehaande', quantity: 0.5, unit: 'tsp' },
                { ingredientId: 'hvidloegspulver', quantity: 0.5, unit: 'tsp' },
                { ingredientId: 'loegpulver', quantity: 0.5, unit: 'tsp' },
                { ingredientId: 'salt', quantity: 0.5, unit: 'tsp' },
                { ingredientId: 'timian-toerret', quantity: 0.5, unit: 'tsp' },
                { ingredientId: 'oregano-toerret', quantity: 0.5, unit: 'tsp' }
            ],
            steps: [
                'Mål alle krydderierne af og kom dem i en lille skål eller et tomt krydderiglas.',
                'Rør eller ryst blandingen godt, så krydderierne fordeler sig jævnt.',
                'Brug blandingen med det samme eller opbevar den tørt og lufttæt.'
            ]
        },
        nutritionPer100g: {
            energyKcal: 210,
            fat: 4,
            saturatedFat: 0.7,
            carbohydrates: 40,
            sugars: 5,
            fiber: 12,
            protein: 9,
            salt: 22
        }
    },
    {
        id: 'graeskarkerner',
        name: 'Græskarkerner',
        category: 'seed',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['græskarkerne', 'græskar kerner', 'pumpkin seeds', 'pepitas'],
        emoji: '🌰',
        imageUrl: `${ASSETS}/graeskarkerner.webp`,
        unitConversions: [
            { unit: 'tsp', grams: 4 },
            { unit: 'tbsp', grams: 12 },
            { unit: 'dl', grams: 50 }
        ],
        nutritionPer100g: {
            energyKcal: 559,
            fat: 49,
            saturatedFat: 8.7,
            carbohydrates: 11,
            sugars: 1.4,
            fiber: 6,
            protein: 30,
            salt: 0.02
        }
    },
    {
        id: 'rucola',
        name: 'Rucola',
        category: 'vegetable',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['rucolasalat', 'rucola salat', 'ruccola', 'arugula', 'rocket'],
        emoji: '🥬',
        imageUrl: `${ASSETS}/rucola.webp`,
        unitConversions: [{ unit: 'dl', grams: 8 }],
        nutritionPer100g: {
            energyKcal: 25,
            fat: 0.7,
            saturatedFat: 0.1,
            carbohydrates: 3.7,
            sugars: 2,
            fiber: 1.6,
            protein: 2.6,
            salt: 0.07
        }
    },
    {
        id: 'ricotta',
        name: 'Ricotta',
        category: 'dairy',
        dietaryProperties: ['vegetarian', 'gluten-free'],
        isStaple: false,
        aliases: ['ricottaost', 'ricotta cheese'],
        emoji: '🧀',
        imageUrl: `${ASSETS}/ricotta.webp`,
        unitConversions: [
            { unit: 'tsp', grams: 5 },
            { unit: 'tbsp', grams: 15 },
            { unit: 'dl', grams: 100 }
        ],
        nutritionPer100g: {
            energyKcal: 150,
            fat: 11,
            saturatedFat: 7,
            carbohydrates: 3,
            sugars: 2.5,
            fiber: 0,
            protein: 8,
            salt: 0.2
        }
    },
    {
        id: 'allround-krydderi',
        name: 'Allround krydderi',
        category: 'spice',
        tags: ['seasoning'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['allround', 'all-round krydderi', 'allround krydderiblanding', 'universalkrydderi', 'all purpose seasoning'],
        emoji: '🧂',
        imageUrl: `${ASSETS}/allround-krydderi.webp`,
        unitConversions: [
            { unit: 'tsp', grams: 3 },
            { unit: 'tbsp', grams: 9 }
        ],
        nutritionPer100g: {
            energyKcal: 240,
            fat: 4,
            saturatedFat: 0.7,
            carbohydrates: 42,
            sugars: 6,
            fiber: 12,
            protein: 10,
            salt: 25
        }
    },
    {
        id: 'bacon-tern',
        name: 'Bacon i tern',
        category: 'meat',
        dietaryProperties: ['gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['baconterninger', 'bacon tern', 'baconstykker', 'diced bacon', 'bacon cubes', 'lardons'],
        emoji: '🥓',
        imageUrl: `${ASSETS}/bacon-tern.webp`,
        unitConversions: [
            { unit: 'tbsp', grams: 12 },
            { unit: 'dl', grams: 60 }
        ],
        nutritionPer100g: {
            energyKcal: 330,
            fat: 28,
            saturatedFat: 10,
            carbohydrates: 0.5,
            sugars: 0.5,
            fiber: 0,
            protein: 19,
            salt: 3.2
        }
    },
    {
        id: 'bacon-i-skiver',
        name: 'Bacon i skiver',
        category: 'meat',
        dietaryProperties: ['gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['bacon', 'baconskiver', 'baconstrimler', 'baconskive', 'bacon slices', 'sliced bacon', 'streaky bacon'],
        emoji: '🥓',
        imageUrl: `${ASSETS}/bacon-i-skiver.webp`,
        unitConversions: [{ unit: 'pcs', grams: 15 }],
        nutritionPer100g: {
            energyKcal: 330,
            fat: 28,
            saturatedFat: 10,
            carbohydrates: 0.5,
            sugars: 0.5,
            fiber: 0,
            protein: 19,
            salt: 3.2
        }
    },
    {
        id: 'bacon-stykke',
        name: 'Bacon i stykke',
        category: 'meat',
        dietaryProperties: ['gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['baconstykke', 'baconklump', 'stykke bacon', 'bacon block', 'slab bacon', 'bacon slab'],
        emoji: '🥓',
        imageUrl: `${ASSETS}/bacon-stykke.webp`,
        unitConversions: [{ unit: 'pcs', grams: 200 }],
        nutritionPer100g: {
            energyKcal: 330,
            fat: 28,
            saturatedFat: 10,
            carbohydrates: 0.5,
            sugars: 0.5,
            fiber: 0,
            protein: 19,
            salt: 3.2
        }
    },
    {
        id: 'balsamico',
        name: 'Balsamico',
        category: 'sauce',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: true,
        aliases: ['balsamicoeddike', 'balsamico eddike', 'balsamic', 'balsamic vinegar', 'aceto balsamico'],
        emoji: '🍇',
        imageUrl: `${ASSETS}/balsamico.webp`,
        unitConversions: [
            { unit: 'tsp', grams: 5 },
            { unit: 'tbsp', grams: 15 },
            { unit: 'dl', grams: 105 }
        ],
        nutritionPer100g: {
            energyKcal: 88,
            fat: 0,
            saturatedFat: 0,
            carbohydrates: 17,
            sugars: 15,
            fiber: 0,
            protein: 0.5,
            salt: 0.03
        }
    },
    {
        id: 'baguette',
        name: 'Baguette',
        category: 'grain',
        dietaryProperties: ['vegan', 'vegetarian', 'lactose-free'],
        isStaple: false,
        aliases: ['flutes', 'flûte', 'hvidt flutes', 'stenovnsbagt baguette', 'french bread'],
        emoji: '🥖',
        imageUrl: `${ASSETS}/baguette.webp`,
        unitConversions: [{ unit: 'pcs', grams: 250 }],
        nutritionPer100g: {
            energyKcal: 270,
            fat: 1.5,
            saturatedFat: 0.3,
            carbohydrates: 54,
            sugars: 2.5,
            fiber: 2.8,
            protein: 9,
            salt: 1.3
        }
    },
    {
        id: 'blandet-salat',
        name: 'Blandet salat',
        category: 'vegetable',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: [
            'salatmix',
            'salat mix',
            'blandede salater',
            'salat',
            'grøn salat',
            'mixed salad',
            'salad mix',
            'mixed greens',
            'salatblanding',
            'krøllet salat'
        ],
        emoji: '🥗',
        imageUrl: `${ASSETS}/blandet-salat.webp`,
        unitConversions: [{ unit: 'dl', grams: 15 }],
        nutritionPer100g: {
            energyKcal: 18,
            fat: 0.3,
            saturatedFat: 0.05,
            carbohydrates: 2.5,
            sugars: 1.2,
            fiber: 1.5,
            protein: 1.5,
            salt: 0.05
        }
    },
    {
        id: 'aerter',
        name: 'Ærter',
        category: 'vegetable',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['grønne ærter', 'frosne ærter', 'ærter frosne', 'peas'],
        emoji: '🫛',
        imageUrl: `${ASSETS}/aerter.webp`,
        nutritionPer100g: {
            energyKcal: 70,
            fat: 0.5,
            saturatedFat: 0.1,
            carbohydrates: 10,
            sugars: 4,
            fiber: 5,
            protein: 5.5,
            salt: 0.02
        }
    },
    {
        id: 'spaghetti',
        name: 'Spaghetti',
        category: 'grain',
        dietaryProperties: ['vegan', 'vegetarian', 'lactose-free'],
        isStaple: false,
        aliases: ['pasta', 'spaghetti tør', 'tør spaghetti'],
        emoji: '🍝',
        imageUrl: `${ASSETS}/spaghetti.webp`,
        nutritionPer100g: {
            energyKcal: 355,
            fat: 1.5,
            saturatedFat: 0.3,
            carbohydrates: 71,
            sugars: 3,
            fiber: 3.5,
            protein: 12.5,
            salt: 0.01
        }
    },
    {
        id: 'majs',
        name: 'Majs',
        category: 'vegetable',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['majskorn', 'sukkermajs', 'majs på dåse', 'corn'],
        emoji: '🌽',
        imageUrl: `${ASSETS}/majs.webp`,
        nutritionPer100g: {
            energyKcal: 90,
            fat: 1.4,
            saturatedFat: 0.2,
            carbohydrates: 17,
            sugars: 5,
            fiber: 2.5,
            protein: 3.2,
            salt: 0.3
        }
    },
    {
        id: 'majskolber',
        name: 'Majskolber',
        category: 'vegetable',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['majskolbe', 'majs på kolbe', 'corn on the cob'],
        emoji: '🌽',
        imageUrl: `${ASSETS}/majskolber.webp`,
        nutritionPer100g: {
            energyKcal: 86,
            fat: 1.2,
            saturatedFat: 0.2,
            carbohydrates: 17,
            sugars: 5,
            fiber: 2.7,
            protein: 3.3,
            salt: 0.02
        }
    },
    {
        id: 'kanel',
        name: 'Kanel',
        category: 'spice',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: true,
        aliases: ['stødt kanel', 'kanelstang', 'cinnamon'],
        emoji: '🟤',
        imageUrl: `${ASSETS}/kanel.webp`,
        unitConversions: [
            { unit: 'tsp', grams: 2.6 },
            { unit: 'tbsp', grams: 7.8 }
        ],
        nutritionPer100g: {
            energyKcal: 247,
            fat: 1.2,
            saturatedFat: 0.3,
            carbohydrates: 81,
            sugars: 2.2,
            fiber: 53,
            protein: 4,
            salt: 0.03
        }
    },
    {
        id: 'avocado',
        name: 'Avocado',
        category: 'fruit',
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['avokado'],
        emoji: '🥑',
        imageUrl: `${ASSETS}/avocado.webp`,
        unitConversions: [{ unit: 'pcs', grams: 150 }],
        nutritionPer100g: {
            energyKcal: 160,
            fat: 14.7,
            saturatedFat: 2.1,
            carbohydrates: 1.9,
            sugars: 0.7,
            fiber: 6.7,
            protein: 2,
            salt: 0.02
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
        aliases: ['champignoner', 'hvide champignoner', 'mushroom', 'mushrooms', 'white mushrooms', 'button mushrooms', 'svampe'],
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
        id: 'kyllingebrystrimler',
        name: 'Kyllingebrystfilet i strimler',
        category: 'meat',
        dietaryProperties: ['gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['kyllingebryststrimler', 'kyllingestrimler', 'kyllingefilet i strimler', 'chicken strips', 'chicken breast strips'],
        emoji: '🍗',
        imageUrl: `${ASSETS}/kyllingbryststrimler.webp`,
        derivedFrom: { ingredientId: 'kyllingebryst', unit: 'g', yieldGrams: 1 },
        homemade: {
            ingredients: [{ ingredientId: 'kyllingebryst', quantity: 1, unit: 'pcs', note: 'ca. 150 g pr. bryst' }],
            steps: ['Læg kyllingebrysten på et skærebræt, og skær den i skiver på langs.', 'Skær skiverne i strimler på ca. 1 cm i bredden.']
        },
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
        aliases: ['umami sauce', 'umami soy sauce', 'umami seasoning sauce', 'umami dressing'],
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
        aliases: ['hvide løjer og urter', 'hvidløg og urter', 'hvidløgskrydderi', 'garlic and herb seasoning', 'garlic herb seasoning'],
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
        aliases: ['stødt galangal', 'galangalpulver', 'galangarod', 'ground galangal', 'galangal powder', 'ground galangal root'],
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
        aliases: ['ga laksa', 'ga-laksa krydderi', 'ga-laksa krydderiblanding', 'laksa krydderi', 'laksa seasoning', 'laksa spice mix'],
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
        derivedFrom: { ingredientId: 'gulerod', unit: 'pcs', yieldGrams: 55 },
        homemade: {
            ingredients: [{ ingredientId: 'gulerod', quantity: 1, unit: 'pcs', note: 'skrællet' }],
            steps: [
                'Skær: Skær gulerodens ender af, og skær den i ca. 6 cm lange stykker.',
                'Skiver: Skær hvert stykke i tynde skiver på langs.',
                'Strimler: Stable skiverne, og skær dem i tynde strimler (ca. 2-3 mm).',
                'Brug: Én gulerod giver ca. 55 g julienne. Kan også rives på et grovt rivejern.'
            ]
        },
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
        id: 'mynte-frisk',
        name: 'Mynte (frisk)',
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
        id: 'estragon',
        name: 'Estragon',
        category: 'herb',
        tags: [],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        aliases: ['frisk estragon', 'estragonblade', 'tarragon'],
        emoji: '🌿',
        imageUrl: `${ASSETS}/estragon.webp`,
        unitConversions: [{ unit: 'sprig', grams: 2 }],
        nutritionPer100g: {
            energyKcal: 49,
            fat: 1.1,
            saturatedFat: 0.2,
            carbohydrates: 4.9,
            sugars: 0,
            fiber: 7,
            protein: 3.4,
            salt: 0.2
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
        name: 'Fint salt',
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
