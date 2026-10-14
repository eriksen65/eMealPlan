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
    },
    {
        id: 'spaghetti-bolognese',
        title: 'Klassisk spaghetti bolognese',
        subtitle: 'med langtidssimret kødsovs',
        emoji: '🍝',
        description: 'En fyldig, langtidssimret kødsovs serveret over spaghetti kogt al dente.',
        baseServings: 2,
        timeEstimates: [
            { portions: 2, minMinutes: 20, maxMinutes: 25 },
            { portions: 4, minMinutes: 40, maxMinutes: 45 }
        ],
        tags: [],
        ingredients: [
            { ingredientId: 'hakket-oksekoed', amount: 500, unit: 'g', preparations: ['minced'] },
            { ingredientId: 'loeg', amount: 1, unit: 'pcs' },
            { ingredientId: 'hvidloeg', amount: 2, unit: 'pcs' },
            { ingredientId: 'hakkede-tomater', amount: 400, unit: 'g' },
            { ingredientId: 'spaghetti', amount: 400, unit: 'g' },
            { ingredientId: 'parmesan', amount: 30, unit: 'g', preparations: ['grated'], optional: true }
        ],
        steps: [
            { title: 'Hak løg og hvidløg', instruction: 'Hak løg og hvidløg.' },
            { title: 'Brun oksekødet', instruction: 'Brun det hakkede oksekød i en stor pande.' },
            { title: 'Tilsæt løg og hvidløg', instruction: 'Tilsæt løg og hvidløg, steg til det er blødt.' },
            { title: 'Simre sovsen', instruction: 'Rør de hakkede tomater i og lad simre i 25 minutter.' },
            { title: 'Kog spaghettien', instruction: 'Kog spaghettien efter anvisning på pakken.' },
            { title: 'Server', instruction: 'Server sovsen over spaghettien med parmesan.' }
        ]
    },
    {
        id: 'kyllingecurry',
        title: 'Cremet kyllingecurry',
        subtitle: 'med kokosmælk og ris',
        emoji: '🍛',
        description: 'En varmende kokoscurry med mørt kylling og sprøde grøntsager.',
        baseServings: 2,
        timeEstimates: [
            { portions: 2, minMinutes: 20, maxMinutes: 25 },
            { portions: 4, minMinutes: 35, maxMinutes: 40 }
        ],
        tags: ['quick'],
        ingredients: [
            { ingredientId: 'kyllingebryst', amount: 500, unit: 'g', preparations: ['diced'] },
            { ingredientId: 'kokosmaelk', amount: 1, unit: 'pcs' },
            { ingredientId: 'karrypasta', amount: 2, unit: 'tbsp' },
            { ingredientId: 'peberfrugt', amount: 1, unit: 'pcs', preparations: ['sliced'] },
            { ingredientId: 'ris', amount: 300, unit: 'g' }
        ],
        steps: [
            { title: 'Skær kyllingen', instruction: 'Skær kyllingen i mundrette stykker.' },
            { title: 'Steg karrypastaen', instruction: 'Steg karrypastaen et minuts tid i en varm pande.' },
            { title: 'Brun kyllingen', instruction: 'Tilsæt kylling og brun den på alle sider.' },
            { title: 'Simre curryen', instruction: 'Hæld kokosmælk i og lad simre i 15 minutter.' },
            { title: 'Tilsæt peberfrugt', instruction: 'Tilsæt skåret peberfrugt de sidste 5 minutter.' },
            { title: 'Server', instruction: 'Server med ris.' }
        ]
    },
    {
        id: 'hjemmelavet-pizza',
        title: 'Hjemmelavet pizza',
        subtitle: 'med din yndlingstopping',
        emoji: '🍕',
        description: 'Sprød hjemmebagt pizza med den topping, I bedst kan lide.',
        baseServings: 2,
        timeEstimates: [
            { portions: 2, minMinutes: 30, maxMinutes: 35 },
            { portions: 4, minMinutes: 55, maxMinutes: 60 }
        ],
        tags: ['kid-friendly'],
        ingredients: [
            { ingredientId: 'pizzadej', amount: 1, unit: 'pcs' },
            { ingredientId: 'tomatsauce', amount: 100, unit: 'g' },
            { ingredientId: 'mozzarella', amount: 200, unit: 'g' },
            { ingredientId: 'pizzatopping', amount: 150, unit: 'g', optional: true }
        ],
        steps: [
            { title: 'Forvarm ovnen', instruction: 'Forvarm ovnen til 250°C.' },
            { title: 'Rul dejen ud', instruction: 'Rul pizzadejen ud.' },
            { title: 'Smør tomatsauce på', instruction: 'Smør tomatsauce ud over dejen.' },
            { title: 'Fordel topping', instruction: 'Fordel mozzarella og topping.' },
            { title: 'Bag pizzaen', instruction: 'Bag i 10-12 minutter til den er gylden.' }
        ]
    },
    {
        id: 'tacos',
        title: 'Mexicanske tacos',
        subtitle: 'med krydret oksekød og frisk salsa',
        emoji: '🌮',
        description: 'Byg-selv-taco-aften med krydret oksekød og friske toppings.',
        baseServings: 2,
        timeEstimates: [
            { portions: 2, minMinutes: 15, maxMinutes: 20 },
            { portions: 4, minMinutes: 25, maxMinutes: 30 }
        ],
        tags: ['quick'],
        ingredients: [
            { ingredientId: 'hakket-oksekoed', amount: 400, unit: 'g', preparations: ['minced'] },
            { ingredientId: 'tacokrydderi', amount: 2, unit: 'tbsp' },
            { ingredientId: 'tacoskaller', amount: 8, unit: 'pcs' },
            { ingredientId: 'salat', amount: 50, unit: 'g', preparations: ['sliced'] },
            { ingredientId: 'tomat', amount: 1, unit: 'pcs', preparations: ['diced'] },
            { ingredientId: 'ost', amount: 50, unit: 'g', preparations: ['grated'] }
        ],
        steps: [
            { title: 'Brun oksekødet', instruction: 'Brun det hakkede oksekød i en pande.' },
            { title: 'Tilsæt tacokrydderi', instruction: 'Rør tacokrydderi og lidt vand i.' },
            { title: 'Lad simre', instruction: 'Lad simre i 5 minutter.' },
            { title: 'Varm tacoskallerne', instruction: 'Varm tacoskallerne.' },
            { title: 'Byg tacos', instruction: 'Lad alle bygge deres egne tacos.' }
        ]
    },
    {
        id: 'boef-med-kartofler',
        title: 'Bøf med kartofler',
        subtitle: 'og hjemmelavet bearnaise',
        emoji: '🥩',
        description: 'En simpel og mættende weekendmiddag.',
        baseServings: 2,
        timeEstimates: [
            { portions: 2, minMinutes: 20, maxMinutes: 25 },
            { portions: 4, minMinutes: 35, maxMinutes: 40 }
        ],
        tags: ['weekend'],
        ingredients: [
            { ingredientId: 'boef', amount: 4, unit: 'pcs' },
            { ingredientId: 'kartofler', amount: 800, unit: 'g' },
            { ingredientId: 'smoer', amount: 50, unit: 'g', preparations: ['melted'] },
            { ingredientId: 'groenne-boenner', amount: 300, unit: 'g' }
        ],
        steps: [
            { title: 'Tag bøfferne frem', instruction: 'Tag bøfferne frem, så de når stuetemperatur.' },
            { title: 'Kog kartoflerne', instruction: 'Kog kartoflerne.' },
            { title: 'Steg bøfferne', instruction: 'Steg bøfferne i smør.' },
            { title: 'Lad bøfferne hvile', instruction: 'Lad bøfferne hvile, tilbered de grønne bønner.' },
            { title: 'Anret og server', instruction: 'Anret og server.' }
        ]
    },
    {
        id: 'lasagne',
        title: 'Klassisk lasagne',
        subtitle: 'med oksekød og bechamelsauce',
        emoji: '🧆',
        description: 'Lag på lag af pasta, fyldig kødsovs og cremet bechamelsauce.',
        baseServings: 4,
        timeEstimates: [
            { portions: 4, minMinutes: 70, maxMinutes: 75 },
            { portions: 6, minMinutes: 85, maxMinutes: 90 }
        ],
        tags: ['weekend'],
        ingredients: [
            { ingredientId: 'hakket-oksekoed', amount: 500, unit: 'g', preparations: ['minced'] },
            { ingredientId: 'lasagneplader', amount: 12, unit: 'pcs' },
            { ingredientId: 'bechamelsauce', amount: 500, unit: 'ml' },
            { ingredientId: 'hakkede-tomater', amount: 400, unit: 'g' },
            { ingredientId: 'ost', amount: 150, unit: 'g', preparations: ['grated'] }
        ],
        steps: [
            { title: 'Tag oksekødet frem', instruction: 'Tag det hakkede oksekød ud af køleskabet.' },
            { title: 'Hak løg og hvidløg', instruction: 'Hak løg og hvidløg.' },
            { title: 'Start kødsovsen', instruction: 'Start kødsovsen.' },
            { title: 'Forvarm ovnen', instruction: 'Forvarm ovnen til 200°C.' },
            { title: 'Saml lasagnen', instruction: 'Saml lasagnen i lag.' },
            { title: 'Sæt lasagnen i ovnen', instruction: 'Sæt lasagnen i ovnen.' },
            { title: 'Tag lasagnen ud', instruction: 'Tag lasagnen ud af ovnen og lad den hvile.' }
        ]
    }
];
