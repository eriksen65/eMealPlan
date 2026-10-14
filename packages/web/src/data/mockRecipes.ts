import vietnamesiskeNudlerPhoto from '../assets/recipes/vietnamesiske-nudler.png';
import stepKogNudlerPhoto from '../assets/recipes/steps/step-1-kog-nudler.webp';
import stepStegKoedPhoto from '../assets/recipes/steps/step-2-steg-kod.webp';
import stepLavSaucePhoto from '../assets/recipes/steps/step-3-lav-sauce.webp';
import stepServerPhoto from '../assets/recipes/steps/step-4-server.webp';

export interface TimeEstimate {
    portions: number;
    minMinutes: number;
    maxMinutes: number;
}

export type Unit =
    | 'g' // gram
    | 'kg' // kilogram
    | 'ml' // milliliter
    | 'l' // liter
    | 'tsp' // teskefuld
    | 'tbsp' // spiseskefuld
    | 'pcs' // stykker
    | 'clove' // fed (fx hvidløgsfed)
    | 'pinch' // knivspids
    | 'sprig'; // kvist (fx en kvist timian eller mynte)

export interface PortionAmount {
    portions: number;
    amount: number;
}

export type IngredientScaling =
    | {
          type: 'linear';
      }
    | {
          type: 'portions';
          amounts: PortionAmount[];
      };

export interface RecipeIngredient {
    ingredientId: string;
    amount: number;
    unit: Unit;
    scaling: IngredientScaling;
    displayName?: string;
    optional?: boolean;
}

export interface RecipeStep {
    title: string;
    instruction: string;

    tip?: string;
    vigtig?: string;
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
            { ingredientId: 'udon-nudler', amount: 150, unit: 'g', scaling: { type: 'linear' } },
            { ingredientId: 'hakket-svinekoed', amount: 250, unit: 'g', scaling: { type: 'linear' } },
            { ingredientId: 'gulerod-julienne', amount: 50, unit: 'g', scaling: { type: 'linear' } },
            { ingredientId: 'spidskaal', amount: 75, unit: 'g', scaling: { type: 'linear' } },
            { ingredientId: 'sukkeraerter', amount: 125, unit: 'g', scaling: { type: 'linear' } },
            {
                ingredientId: 'citrongraes',
                amount: 0.5,
                unit: 'pcs',
                scaling: {
                    type: 'portions',
                    amounts: [
                        { portions: 3, amount: 1 },
                        { portions: 4, amount: 1 },
                        { portions: 5, amount: 1.5 },
                        { portions: 6, amount: 1.5 }
                    ]
                }
            },
            { ingredientId: 'ingefaerpure', amount: 10, unit: 'g', scaling: { type: 'linear' } },
            { ingredientId: 'ginger-ninja', amount: 5, unit: 'g', scaling: { type: 'linear' } },
            { ingredientId: 'chili', amount: 0.5, unit: 'pcs', scaling: { type: 'linear' } },
            { ingredientId: 'soed-chilisauce', amount: 80, unit: 'g', scaling: { type: 'linear' } },
            { ingredientId: 'sojasauce', amount: 40, unit: 'ml', scaling: { type: 'linear' } },
            { ingredientId: 'mynte', amount: 1, unit: 'sprig', scaling: { type: 'linear' } },
            { ingredientId: 'citrusfrugt', amount: 1, unit: 'pcs', scaling: { type: 'linear' } },
            { ingredientId: 'olie-til-salat', amount: 1, unit: 'tbsp', scaling: { type: 'linear' } },
            { ingredientId: 'olie-til-stegning', amount: 0.5, unit: 'tbsp', scaling: { type: 'linear' } },
            { ingredientId: 'salt-til-salat', amount: 0.25, unit: 'tsp', scaling: { type: 'linear' } },
            { ingredientId: 'kogevand', amount: 100, unit: 'ml', scaling: { type: 'linear' } }
        ],
        steps: [
            {
                title: 'Kog nudler',
                instruction:
                    'Bring en stor gryde med saltet vand i kog.\nKog nudlerne i 4-5 min, eller indtil de er bløde.\nGem lidt kogevand, og hæld resten fra.\nSkyl nudler under koldt vand i en si.',
                tip: 'Kogevandet skal være salt som havvand.',
                image: stepKogNudlerPhoto
            },
            {
                title: 'Steg kød',
                instruction:
                    'Imens, riv citrongræs fint.\nFlæk chili, fjern kerner, og skær i tynde skiver.\nOpvarm olivenolie i en stor stegepande på middelhøj varme.\nSteg kød med Ginger Ninja under omrøring i 4-5 min, eller indtil det er brunet.\nHalver citrusfrugt.\nRiv mynte i mindre stykker.\nBland sukkerærter, gulerod, mynte, salt, olivenolie, og et skvæt citrusfrugtsaft i en stor skål.',
                vigtig: 'kød er færdigt, når der er uden antydning af rødt.',
                image: stepStegKoedPhoto
            },
            {
                title: 'Lav Sauce',
                instruction:
                    'Tilsæt sød chilisauce, citrongræs og ingefærpasta til stegepanden, og steg i 30 sek, eller indtil velduftende.\nSænk til middel varme.\nTilsæt nudler, sojasauce, sød chilisauce og pastavand, og vend det sammen.',
                tip: 'Undlad chilien, eller brug mindre, hvis du ikke er til stærk mad.',
                image: stepLavSaucePhoto
            },
            {
                title: 'Server',
                instruction: 'Anret nudler og salat i dybe tallerkener.',
                image: stepServerPhoto
            }
        ]
    }
];
