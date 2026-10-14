import vietnamesiskeNudlerPhoto from '../assets/recipes/vietnamesiske-nudler.png';

export interface TimeEstimate {
    portions: number;
    minMinutes: number;
    maxMinutes: number;
}

export type Unit = 'g' | 'kg' | 'ml' | 'l' | 'tsp' | 'tbsp' | 'pcs' | 'clove' | 'pinch';

export type IngredientPreparation =
    | 'whole'
    | 'halved'
    | 'quartered'
    | 'sliced'
    | 'thinly-sliced'
    | 'chopped'
    | 'finely-chopped'
    | 'diced'
    | 'minced'
    | 'grated'
    | 'crushed'
    | 'peeled'
    | 'juiced'
    | 'melted';

export interface RecipeIngredient {
    ingredientId: string;
    amount: number;
    unit: Unit;
    preparations?: IngredientPreparation[];
    optional?: boolean;
}

export interface RecipeStep {
    title: string;
    instruction: string;

    tip?: string;
    image?: string;
}

/**
 * Meta attributes about a recipe that can't be derived from its other fields
 * (e.g. ingredient categories already imply protein/dish type, so those are
 * not repeated here as tags).
 */
export type RecipeTag = 'quick' | 'weekend' | 'kid-friendly' | 'meal-prep';

export interface MockRecipe {
    id: string;

    title: string;
    subtitle: string;
    description: string;

    emoji: string;

    /** Optional real photo; falls back to the emoji when not set. */
    image?: string;

    /** Number of servings the ingredient amounts are based on. */
    baseServings: number;

    timeEstimates: TimeEstimate[];

    tags: RecipeTag[];

    ingredients: RecipeIngredient[];

    steps: RecipeStep[];
}

export const MOCK_RECIPES: MockRecipe[] = [
    {
        id: 'vietnamesiske-nudler',
        title: 'Hurtige vietnamesiske nudler og hakket svinekød',
        subtitle: 'med frisk mynte salat',
        emoji: '🍜',
        image: vietnamesiskeNudlerPhoto,
        description: 'Sprøde nudler wokket med hakket svinekød, hvidløg og chili, toppet med en frisk mynte- og koriandersalat.',
        baseServings: 2,
        timeEstimates: [
            { portions: 2, minMinutes: 15, maxMinutes: 20 },
            { portions: 4, minMinutes: 20, maxMinutes: 25 }
        ],
        tags: ['quick'],
        ingredients: [
            { ingredientId: 'udon-nudler', amount: 250, unit: 'g' },
            { ingredientId: 'hakket-svinekoed', amount: 300, unit: 'g', preparations: ['minced'] },
            { ingredientId: 'hvidloeg', amount: 2, unit: 'pcs' },
            { ingredientId: 'chili', amount: 1, unit: 'pcs' },
            { ingredientId: 'fiskesauce', amount: 2, unit: 'tbsp' },
            { ingredientId: 'mynte', amount: 10, unit: 'g' },
            { ingredientId: 'koriander', amount: 10, unit: 'g' },
            { ingredientId: 'citrusfrugt', amount: 1, unit: 'pcs' },
            { ingredientId: 'foraarsloeg', amount: 2, unit: 'pcs' }
        ],
        steps: [
            { title: 'Kog nudlerne', instruction: 'Kog nudlerne efter anvisning på pakken.' },
            { title: 'Hak hvidløg og chili', instruction: 'Hak hvidløg og chili fint.' },
            { title: 'Brun svinekødet', instruction: 'Brun det hakkede svinekød i en wok.' },
            { title: 'Tilsæt hvidløg og chili', instruction: 'Tilsæt hvidløg og chili, steg et par minutter.' },
            { title: 'Smag til', instruction: 'Smag til med fiskesauce og lime.' },
            { title: 'Lav salaten', instruction: 'Bland mynte, koriander og forårsløg til salaten.' },
            { title: 'Server', instruction: 'Server nudlerne med kød og frisk salat ovenpå.' }
        ]
    }
];
