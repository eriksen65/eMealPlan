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
        subtitle: 'med sprøde grøntsager og frisk mynte',
        emoji: '🍜',
        image: vietnamesiskeNudlerPhoto,
        description:
            'Sprøde nudler wokket med hakket svinekød, citrongræs, ingefær og chili, fyldt med sprøde grøntsager og toppet med en frisk mynte-salat.',
        baseServings: 2,
        timeEstimates: [
            { portions: 2, minMinutes: 15, maxMinutes: 20 },
            { portions: 4, minMinutes: 20, maxMinutes: 25 }
        ],
        tags: ['quick'],
        ingredients: [
            { ingredientId: 'udon-nudler', amount: 250, unit: 'g' },
            { ingredientId: 'hakket-svinekoed', amount: 300, unit: 'g', preparations: ['minced'] },
            { ingredientId: 'gulerod-julienne', amount: 100, unit: 'g' },
            { ingredientId: 'spidskaal', amount: 150, unit: 'g' },
            { ingredientId: 'sukkeraerter', amount: 100, unit: 'g' },
            { ingredientId: 'citrongraes', amount: 1, unit: 'pcs' },
            { ingredientId: 'ingefaerpure', amount: 1, unit: 'tbsp' },
            { ingredientId: 'ginger-ninja', amount: 1, unit: 'tbsp' },
            { ingredientId: 'chili', amount: 1, unit: 'pcs' },
            { ingredientId: 'soed-chilisauce', amount: 2, unit: 'tbsp' },
            { ingredientId: 'sojasauce', amount: 2, unit: 'tbsp' },
            { ingredientId: 'mynte', amount: 10, unit: 'g' },
            { ingredientId: 'citrusfrugt', amount: 1, unit: 'pcs' }
        ],
        steps: [
            { title: 'Kog nudlerne', instruction: 'Kog nudlerne efter anvisning på pakken.' },
            { title: 'Forbered grøntsagerne', instruction: 'Hak citrongræs og chili fint.' },
            { title: 'Brun svinekødet', instruction: 'Brun det hakkede svinekød i en wok.' },
            { title: 'Tilsæt krydderier', instruction: 'Tilsæt ingefærpuré, Ginger Ninja, citrongræs og chili, steg et par minutter.' },
            { title: 'Wok grøntsagerne', instruction: 'Tilsæt gulerod, spidskål og sukkerærter, og wok til de er sprøde-møre.' },
            { title: 'Smag til', instruction: 'Rør sojasauce og sød chilisauce i, og vend nudlerne med.' },
            { title: 'Lav salaten', instruction: 'Bland mynte med et skvæt citrus.' },
            { title: 'Server', instruction: 'Server nudlerne med kød, grøntsager og frisk mynte-salat ovenpå.' }
        ]
    }
];
