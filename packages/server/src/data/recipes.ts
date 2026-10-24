import type { PortionAmount, Recipe } from '@emealplan/domain';

const ASSETS = '/api/assets/recipes';
const NUDLER_ASSETS = `${ASSETS}/hurtige-vietnamesiske-nudler`;
const KOEDBOLLER_ASSETS = `${ASSETS}/svine-og-kalvekoedboller-i-logsauce`;
const LAKS_ASSETS = `${ASSETS}/ovnbagt-laks-i-karry-kokosmaelkssauce`;
const PANKO_ASSETS = `${ASSETS}/spicy-pankoblomkaal`;
const COQ_ASSETS = `${ASSETS}/coq-au-vin-pulled-chicken`;
const FISK_ASSETS = `${ASSETS}/gyldenstegte-fiskefrikadeller-og-remoulade`;
const TIKKA_ASSETS = `${ASSETS}/vegetarisk-tikka-masala`;
const KAALPOELSER_ASSETS = `${ASSETS}/ovnstegte-kaalpoelser-i-logsauce`;

/** Amounts for 2-6 portions, as listed on the recipe card. */
const portions = (amounts: number[]): PortionAmount[] => amounts.map((amount, i) => ({ portions: i + 2, amount }));

export const RECIPES: Recipe[] = [
    {
        id: 'vietnamesiske-nudler',
        title: 'Hurtige vietnamesiske nudler og hakket svinekød',
        subtitle: 'med sprøde grøntsager og frisk mynte',
        emoji: '🍜',
        image: `${NUDLER_ASSETS}/vietnamesiske-nudler.png`,
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
            { ingredientId: 'mynte-frisk', amount: 1, unit: 'sprig', scaling: { type: 'linear' } },
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
                image: `${NUDLER_ASSETS}/steps/step-1-kog-nudler.webp`
            },
            {
                title: 'Steg kød',
                durationMinutes: 7,
                instruction:
                    'Imens, riv citrongræs fint.\nFlæk chili, fjern kerner, og skær i tynde skiver.\nOpvarm olivenolie i en stor stegepande på middelhøj varme.\nSteg kød med Ginger Ninja under omrøring i 4-5 min, eller indtil det er brunet.\nHalver citrusfrugt.\nRiv mynte i mindre stykker.\nBland sukkerærter, gulerod, mynte, salt, olivenolie, og et skvæt citrusfrugtsaft i en stor skål.',
                vigtig: 'kød er færdigt, når der er uden antydning af rødt.',
                image: `${NUDLER_ASSETS}/steps/step-2-steg-kod.webp`
            },
            {
                title: 'Lav Sauce',
                durationMinutes: 3,
                instruction:
                    'Tilsæt sød chilisauce, citrongræs og ingefærpasta til stegepanden, og steg i 30 sek, eller indtil velduftende.\nSænk til middel varme.\nTilsæt nudler, sojasauce, sød chilisauce og pastavand, og vend det sammen.',
                tip: 'Undlad chilien, eller brug mindre, hvis du ikke er til stærk mad.',
                image: `${NUDLER_ASSETS}/steps/step-3-lav-sauce.webp`
            },
            {
                title: 'Server',
                durationMinutes: 2,
                instruction: 'Anret nudler og salat i dybe tallerkener.',
                image: `${NUDLER_ASSETS}/steps/step-4-server.webp`
            }
        ]
    },
    {
        id: 'svine-og-kalvekoedboller-i-logsauce',
        title: 'Svine- og kalvekødboller i løgsauce',
        subtitle: 'En version til børn, en til voksne',
        emoji: '🧆',
        image: `${ASSETS}/svine-og-kalvekoedboller-i-logsauce/svine-og-kalvekoedboller-i-logsauce.png`,
        description: '',
        baseServings: 2,
        timeEstimates: [
            { portions: 2, minMinutes: 25, maxMinutes: 30 },
            { portions: 4, minMinutes: 30, maxMinutes: 35 }
        ],
        tags: ['kid-friendly'],
        ingredients: [
            { ingredientId: 'hakket-svine-kalvekoed', amount: 250, unit: 'g', scaling: { type: 'linear' } },
            {
                ingredientId: 'broccoli',
                amount: 125,
                unit: 'g',
                scaling: { type: 'portions', amounts: portions([125, 200, 250, 325, 375]) }
            },
            { ingredientId: 'loeg', amount: 1, unit: 'pcs', scaling: { type: 'linear' } },
            { ingredientId: 'roedvinssauce', amount: 60, unit: 'g', scaling: { type: 'linear' } },
            { ingredientId: 'mors-favorit', amount: 4, unit: 'g', scaling: { type: 'linear' } },
            {
                ingredientId: 'rasp',
                amount: 25,
                unit: 'g',
                scaling: { type: 'portions', amounts: portions([25, 40, 50, 65, 75]) }
            },
            { ingredientId: 'gulerod', amount: 2, unit: 'pcs', scaling: { type: 'linear' } },
            { ingredientId: 'pastinak', amount: 1, unit: 'pcs', scaling: { type: 'linear' } },
            { ingredientId: 'kyllingfond', amount: 10, unit: 'g', scaling: { type: 'linear' } },
            {
                ingredientId: 'revet-gouda',
                amount: 25,
                unit: 'g',
                scaling: { type: 'portions', amounts: portions([25, 50, 50, 75, 75]) }
            },
            {
                ingredientId: 'kartofler',
                amount: 300,
                unit: 'g',
                scaling: { type: 'portions', amounts: portions([300, 375, 500, 675, 800]) }
            },
            {
                ingredientId: 'mayonnaise',
                amount: 25,
                unit: 'g',
                scaling: { type: 'portions', amounts: portions([25, 40, 50, 65, 75]) }
            },
            {
                ingredientId: 'olie',
                amount: 0.5,
                unit: 'tbsp',
                scaling: { type: 'portions', amounts: portions([0.5, 0.5, 1, 1, 1.5]) },
                displayName: 'Olie (til løg)'
            },
            { ingredientId: 'vand', amount: 1, unit: 'dl', scaling: { type: 'linear' }, displayName: 'Vand (til sauce)' },
            {
                ingredientId: 'salt',
                amount: 0.25,
                unit: 'tsp',
                scaling: { type: 'portions', amounts: portions([0.25, 0.5, 0.5, 0.75, 0.75]) },
                displayName: 'Salt (til grøntsager)'
            },
            {
                ingredientId: 'salt',
                amount: 0.5,
                unit: 'tsp',
                scaling: { type: 'portions', amounts: portions([0.5, 0.5, 1, 1, 1.5]) },
                displayName: 'Salt (til rodfrugter)'
            },
            {
                ingredientId: 'aeg',
                amount: 1,
                unit: 'pcs',
                scaling: { type: 'portions', amounts: portions([1, 1, 2, 2, 3]) },
                displayName: 'Æg (til kødboller)'
            },
            {
                ingredientId: 'salt',
                amount: 0.5,
                unit: 'tsp',
                scaling: { type: 'linear' },
                displayName: 'Salt (til kødboller)'
            },
            {
                ingredientId: 'olie',
                amount: 1,
                unit: 'tbsp',
                scaling: { type: 'portions', amounts: portions([1, 2, 2, 3, 3]) },
                displayName: 'Olie (til stegning)'
            }
        ],
        steps: [
            {
                title: 'Lav fritter',
                durationMinutes: 5,
                instruction:
                    'Forvarm ovnen til 240°C/220°C (varmluft).\nSkær gulerod, pastinak og kartofler (uskrællet) til 1 cm fritter.\nFordel på en bageplade med bagepapir. Dryp med en smule olivenolie, krydr med Mors Favorit, salt og et nip peber, og vend sammen.\nBag i ovnen i 25-35 min, eller indtil møre.',
                tip: 'Benyt flere bageplader, hvis der ikke er plads på en.',
                image: `${KOEDBOLLER_ASSETS}/steps/step-1-lav-fritter.png`
            },
            {
                title: 'Steg kødboller',
                durationMinutes: 10,
                instruction:
                    'Bland hakket svine- og kalvekød, æg, rasp og salt i en stor skål.\nForm fars til kødboller (5 pr. person).\nOpvarm olivenolie i en stegepande på middelhøj varme.\nSteg kødboller i 10-12 min, eller indtil gyldne og gennemstegte (sænk til middel varme, når de er brunet).\nOverfør til en tallerken, og hold varme.',
                vigtig: 'Kødbollerne er færdige, når kødet er gennemstegt og uden antydning af rødt.',
                image: `${KOEDBOLLER_ASSETS}/steps/step-2-steg-koedboller.png`
            },
            {
                title: 'Forbered grøntsager',
                durationMinutes: 3,
                instruction: 'Skær broccoli i buketter og stokken i 2 cm tern.\nSkær løg i tynde, halve skiver.',
                image: `${KOEDBOLLER_ASSETS}/steps/step-3-forbered-groentsager.png`
            },
            {
                title: 'Bag broccoli',
                durationMinutes: 2,
                instruction:
                    'Placer broccoli på en anden bageplade med bagepapir.\nDryp med en smule olivenolie, krydr med salt og et nip peber, og vend sammen, når fritterne har 12 min tilbage.\nBag i ovnen i 10-12 min, eller indtil møre.',
                image: `${KOEDBOLLER_ASSETS}/steps/step-4-bag-broccoli.png`
            },
            {
                title: 'Lav løgsauce',
                durationMinutes: 6,
                instruction:
                    'Opvarm olivenolie i samme stegepande på middel varme.\nSteg løg i 4-5 min, eller indtil bløde.\nTilsæt rødvinssauce, kyllingefond og vand, og lad simre i 2-3 min, eller indtil tyknet.\nDrys broccoli med gouda, når den har 5 min tilbage, og bag færdig i resterende tid.',
                image: `${KOEDBOLLER_ASSETS}/steps/step-5-lav-logsauce.png`
            },
            {
                title: 'Server',
                durationMinutes: 2,
                instruction:
                    'Anret fritter, broccoli og kødboller på tallerkener.\nTop kødboller med løgsauce på de voksnes tallerkener.\nServer med mayonnaise.',
                tip: 'Server eventuelt med ketchup til børnene.',
                image: `${KOEDBOLLER_ASSETS}/steps/step-6-server.png`
            }
        ]
    },
    {
        id: 'ovnbagt-laks-i-karry-kokosmaelkssauce',
        title: 'Ovnbagt laks i karry-kokosmælkssauce',
        subtitle: 'med sukkerærter og kartofler',
        emoji: '🐟',
        image: `${LAKS_ASSETS}/ovnbagt-laks-i-karry-kokosmaelkssauce.png`,
        description: '',
        baseServings: 2,
        timeEstimates: [
            { portions: 2, minMinutes: 30, maxMinutes: 35 },
            { portions: 4, minMinutes: 35, maxMinutes: 40 }
        ],
        tags: ['quick'],
        ingredients: [
            {
                ingredientId: 'laks',
                amount: 250,
                unit: 'g',
                scaling: { type: 'portions', amounts: portions([250, 375, 500, 625, 750]) }
            },
            {
                ingredientId: 'kartofler',
                amount: 500,
                unit: 'g',
                scaling: { type: 'portions', amounts: portions([500, 750, 1000, 1250, 1500]) }
            },
            { ingredientId: 'gulerod', amount: 2, unit: 'pcs', scaling: { type: 'linear' } },
            {
                ingredientId: 'fish-sauce',
                amount: 30,
                unit: 'g',
                scaling: { type: 'portions', amounts: portions([30, 45, 60, 75, 90]) }
            },
            {
                ingredientId: 'gul-karrypasta',
                amount: 20,
                unit: 'g',
                scaling: { type: 'linear' }
            },
            {
                ingredientId: 'kokosmaelk',
                amount: 180,
                unit: 'ml',
                scaling: { type: 'linear' }
            },
            {
                ingredientId: 'roedloeg',
                amount: 1,
                unit: 'pcs',
                scaling: { type: 'linear' }
            },
            {
                ingredientId: 'sukkeraerter',
                amount: 125,
                unit: 'g',
                scaling: { type: 'linear' }
            },
            {
                ingredientId: 'vand',
                amount: 1,
                unit: 'dl',
                scaling: { type: 'linear' },
                displayName: 'Vand (til sauce)'
            },
            { ingredientId: 'hvidloegsfed', amount: 1, unit: 'pcs', scaling: { type: 'linear' } },
            { ingredientId: 'salt', amount: 0.25, unit: 'tsp', scaling: { type: 'linear' }, displayName: 'Salt (til sauce)' },
            { ingredientId: 'salt', amount: 0.5, unit: 'tsp', scaling: { type: 'linear' }, displayName: 'Salt (til grøntsager)' },
            { ingredientId: 'salt', amount: 0.25, unit: 'tsp', scaling: { type: 'linear' }, displayName: 'Salt (til laks)' }
        ],
        steps: [
            {
                title: 'Forbered grøntsager',
                durationMinutes: 0,
                instruction:
                    'Forvarm ovnen til 240°C/220°C (varmluft).\nSkær kartofler (uskrællet) i 2 cm tern.\nSkær gulerod (uskrællet) i tynde, halve skiver.\nSkær løg i 1 cm både.',
                image: `${LAKS_ASSETS}/steps/step-1-forbered-groentsager.png`
            },
            {
                title: 'Bland gul karrysauce',
                durationMinutes: 0,
                instruction:
                    'Pres eller hak hvidløg fint.\nBland hvidløg, gul karrypasta, kokosmælk, fiskesauce, vand og salt i en kande eller skål.\nDup laks tør med køkkenrulle, og krydr med salt.\nSkær ender af sukkerærter.',
                image: `${LAKS_ASSETS}/steps/step-2-bland-gul-karrysauce.png`
            },
            {
                title: 'Bag grøntsager',
                durationMinutes: 35,
                instruction:
                    'Fordel kartofler, løg og gulerod i et stort ildfast fad.\nDryp med en smule olivenolie, krydr med salt og et nip peber, og vend sammen.\nBag i ovnen i 25-35 min, eller indtil møre.',
                vigtig: 'Sørg for at bruge et ildfast fad, hvis der ikke er plads på en bageplade.',
                image: `${LAKS_ASSETS}/steps/step-3-bag-groentsager.png`
            },
            {
                title: 'Top med laks',
                durationMinutes: 0,
                instruction: 'Top grøntsager med sukkerærter, når grøntsager har 10-12 tilbage.\nFordel laks med skindsiden nedad mellem grøntsager.',
                image: `${LAKS_ASSETS}/steps/step-4-top-med-laks.png`
            },
            {
                title: 'Tilsæt sauce',
                durationMinutes: 10,
                instruction: 'Top laks og grøntsager med gul karrysauce, og bag færdig i ovnen i 9-10 min, eller indtil gennemtilberedt.',
                tip: 'Laksen er færdig, når kødet er mat i midten.',
                image: `${LAKS_ASSETS}/steps/step-5-tilsaet-sauce.png`
            },
            {
                title: 'Server',
                durationMinutes: 0,
                instruction: 'Server det ildfaste fad direkte på bordet.',
                image: `${LAKS_ASSETS}/steps/step-6-server.png`
            }
        ]
    },
    {
        id: 'spicy-pankoblomkaal',
        title: 'Spicy pankoblomkål',
        subtitle: 'med søde fritter og cremet kålsalat',
        emoji: '🥦',
        image: `${PANKO_ASSETS}/spicy-pankoblomkaal.webp`,
        description: 'Spicy pankoblomkål med søde fritter, cremet kålsalat, sød chilisauce og sesammayonnaise.',
        baseServings: 2,
        timeEstimates: [
            { portions: 2, minMinutes: 30, maxMinutes: 35 },
            { portions: 4, minMinutes: 35, maxMinutes: 40 }
        ],
        tags: [],
        ingredients: [
            {
                ingredientId: 'ginger-ninja',
                amount: 5,
                unit: 'g',
                scaling: { type: 'portions', amounts: portions([5, 10, 10, 15, 15]) }
            },
            {
                ingredientId: 'sesammayonnaise',
                amount: 50,
                unit: 'g',
                scaling: { type: 'portions', amounts: portions([50, 75, 100, 125, 150]) }
            },
            {
                ingredientId: 'blomkaal',
                amount: 200,
                unit: 'g',
                scaling: { type: 'portions', amounts: portions([200, 400, 400, 600, 600]) }
            },
            {
                ingredientId: 'citrusfrugt',
                amount: 1,
                unit: 'pcs',
                scaling: { type: 'portions', amounts: portions([1, 1, 1, 2, 2]) }
            },
            {
                ingredientId: 'sojasauce',
                amount: 10,
                unit: 'ml',
                scaling: { type: 'portions', amounts: portions([10, 20, 20, 30, 30]) }
            },
            {
                ingredientId: 'sriracha-mayo',
                amount: 25,
                unit: 'g',
                scaling: { type: 'portions', amounts: portions([25, 40, 50, 65, 75]) }
            },
            {
                ingredientId: 'soed-kartoffel',
                amount: 450,
                unit: 'g',
                scaling: { type: 'portions', amounts: portions([450, 675, 900, 1125, 1350]) }
            },
            {
                ingredientId: 'snittet-kaalsalat',
                amount: 150,
                unit: 'g',
                scaling: { type: 'portions', amounts: portions([150, 300, 300, 450, 450]) }
            },
            {
                ingredientId: 'panko',
                amount: 50,
                unit: 'g',
                scaling: { type: 'portions', amounts: portions([50, 100, 100, 150, 150]) }
            },
            {
                ingredientId: 'soed-chilisauce',
                amount: 40,
                unit: 'g',
                scaling: { type: 'portions', amounts: portions([40, 80, 80, 120, 120]) }
            },
            {
                ingredientId: 'sukkeraerter',
                amount: 75,
                unit: 'g',
                scaling: { type: 'portions', amounts: portions([75, 75, 150, 150, 225]) }
            },
            {
                ingredientId: 'salt',
                amount: 0.25,
                unit: 'tsp',
                scaling: { type: 'portions', amounts: portions([0.25, 0.5, 0.5, 0.75, 0.75]) },
                displayName: 'Salt (til panering)'
            },
            {
                ingredientId: 'ketchup',
                amount: 1,
                unit: 'tbsp',
                scaling: { type: 'portions', amounts: portions([1, 2, 2, 3, 3]) },
                displayName: 'Ketchup (til panering)'
            }
        ],
        steps: [
            {
                title: 'Forbered råvarer',
                durationMinutes: 0,
                instruction: 'Forvarm ovnen til 240°C/220°C (varmluft).\nSkær sød kartoffel (uskrællet) i både.\nHalver citrusfrugt.',
                image: `${PANKO_ASSETS}/steps/step-1-forbered-raavarer.webp`
            },
            {
                title: 'Paner blomkål',
                durationMinutes: 0,
                instruction:
                    'Bland srirachamayonnaise, Ginger Ninja, ketchup, salt og et nip peber i en stor skål.\nTilsæt blomkål, og vend indtil helt dækket af dressing.\nTilsæt panko, og vend med blomkål.\nFordel på en bageplade med bagepapir, og drys med overskydende panering.',
                image: `${PANKO_ASSETS}/steps/step-2-paner-blomkaal.webp`
            },
            {
                title: 'Bag kartofler og blomkål',
                durationMinutes: 25,
                instruction:
                    'Fordel kartofler på en anden bageplade.\nDryp med en smule olivenolie, og krydr med et nip salt og peber.\nBag i ovnen i 20-30 min, eller indtil blomkålen er sprød og kartoflerne er møre.',
                image: `${PANKO_ASSETS}/steps/step-3-bag-kartofler.webp`
            },
            {
                title: 'Bland sauce',
                durationMinutes: 0,
                instruction: 'Imens, bland sød chilisauce, sojasauce og et skvæt citrusfrugtsaft i en lille skål.',
                image: `${PANKO_ASSETS}/steps/step-4-bland-sauce.webp`
            },
            {
                title: 'Bland kålsalat',
                durationMinutes: 0,
                instruction: 'Snit sukkerærter fint.\nBland snittet kålsalat, sukkerærter og halvdelen af sesammayonnaise i en skål.',
                image: `${PANKO_ASSETS}/steps/step-5-bland-kaalsalat.webp`
            },
            {
                title: 'Server',
                durationMinutes: 0,
                instruction:
                    'Anret kålsalat, kartofler og blomkål på tallerkener.\nTop blomkål med en smule sauce.\nServer med resterende sesammayonnaise og sauce.',
                image: `${PANKO_ASSETS}/steps/step-6-server.webp`
            }
        ]
    },
    {
        id: 'coq-au-vin-inspireret-pulled-chicken-med-hvidloegsmos-og-frisk-persille',
        title: "'Coq au vin'-inspireret pulled chicken",
        subtitle: 'med hvidløgsmos og frisk persille',
        description: "'Coq au vin'-inspireret pulled chicken med hvidløgsmos og frisk persille.",
        emoji: '🍗',
        image: `${COQ_ASSETS}/coq-au-vin-pulled-chicken.png`,
        baseServings: 2,
        timeEstimates: [
            { portions: 2, minMinutes: 35, maxMinutes: 40 },
            { portions: 4, minMinutes: 40, maxMinutes: 45 }
        ],
        tags: ['weekend'],
        ingredients: [
            {
                ingredientId: 'kyllingebryst',
                amount: 280,
                unit: 'g',
                scaling: {
                    type: 'portions',
                    amounts: [
                        { portions: 2, amount: 280 },
                        { portions: 4, amount: 550 }
                    ]
                }
            },
            {
                ingredientId: 'loeg',
                amount: 1,
                unit: 'pcs',
                scaling: { type: 'linear' }
            },
            {
                ingredientId: 'gulerod',
                amount: 1,
                unit: 'pcs',
                scaling: { type: 'linear' }
            },
            {
                ingredientId: 'champignon',
                amount: 100,
                unit: 'g',
                scaling: { type: 'linear' }
            },
            {
                ingredientId: 'hvidloegsfed',
                amount: 1,
                unit: 'clove',
                scaling: { type: 'linear' }
            },
            {
                ingredientId: 'kyllingebouillon',
                amount: 4,
                unit: 'g',
                scaling: { type: 'linear' }
            },
            {
                ingredientId: 'tomatpure',
                displayName: 'Tomatpuré, 1 dåse',
                amount: 1,
                unit: 'pcs',
                scaling: {
                    type: 'portions',
                    amounts: [
                        { portions: 2, amount: 1 },
                        { portions: 4, amount: 1 }
                    ]
                }
            },
            {
                ingredientId: 'hvide-loejer-og-urter',
                amount: 4,
                unit: 'g',
                scaling: { type: 'linear' }
            },
            {
                ingredientId: 'worcestershire-sauce',
                amount: 5,
                unit: 'ml',
                scaling: { type: 'linear' }
            },
            {
                ingredientId: 'roedvinssauce',
                amount: 60,
                unit: 'g',
                scaling: { type: 'linear' }
            },
            {
                ingredientId: 'bagekartoffel',
                amount: 500,
                unit: 'g',
                scaling: { type: 'linear' }
            },
            {
                ingredientId: 'bredbladet-persille',
                amount: 10,
                unit: 'g',
                scaling: { type: 'linear' }
            },
            {
                ingredientId: 'salt',
                displayName: 'Salt(Til kylling)',
                amount: 0.25,
                unit: 'tsp',
                scaling: { type: 'linear' }
            },
            {
                ingredientId: 'salt',
                displayName: 'Salt(Til hvidløgsmos)',
                amount: 0.5,
                unit: 'tsp',
                scaling: { type: 'linear' }
            },
            {
                ingredientId: 'salt',
                displayName: 'Salt(Til Sauce)',
                amount: 0.25,
                unit: 'tsp',
                scaling: { type: 'linear' }
            },
            {
                ingredientId: 'olie',
                displayName: 'Olivenolie',
                amount: 1,
                unit: 'tbsp',
                scaling: { type: 'linear' }
            },
            {
                ingredientId: 'letmaelk',
                amount: 3,
                unit: 'tbsp',
                scaling: { type: 'linear' }
            },
            {
                ingredientId: 'sukker',
                amount: 0.5,
                unit: 'tsp',
                scaling: { type: 'linear' }
            },
            {
                ingredientId: 'vand',
                displayName: 'Vand(Til sovs)',
                amount: 1,
                unit: 'dl',
                scaling: { type: 'linear' }
            },
            {
                ingredientId: 'butter',
                amount: 1,
                unit: 'tbsp',
                scaling: { type: 'linear' },
                optional: true
            },
            {
                ingredientId: 'peber',
                amount: 1,
                unit: 'pinch',
                scaling: { type: 'linear' }
            }
        ],
        steps: [
            {
                title: 'Bag kylling',
                durationMinutes: 19,
                instruction:
                    'Forvarm ovnen til 220°C/200°C (varmluft).\nOverfør kylling til en bageplade med bagepapir, og krydr med salt.\nBag i ovnen i 17-19 min, eller indtil gennemtilberedt.',
                tip: 'Kyllingen er færdig, når kødet er hvidt og uden antydning af rødt.',
                image: `${COQ_ASSETS}/steps/step-1-bag-kylling.png`
            },
            {
                title: 'Lav hvidløgsmos',
                durationMinutes: 13,
                instruction:
                    'Bring en stor gryde med saltet vand i kog.\nSkræl kartoffel, og skær i 2 cm tern. Skræl hvidløg.\nKog kartofler og hvidløg i 11-13 min, eller indtil de nemt kan deles med en kniv.\nHæld vand fra, og tilsæt mælk, salt og et nip peber.\nMos med en kartoffelmoser eller gaffel, og stil til side med låg på.',
                tip: 'Tilsæt en klat smør for en mere cremet mos.',
                image: `${COQ_ASSETS}/steps/step-2-lav-hvidloegsmos.png`
            },
            {
                title: 'Forbered grøntsager',
                durationMinutes: 0,
                instruction: 'Imens, hak gulerod (uskrællet) og løg fint.\nHak champignon groft.',
                image: `${COQ_ASSETS}/steps/step-3-forbered-groentsager.png`
            },
            {
                title: 'Steg grøntsager',
                durationMinutes: 8,
                instruction:
                    'Opvarm olivenolie i en stor stegepande på middel varme.\nSteg løg, gulerod og champignon med et nip salt i 6-8 min, eller indtil bløde.\nImens, træk kylling i strimler med to gafler.',
                image: `${COQ_ASSETS}/steps/step-4-steg-groentsager.png`
            },
            {
                title: 'Lav sauce',
                durationMinutes: 6,
                instruction:
                    'Tilsæt tomatpuré, sukker og Hvide Løjer & Urter til stegepanden med grøntsager, og steg i 1 min, eller indtil velduftende.\nTilsæt vand, Worcestershire sauce, kyllingebouillon, rødvinssauce og smør, og lad simre i 3-4 min.\nTilsæt kylling, salt og et nip peber, og lad simre i 1 min.\nHak persille groft.',
                image: `${COQ_ASSETS}/steps/step-5-lav-sauce.png`
            },
            {
                title: 'Server',
                durationMinutes: 0,
                instruction: 'Anret hvidløgsmos og kylling på tallerkener.\nTop med persille og peber.',
                image: `${COQ_ASSETS}/steps/step-6-server.png`
            }
        ]
    },
    {
        id: 'gyldenstegte-fiskefrikadeller-og-remoulade',
        title: 'Gyldenstegte fiskefrikadeller og remoulade',
        subtitle: 'med rodfrugtsfritter og æble-spinatsalat',
        description: 'Gyldenstegte fiskefrikadeller og remoulade med rodfrugtsfritter og æble-spinatsalat.',
        emoji: '🐟',
        image: `${FISK_ASSETS}/gyldenstegte-fiskefrikadeller-og-remoulade.webp`,
        baseServings: 2,
        timeEstimates: [
            { portions: 2, minMinutes: 30, maxMinutes: 35 },
            { portions: 4, minMinutes: 35, maxMinutes: 40 }
        ],
        tags: ['quick'],
        ingredients: [
            {
                ingredientId: 'gulerod',
                amount: 2,
                unit: 'pcs',
                scaling: { type: 'linear' }
            },
            {
                ingredientId: 'roedbede',
                amount: 2,
                unit: 'pcs',
                scaling: { type: 'linear' }
            },
            {
                ingredientId: 'pastinak',
                amount: 1,
                unit: 'pcs',
                scaling: { type: 'portions', amounts: portions([1, 2, 2]) }
            },
            {
                ingredientId: 'kuller',
                amount: 250,
                unit: 'g',
                scaling: { type: 'linear' }
            },
            {
                ingredientId: 'citronpeber',
                amount: 2,
                unit: 'g',
                scaling: { type: 'portions', amounts: portions([2, 4, 4]) }
            },
            {
                ingredientId: 'purloeg',
                displayName: 'Purløg (1 pose)',
                amount: 20,
                unit: 'g',
                scaling: { type: 'portions', amounts: portions([20, 20, 20]) }
            },
            {
                ingredientId: 'rasp',
                amount: 25,
                unit: 'g',
                scaling: { type: 'portions', amounts: portions([25, 40, 50]) }
            },
            {
                ingredientId: 'aeble',
                amount: 1,
                unit: 'pcs',
                scaling: { type: 'portions', amounts: portions([1, 2, 2]) }
            },
            {
                ingredientId: 'spinat',
                amount: 30,
                unit: 'g',
                scaling: { type: 'portions', amounts: portions([30, 60, 60]) }
            },
            {
                ingredientId: 'solsikkefroe',
                amount: 20,
                unit: 'g',
                scaling: { type: 'portions', amounts: portions([20, 40, 40]) }
            },
            {
                ingredientId: 'citron',
                amount: 1,
                unit: 'pcs',
                scaling: { type: 'portions', amounts: portions([1, 1, 1]) }
            },
            {
                ingredientId: 'remoulade',
                amount: 75,
                unit: 'g',
                scaling: { type: 'linear' }
            },
            {
                ingredientId: 'salt',
                displayName: 'Salt til grøntsager',
                amount: 0.5,
                unit: 'tsp',
                scaling: { type: 'portions', amounts: portions([0.5, 1, 1]) }
            },
            {
                ingredientId: 'olie',
                displayName: 'Olie til grøntsager',
                amount: 0.5,
                unit: 'tbsp',
                scaling: { type: 'portions', amounts: portions([0.5, 0.5, 1]) }
            },
            {
                ingredientId: 'salt',
                displayName: 'Salt til salat',
                amount: 0.25,
                unit: 'tsp',
                scaling: { type: 'portions', amounts: portions([0.25, 0.5, 0.5]) }
            },
            {
                ingredientId: 'salt',
                displayName: 'Salt til fiskefrikadeller',
                amount: 0.25,
                unit: 'tsp',
                scaling: { type: 'portions', amounts: portions([0.25, 0.5, 0.5]) }
            },
            {
                ingredientId: 'aeg',
                displayName: 'Æg til fiskefrikadeller',
                amount: 1,
                unit: 'pcs',
                scaling: { type: 'portions', amounts: portions([1, 1, 2]) }
            },
            {
                ingredientId: 'hvedemel',
                displayName: 'Mel til fiskefrikadeller',
                amount: 1,
                unit: 'tbsp',
                scaling: { type: 'portions', amounts: portions([1, 2, 2]) }
            },
            {
                ingredientId: 'olie',
                displayName: 'Olie til stegning',
                amount: 0.5,
                unit: 'tbsp',
                scaling: { type: 'portions', amounts: portions([0.5, 0.5, 1]) }
            }
        ],
        steps: [
            {
                title: 'Lav fritter',
                durationMinutes: 35,
                instruction:
                    'Forvarm ovnen til 240°C/220°C (varmluft).\nSkær gulerod, rødbede og pastinak (uskrællet) i 1 cm fritter. Fordel på en bageplade med bagepapir.\nDryp med en smule olivenolie, krydr med salt og et nip peber, og vend sammen.\nBag i ovnen i 25-35 min, eller indtil møre.',
                tip: 'Benyt flere bageplader, hvis der ikke er plads på én.',
                image: `${FISK_ASSETS}/steps/step-1-lav-fritter.png`
            },
            {
                title: 'Lav salat',
                durationMinutes: 0,
                instruction:
                    'Imens, skær æble i tynde, halve skiver.\nSkyl spinat.\nBland spinat, æble, olivenolie, salt og et nip peber i en mellemstor skål.',
                image: `${FISK_ASSETS}/steps/step-2-lav-salat.png`
            },
            {
                title: 'Lav fiskefars',
                durationMinutes: 0,
                instruction:
                    'Hak purløg fint.\nHak fisk fint på et andet skærebræt.\nBland fisk, purløg, citronpeber, æg, hvedemel, rasp, salt og et nip peber i en stor skål.\nForm fars til fiskefrikadeller (2-3 pr. person).',
                tip: 'Pas på med at lave fiskefrikadellerne for flade, så har de svært ved at hænge sammen.',
                image: `${FISK_ASSETS}/steps/step-3-lav-fiskefars.png`
            },
            {
                title: 'Steg fiskefrikadeller',
                durationMinutes: 6,
                instruction:
                    'Opvarm olivenolie i en stor stegepande på middelhøj varme.\nSteg fiskefrikadeller i 2-3 min på hver side, eller indtil gyldne og gennemstegte.',
                image: `${FISK_ASSETS}/steps/step-4-steg-fiskefrikadeller.png`
            },
            {
                title: 'Forbered citron',
                durationMinutes: 0,
                instruction: 'Imens, skær citron i både.',
                image: `${FISK_ASSETS}/steps/step-5-forbered-citron.png`
            },
            {
                title: 'Server',
                durationMinutes: 0,
                instruction:
                    'Anret fiskefrikadeller, fritter og salat på tallerkener.\nTop salat med solsikkefrø.\nServer med remoulade og citronbåde.',
                image: `${FISK_ASSETS}/steps/step-6-server.png`
            }
        ]
    },
    {
        id: 'vegetarisk-tikka-masala-med-bagt-aubergine-og-mild-mynte-raita',
        title: 'Vegetarisk tikka masala',
        subtitle: 'med bagt aubergine og mild mynte-raita',
        description: 'Vegetarisk tikka masala med bagt aubergine, basmatiris og mild mynte-raita.',
        emoji: '🍛',
        image: `${TIKKA_ASSETS}/vegetarisk-tikka-masala.png`,
        baseServings: 2,
        timeEstimates: [{ portions: 2, minMinutes: 25, maxMinutes: 35 }],
        tags: ['quick'],
        ingredients: [
            {
                ingredientId: 'aubergine',
                amount: 1,
                unit: 'pcs',
                scaling: { type: 'linear' }
            },
            {
                ingredientId: 'tomatpure',
                displayName: 'Tomatpuré, 1 dåse',
                amount: 1,
                unit: 'pcs',
                scaling: { type: 'linear' }
            },
            {
                ingredientId: 'tikka-masala-krydderi',
                amount: 30,
                unit: 'g',
                scaling: { type: 'linear' }
            },
            {
                ingredientId: 'basmatiris',
                amount: 150,
                unit: 'g',
                scaling: { type: 'linear' }
            },
            {
                ingredientId: 'ginger-ninja',
                amount: 5,
                unit: 'g',
                scaling: { type: 'linear' }
            },
            {
                ingredientId: 'mynte-frisk',
                amount: 25,
                unit: 'g',
                scaling: { type: 'linear' }
            },
            {
                ingredientId: 'agurk',
                amount: 1,
                unit: 'pcs',
                scaling: {
                    type: 'portions',
                    amounts: [
                        { portions: 2, amount: 1 },
                        { portions: 4, amount: 1 }
                    ]
                }
            },
            {
                ingredientId: 'groentsagsbouillon',
                amount: 4,
                unit: 'g',
                scaling: { type: 'linear' }
            },
            {
                ingredientId: 'loeg',
                amount: 1,
                unit: 'pcs',
                scaling: { type: 'linear' }
            },
            {
                ingredientId: 'kokosmaelk',
                amount: 200,
                unit: 'ml',
                scaling: { type: 'linear' }
            },
            {
                ingredientId: 'graesk-yoghurt',
                amount: 75,
                unit: 'g',
                scaling: { type: 'linear' }
            },
            {
                ingredientId: 'lime',
                amount: 0.5,
                unit: 'pcs',
                scaling: { type: 'linear' }
            },
            {
                ingredientId: 'mild-mahal-krydderi',
                amount: 4,
                unit: 'g',
                scaling: { type: 'linear' }
            },
            {
                ingredientId: 'hvidloegsfed',
                amount: 1,
                unit: 'clove',
                scaling: { type: 'linear' }
            },
            {
                ingredientId: 'vand',
                displayName: 'Vand til ris',
                amount: 3,
                unit: 'dl',
                scaling: { type: 'linear' }
            },
            {
                ingredientId: 'vand',
                displayName: 'Vand til sauce',
                amount: 0.5,
                unit: 'dl',
                scaling: { type: 'linear' }
            },
            {
                ingredientId: 'salt',
                displayName: 'Salt til ris',
                amount: 0.5,
                unit: 'tsp',
                scaling: { type: 'linear' }
            },
            {
                ingredientId: 'salt',
                displayName: 'Salt til aubergine',
                amount: 0.25,
                unit: 'tsp',
                scaling: { type: 'linear' }
            },
            {
                ingredientId: 'salt',
                displayName: 'Salt til sauce',
                amount: 0.25,
                unit: 'tsp',
                scaling: { type: 'linear' }
            },
            {
                ingredientId: 'salt',
                displayName: 'Salt til raita',
                amount: 0.5,
                unit: 'tsp',
                scaling: { type: 'linear' }
            },
            {
                ingredientId: 'sukker',
                amount: 0.25,
                unit: 'tsp',
                scaling: { type: 'linear' }
            },
            {
                ingredientId: 'olie',
                displayName: 'Olie til sauce',
                amount: 1,
                unit: 'tbsp',
                scaling: { type: 'linear' }
            }
        ],
        steps: [
            {
                title: 'Kog ris',
                durationMinutes: 20,
                instruction:
                    'Forvarm ovnen til 220°C/200°C (varmluft).\nBring vand i kog i en mellemstor gryde.\nTilsæt ris, halvdelen af Ginger Ninja og salt, og kog under låg på lav varme i 10 min.\nTag gryden af varmen, og lad hvile under låg i 10 min, eller indtil vandet er absorberet.',
                tip: 'Fjern ikke låget!',
                image: `${TIKKA_ASSETS}/steps/step-1-kog-ris.webp`
            },
            {
                title: 'Bag aubergine',
                durationMinutes: 30,
                instruction:
                    'Imens, skær aubergine i 2 cm tern. Fordel på en bageplade med bagepapir.\nDryp med en smule olivenolie, krydr med salt og et nip peber, og vend sammen.\nBag i ovnen i 25-30 min, eller indtil møre og let brunet.',
                image: `${TIKKA_ASSETS}/steps/step-2-bag-aubergine.webp`
            },
            {
                title: 'Forbered grøntsager',
                durationMinutes: 0,
                instruction:
                    'Imens, skær løg i tynde, halve skiver.\nSkær lime i både.\nPres eller hak hvidløg fint.\nHak mynte groft.\nSkær agurk i 1 cm tern.',
                image: `${TIKKA_ASSETS}/steps/step-3-forbered-groentsager.webp`
            },
            {
                title: 'Lav tikka masala',
                durationMinutes: 7,
                instruction:
                    'Opvarm olivenolie i en stor stegepande på middel varme.\nSteg løg i 2-3 min, eller indtil bløde.\nTilsæt hvidløg, Mild Mahal, resterende Ginger Ninja og grøntsagsbouillon, og steg videre i 1 min.\nTilsæt tomatpuré, tikka masala, vand, kokosmælk, salt, sukker, et nip peber og et skvæt limesaft, og lad simre i 2-3 min, eller indtil tyknet.',
                image: `${TIKKA_ASSETS}/steps/step-4-lav-tikka-masala.webp`
            },
            {
                title: 'Lav mynte-raita',
                durationMinutes: 0,
                instruction:
                    'Imens, bland agurk, mynte (gem lidt til anretning), yoghurt, salt og et skvæt limesaft i en skål.\nTilsæt bagt aubergine til stegepanden, og vend sammen.',
                tip: 'Spring mynten over, eller brug mindre, hvis du ikke er til smagen.',
                image: `${TIKKA_ASSETS}/steps/step-5-lav-mynte-raita.webp`
            },
            {
                title: 'Server',
                durationMinutes: 0,
                instruction:
                    "Anret ris i dybe tallerkener.\nTop med tikka masala.\nDrys med resterende mynte.\nServer med mynte-'raita' og resterende limebåde.",
                image: `${TIKKA_ASSETS}/steps/step-6-server.webp`
            }
        ]
    },
    {
        id: 'ovnstegte-kalpolser-i-logsauce',
        title: 'Ovnstegte kålpølser i løgsauce',
        subtitle: 'med hvidløgsmos og frisk æblesalat',
        description: 'Ovnstegte kålpølser i løgsauce med hvidløgsmos og frisk æblesalat.',
        emoji: '🌭',
        image: `${KAALPOELSER_ASSETS}/ovnstegte-kaalpoelser-i-logsauce.png`,
        baseServings: 2,
        timeEstimates: [
            { portions: 2, minMinutes: 25, maxMinutes: 30 },
            { portions: 4, minMinutes: 30, maxMinutes: 35 }
        ],
        tags: ['quick'],
        ingredients: [
            {
                ingredientId: 'citron',
                amount: 1,
                unit: 'pcs',
                scaling: { type: 'portions', amounts: portions([1, 1, 1]) }
            },
            {
                ingredientId: 'loeg',
                amount: 0.5,
                unit: 'pcs',
                scaling: { type: 'linear' }
            },
            {
                ingredientId: 'bagekartoffel',
                amount: 500,
                unit: 'g',
                scaling: { type: 'linear' }
            },
            {
                ingredientId: 'roedvinssauce',
                amount: 60,
                unit: 'g',
                scaling: { type: 'linear' }
            },
            {
                ingredientId: 'kaalblanding',
                amount: 150,
                unit: 'g',
                scaling: { type: 'linear' }
            },
            {
                ingredientId: 'sojasauce',
                amount: 25,
                unit: 'ml',
                scaling: { type: 'portions', amounts: portions([25, 25, 25]) }
            },
            {
                ingredientId: 'hvidloegsfed',
                amount: 1,
                unit: 'clove',
                scaling: { type: 'linear' }
            },
            {
                ingredientId: 'kaalpoelser',
                amount: 320,
                unit: 'g',
                scaling: { type: 'linear' }
            },
            {
                ingredientId: 'aeble',
                amount: 1,
                unit: 'pcs',
                scaling: { type: 'linear' }
            },
            {
                ingredientId: 'letmaelk',
                displayName: 'Mælk til mos',
                amount: 3,
                unit: 'tbsp',
                scaling: { type: 'linear' }
            },
            {
                ingredientId: 'salt',
                displayName: 'Salt til mos',
                amount: 0.5,
                unit: 'tsp',
                scaling: { type: 'linear' }
            },
            {
                ingredientId: 'olie',
                displayName: 'Olie til stegning',
                amount: 0.5,
                unit: 'tbsp',
                scaling: { type: 'linear' }
            },
            {
                ingredientId: 'hvedemel',
                displayName: 'Mel til sauce',
                amount: 0.5,
                unit: 'tbsp',
                scaling: { type: 'linear' }
            },
            {
                ingredientId: 'vand',
                displayName: 'Vand til sauce',
                amount: 2,
                unit: 'tbsp',
                scaling: { type: 'linear' }
            },
            {
                ingredientId: 'sukker',
                displayName: 'Sukker til sauce',
                amount: 0.5,
                unit: 'tsp',
                scaling: { type: 'linear' }
            },
            {
                ingredientId: 'olie',
                displayName: 'Olie til dressing',
                amount: 1,
                unit: 'tbsp',
                scaling: { type: 'linear' }
            },
            {
                ingredientId: 'salt',
                displayName: 'Salt til dressing',
                amount: 0.25,
                unit: 'tsp',
                scaling: { type: 'linear' }
            },
            {
                ingredientId: 'sukker',
                displayName: 'Sukker til dressing',
                amount: 0.25,
                unit: 'tsp',
                scaling: { type: 'linear' }
            }
        ],
        steps: [
            {
                title: 'Lav hvidløgsmos',
                durationMinutes: 13,
                instruction:
                    'Bring en stor gryde med saltet vand i kog.\nForvarm ovnen til 240°C/220°C (varmluft).\nSkræl kartofler, og skær i 2 cm tern. Skræl hvidløg.\nKog kartofler og hvidløg i 11-13 min, eller indtil de nemt kan deles med en kniv.\nHæld vand fra, og tilsæt mælk, salt og et nip peber.\nMos med en kartoffelmoser eller gaffel, og stil til side med låg på.',
                tip: 'Tilsæt en klat smør for en mere cremet mos.',
                image: `${KAALPOELSER_ASSETS}/steps/step-1-lav-hvidloegsmos.png`
            },
            {
                title: 'Bag kålpølser',
                durationMinutes: 15,
                instruction: 'Fordel kålpølser på en bageplade med bagepapir, og bag i ovnen i 15 min, eller indtil gyldne og gennemtilberedte.',
                image: `${KAALPOELSER_ASSETS}/steps/step-2-bag-kaalpoelser.png`
            },
            {
                title: 'Steg løg',
                durationMinutes: 6,
                instruction:
                    'Imens, skær løg i tynde, halve skiver.\nOpvarm olie i en stor stegepande på middel varme.\nSteg løg i 5-6 min, eller indtil bløde.',
                image: `${KAALPOELSER_ASSETS}/steps/step-3-steg-loeg.png`
            },
            {
                title: 'Lav sauce',
                durationMinutes: 5,
                instruction:
                    'Tilsæt hvedemel, og rør rundt.\nTilsæt rødvinssauce, sojasauce, vand og sukker, og lad simre i 3-5 min, eller indtil mørk og karamelliseret.',
                image: `${KAALPOELSER_ASSETS}/steps/step-4-lav-sauce.png`
            },
            {
                title: 'Lav salat',
                durationMinutes: 0,
                instruction:
                    'Imens, skær æble i tynde, halve skiver. Halver citron.\nBland citronsaft, olivenolie(olie), salt og sukker i en stor skål.\nBland æble og kålblanding i skålen med dressing lige inden servering.',
                image: `${KAALPOELSER_ASSETS}/steps/step-5-lav-salat.png`
            },
            {
                title: 'Server',
                durationMinutes: 0,
                instruction: 'Fordel kålpølser, hvidløgsmos og salat på tallerkener.\nTop kålpølser med løgsauce.',
                image: `${KAALPOELSER_ASSETS}/steps/step-6-server.png`
            }
        ]
    }
];
