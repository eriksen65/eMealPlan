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
        id: 'ingefaerpure',
        name: 'Ingefærpuré',
        category: 'spice',
        tags: [],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        imageUrl: '🫚'
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
        id: 'ginger-ninja',
        name: 'Ginger Ninja',
        category: 'spice',
        tags: ['spicy', 'seasoning'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        imageUrl: '🧂'
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
        id: 'udon-nudler',
        name: 'Udon nudler, tørrede',
        category: 'grain',
        tags: [],
        dietaryProperties: ['vegan', 'vegetarian', 'lactose-free'],
        isStaple: false,
        imageUrl: '🍜'
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
        id: 'spidskaal',
        name: 'Spidskål, skåret',
        category: 'vegetable',
        tags: [],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        imageUrl: '🥬'
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
        id: 'sukkeraerter',
        name: 'Sukkerærter',
        category: 'vegetable',
        tags: ['sweet'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        imageUrl: '🫛'
    },
    {
        id: 'salt',
        name: 'Salt',
        category: 'spice',
        tags: ['seasoning'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: true,
        imageUrl: '🧂'
    },
    {
        id: 'peber',
        name: 'Peber',
        category: 'spice',
        tags: ['spicy', 'seasoning'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: true,
        imageUrl: '🌶️'
    },
    {
        id: 'hvidloeg',
        name: 'Hvidløg',
        category: 'vegetable',
        tags: [],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: true,
        imageUrl: '🧄'
    },
    {
        id: 'fiskesauce',
        name: 'Fiskesauce',
        category: 'sauce',
        tags: ['seasoning'],
        dietaryProperties: ['gluten-free', 'lactose-free'],
        isStaple: true,
        imageUrl: '🫙'
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
    },
    {
        id: 'hakket-oksekoed',
        name: 'Hakket oksekød',
        category: 'meat',
        tags: [],
        dietaryProperties: ['gluten-free', 'lactose-free'],
        isStaple: false,
        imageUrl: '🥩'
    },
    {
        id: 'loeg',
        name: 'Løg',
        category: 'vegetable',
        tags: ['sweet'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: true,
        imageUrl: '🧅'
    },
    {
        id: 'hakkede-tomater',
        name: 'Hakkede tomater, på dåse',
        category: 'vegetable',
        tags: ['sour'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: true,
        imageUrl: '🥫'
    },
    {
        id: 'spaghetti',
        name: 'Spaghetti',
        category: 'grain',
        tags: [],
        dietaryProperties: ['vegan', 'vegetarian', 'lactose-free'],
        isStaple: true,
        imageUrl: '🍝'
    },
    {
        id: 'parmesan',
        name: 'Parmesan',
        category: 'dairy',
        tags: ['seasoning'],
        dietaryProperties: ['vegetarian', 'gluten-free'],
        isStaple: true,
        imageUrl: '🧀'
    },
    {
        id: 'kyllingebryst',
        name: 'Kyllingebryst',
        category: 'meat',
        tags: [],
        dietaryProperties: ['gluten-free', 'lactose-free'],
        isStaple: false,
        imageUrl: '🍗'
    },
    {
        id: 'kokosmaelk',
        name: 'Kokosmælk',
        category: 'other',
        tags: ['sweet'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: true,
        imageUrl: '🥥'
    },
    {
        id: 'karrypasta',
        name: 'Karrypasta',
        category: 'sauce',
        tags: ['spicy', 'seasoning'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: true,
        imageUrl: '🍛'
    },
    {
        id: 'peberfrugt',
        name: 'Peberfrugt',
        category: 'vegetable',
        tags: ['sweet'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        imageUrl: '🫑'
    },
    {
        id: 'ris',
        name: 'Ris',
        category: 'grain',
        tags: [],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: true,
        imageUrl: '🍚'
    },
    {
        id: 'pizzadej',
        name: 'Pizzadej',
        category: 'grain',
        tags: [],
        dietaryProperties: ['vegan', 'vegetarian', 'lactose-free'],
        isStaple: false,
        imageUrl: '🫓'
    },
    {
        id: 'tomatsauce',
        name: 'Tomatsauce',
        category: 'sauce',
        tags: ['sour'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: true,
        imageUrl: '🍅'
    },
    {
        id: 'mozzarella',
        name: 'Mozzarella',
        category: 'dairy',
        tags: [],
        dietaryProperties: ['vegetarian', 'gluten-free'],
        isStaple: false,
        imageUrl: '🧀'
    },
    {
        id: 'pizzatopping',
        name: 'Pizzatopping',
        category: 'other',
        tags: [],
        dietaryProperties: ['vegetarian'],
        isStaple: false,
        imageUrl: '🍕'
    },
    {
        id: 'tacokrydderi',
        name: 'Tacokrydderi',
        category: 'spice',
        tags: ['spicy', 'seasoning'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: true,
        imageUrl: '🌮'
    },
    {
        id: 'tacoskaller',
        name: 'Tacoskaller',
        category: 'grain',
        tags: [],
        dietaryProperties: ['vegan', 'vegetarian', 'lactose-free'],
        isStaple: true,
        imageUrl: '🌮'
    },
    {
        id: 'salat',
        name: 'Salat',
        category: 'vegetable',
        tags: [],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        imageUrl: '🥬'
    },
    {
        id: 'tomat',
        name: 'Tomat',
        category: 'vegetable',
        tags: ['sour'],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        imageUrl: '🍅'
    },
    {
        id: 'ost',
        name: 'Ost',
        category: 'dairy',
        tags: [],
        dietaryProperties: ['vegetarian', 'gluten-free'],
        isStaple: true,
        imageUrl: '🧀'
    },
    {
        id: 'boef',
        name: 'Bøf',
        category: 'meat',
        tags: [],
        dietaryProperties: ['gluten-free', 'lactose-free'],
        isStaple: false,
        imageUrl: '🥩'
    },
    {
        id: 'kartofler',
        name: 'Kartofler',
        category: 'vegetable',
        tags: [],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: true,
        imageUrl: '🥔'
    },
    {
        id: 'smoer',
        name: 'Smør',
        category: 'dairy',
        tags: [],
        dietaryProperties: ['vegetarian', 'gluten-free'],
        isStaple: true,
        imageUrl: '🧈'
    },
    {
        id: 'groenne-boenner',
        name: 'Grønne bønner',
        category: 'vegetable',
        tags: [],
        dietaryProperties: ['vegan', 'vegetarian', 'gluten-free', 'lactose-free'],
        isStaple: false,
        imageUrl: '🫛'
    },
    {
        id: 'lasagneplader',
        name: 'Lasagneplader',
        category: 'grain',
        tags: [],
        dietaryProperties: ['vegan', 'vegetarian', 'lactose-free'],
        isStaple: true,
        imageUrl: '🍝'
    },
    {
        id: 'bechamelsauce',
        name: 'Bechamelsauce',
        category: 'sauce',
        tags: [],
        dietaryProperties: ['vegetarian'],
        isStaple: false,
        imageUrl: '🥣'
    }
];
