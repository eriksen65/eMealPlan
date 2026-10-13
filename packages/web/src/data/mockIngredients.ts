export type IngredientCategory = 'vegetable' | 'fruit' | 'meat' | 'fish' | 'dairy' | 'grain' | 'spice' | 'herb' | 'sauce' | 'oil' | 'other';

export type IngredientTag = 'fresh' | 'frozen' | 'canned' | 'vegan' | 'vegetarian';

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
        tags: ['fresh'],
        isStaple: false,
        imageUrl: '🥩'
    },
    {
        id: 'ingefaerpure',
        name: 'Ingefærpuré',
        category: 'spice',
        tags: ['fresh'],
        isStaple: false,
        imageUrl: '🫚'
    },
    {
        id: 'citrongraes',
        name: 'Citrongræs',
        category: 'herb',
        tags: ['fresh'],
        isStaple: false,
        imageUrl: '🌿'
    },
    {
        id: 'chilipulver',
        name: 'Ginger Ninja',
        category: 'spice',
        isStaple: true,
        imageUrl: '🧂'
    },
    {
        id: 'soed-chilisauce',
        name: 'Sød chilisauce',
        category: 'sauce',
        isStaple: true,
        imageUrl: '🫙'
    },
    {
        id: 'sojasauce',
        name: 'Sojasauce',
        category: 'sauce',
        tags: ['vegan', 'vegetarian'],
        isStaple: true,
        imageUrl: '🍶'
    },
    {
        id: 'udon-nudler',
        name: 'Udon nudler, tørrede',
        category: 'grain',
        tags: ['vegan', 'vegetarian'],
        isStaple: true,
        imageUrl: '🍜'
    },
    {
        id: 'gulerod-julienne',
        name: 'Gulerod, julienne',
        category: 'vegetable',
        tags: ['fresh', 'vegan', 'vegetarian'],
        isStaple: false,
        imageUrl: '🥕'
    },
    {
        id: 'mynte',
        name: 'Mynte',
        category: 'herb',
        tags: ['fresh', 'vegan', 'vegetarian'],
        isStaple: false,
        imageUrl: '🌱'
    },
    {
        id: 'citrusfrugt',
        name: 'Citrusfrugt',
        category: 'fruit',
        tags: ['fresh', 'vegan', 'vegetarian'],
        isStaple: false,
        imageUrl: '🍋'
    },
    {
        id: 'spidskaal',
        name: 'Spidskål, skåret',
        category: 'vegetable',
        tags: ['fresh', 'vegan', 'vegetarian'],
        isStaple: false,
        imageUrl: '🥬'
    },
    {
        id: 'chili',
        name: 'Chili',
        category: 'vegetable',
        tags: ['fresh', 'vegan', 'vegetarian'],
        isStaple: false,
        imageUrl: '🌶️'
    },
    {
        id: 'sukkeraerter',
        name: 'Sukkerærter',
        category: 'vegetable',
        tags: ['fresh', 'vegan', 'vegetarian'],
        isStaple: false,
        imageUrl: '🫛'
    }
];
