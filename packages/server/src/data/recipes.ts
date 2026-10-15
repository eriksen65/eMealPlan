import type { Recipe } from '@emealplan/domain';

const ASSETS = '/api/assets/recipes';

export const RECIPES: Recipe[] = [
    {
        id: 'vietnamesiske-nudler',
        title: 'Hurtige vietnamesiske nudler og hakket svinekød',
        subtitle: 'med sprøde grøntsager og frisk mynte',
        emoji: '🍜',
        image: `${ASSETS}/hurtige-vietnamesiske-nudler/vietnamesiske-nudler.png`,
        description:
            'Sprøde nudler wokket med hakket svinekød, citrongræs, ingefær og chili, fyldt med sprøde grøntsager og toppet med en frisk gulerods- og mynte-salat.',
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
                    type: 'linear'
                }
            },
            { ingredientId: 'ingefaerpure', amount: 10, unit: 'g', scaling: { type: 'linear' } },
            { ingredientId: 'ginger-ninja', amount: 5, unit: 'g', scaling: { type: 'linear' } },
            { ingredientId: 'chili', amount: 0.5, unit: 'pcs', scaling: { type: 'linear' } },
            { ingredientId: 'soed-chilisauce', amount: 80, unit: 'g', scaling: { type: 'linear' } },
            { ingredientId: 'sojasauce', amount: 40, unit: 'ml', scaling: { type: 'linear' } },
            { ingredientId: 'mynte', amount: 1, unit: 'sprig', scaling: { type: 'linear' } },
            { ingredientId: 'citrusfrugt', amount: 1, unit: 'pcs', scaling: { type: 'linear' } },
            { ingredientId: 'olie', amount: 1, unit: 'tbsp', scaling: { type: 'linear' }, displayName: 'Olie (til salat)' },
            { ingredientId: 'olie', amount: 0.5, unit: 'tbsp', scaling: { type: 'linear' }, displayName: 'Olie (til stegning)' },
            { ingredientId: 'salt', amount: 0.25, unit: 'tsp', scaling: { type: 'linear' }, displayName: 'Salt (til salat)' },
            { ingredientId: 'kogevand', amount: 100, unit: 'ml', scaling: { type: 'linear' } }
        ],
        steps: [
            {
                title: 'Kog nudler',
                durationMinutes: 5,
                instruction:
                    'Bring en stor gryde med saltet vand i kog.\nKog nudlerne i 4-5 min, eller indtil de er bløde.\nGem lidt kogevand, og hæld resten fra.\nSkyl nudler under koldt vand i en si.',
                tip: 'Kogevandet skal være salt som havvand.',
                image: `${ASSETS}/hurtige-vietnamesiske-nudler/steps/step-1-kog-nudler.webp`
            },
            {
                title: 'Steg kød',
                durationMinutes: 7,
                instruction:
                    'Imens, riv citrongræs fint.\nFlæk chili, fjern kerner, og skær i tynde skiver.\nOpvarm olivenolie i en stor stegepande på middelhøj varme.\nSteg kød med Ginger Ninja under omrøring i 4-5 min, eller indtil det er brunet.\nHalver citrusfrugt.\nRiv mynte i mindre stykker.\nBland sukkerærter, gulerod, mynte, salt, olivenolie, og et skvæt citrusfrugtsaft i en stor skål.',
                vigtig: 'kød er færdigt, når der er uden antydning af rødt.',
                image: `${ASSETS}/hurtige-vietnamesiske-nudler/steps/step-2-steg-kod.webp`
            },
            {
                title: 'Lav Sauce',
                durationMinutes: 3,
                instruction:
                    'Tilsæt sød chilisauce, citrongræs og ingefærpasta til stegepanden, og steg i 30 sek, eller indtil velduftende.\nSænk til middel varme.\nTilsæt nudler, sojasauce, sød chilisauce og pastavand, og vend det sammen.',
                tip: 'Undlad chilien, eller brug mindre, hvis du ikke er til stærk mad.',
                image: `${ASSETS}/hurtige-vietnamesiske-nudler/steps/step-3-lav-sauce.webp`
            },
            {
                title: 'Server',
                durationMinutes: 2,
                instruction: 'Anret nudler og salat i dybe tallerkener.',
                image: `${ASSETS}/hurtige-vietnamesiske-nudler/steps/step-4-server.webp`
            }
        ]
    }
];
