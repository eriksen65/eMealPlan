import vietnamesiskeNudlerPhoto from '../assets/recipes/vietnamesiske-nudler.png';

export interface TimeEstimate {
    portions: number;
    minMinutes: number;
    maxMinutes: number;
}

export interface MockRecipe {
    id: string;
    title: string;
    subtitle: string;
    emoji: string;
    /** Optional real photo; falls back to the emoji when not set. */
    image?: string;
    description: string;
    timeEstimates: TimeEstimate[];
    tags: string[];
    ingredients: string[];
    steps: string[];
}

export const MOCK_RECIPES: MockRecipe[] = [
    {
        id: 'vietnamesiske-nudler',
        title: 'Hurtige vietnamesiske nudler og hakket svinekød',
        subtitle: 'med frisk mynte salat',
        emoji: '🍜',
        image: vietnamesiskeNudlerPhoto,
        description: 'Sprøde nudler wokket med hakket svinekød, hvidløg og chili, toppet med en frisk mynte- og koriandersalat.',
        timeEstimates: [
            { portions: 2, minMinutes: 15, maxMinutes: 20 },
            { portions: 4, minMinutes: 20, maxMinutes: 25 }
        ],
        tags: ['Svinekød', 'Hurtigt'],
        ingredients: [
            '250 g nudler',
            '300 g hakket svinekød',
            '2 fed hvidløg',
            '1 rød chili',
            '2 spsk fiskesauce',
            'Frisk mynte',
            'Frisk koriander',
            '1 lime',
            '2 forårsløg'
        ],
        steps: [
            'Kog nudlerne efter anvisning på pakken.',
            'Hak hvidløg og chili fint.',
            'Brun det hakkede svinekød i en wok.',
            'Tilsæt hvidløg og chili, steg et par minutter.',
            'Smag til med fiskesauce og lime.',
            'Bland mynte, koriander og forårsløg til salaten.',
            'Server nudlerne med kød og frisk salat ovenpå.'
        ]
    },
    {
        id: 'spaghetti-bolognese',
        title: 'Klassisk spaghetti bolognese',
        subtitle: 'med langtidssimret kødsovs',
        emoji: '🍝',
        description: 'En fyldig, langtidssimret kødsovs serveret over spaghetti kogt al dente.',
        timeEstimates: [
            { portions: 2, minMinutes: 20, maxMinutes: 25 },
            { portions: 4, minMinutes: 40, maxMinutes: 45 }
        ],
        tags: ['Pasta', 'Oksekød'],
        ingredients: ['500 g hakket oksekød', '1 løg', '2 fed hvidløg', '400 g hakkede tomater', '400 g spaghetti', 'Parmesan til servering'],
        steps: [
            'Hak løg og hvidløg.',
            'Brun det hakkede oksekød i en stor pande.',
            'Tilsæt løg og hvidløg, steg til det er blødt.',
            'Rør de hakkede tomater i og lad simre i 25 minutter.',
            'Kog spaghettien efter anvisning på pakken.',
            'Server sovsen over spaghettien med parmesan.'
        ]
    },
    {
        id: 'kyllingecurry',
        title: 'Cremet kyllingecurry',
        subtitle: 'med kokosmælk og ris',
        emoji: '🍛',
        description: 'En varmende kokoscurry med mørt kylling og sprøde grøntsager.',
        timeEstimates: [
            { portions: 2, minMinutes: 20, maxMinutes: 25 },
            { portions: 4, minMinutes: 35, maxMinutes: 40 }
        ],
        tags: ['Kylling', 'Hurtigt'],
        ingredients: ['500 g kyllingebryst', '1 dåse kokosmælk', '2 spsk karrypasta', '1 peberfrugt', 'Ris til servering'],
        steps: [
            'Skær kyllingen i mundrette stykker.',
            'Steg karrypastaen et minuts tid i en varm pande.',
            'Tilsæt kylling og brun den på alle sider.',
            'Hæld kokosmælk i og lad simre i 15 minutter.',
            'Tilsæt skåret peberfrugt de sidste 5 minutter.',
            'Server med ris.'
        ]
    },
    {
        id: 'hjemmelavet-pizza',
        title: 'Hjemmelavet pizza',
        subtitle: 'med din yndlingstopping',
        emoji: '🍕',
        description: 'Sprød hjemmebagt pizza med den topping, I bedst kan lide.',
        timeEstimates: [
            { portions: 2, minMinutes: 30, maxMinutes: 35 },
            { portions: 4, minMinutes: 55, maxMinutes: 60 }
        ],
        tags: ['Vegetar', 'Børnevenligt'],
        ingredients: ['Pizzadej', 'Tomatsauce', '200 g mozzarella', 'Topping efter eget valg'],
        steps: [
            'Forvarm ovnen til 250°C.',
            'Rul pizzadejen ud.',
            'Smør tomatsauce ud over dejen.',
            'Fordel mozzarella og topping.',
            'Bag i 10-12 minutter til den er gylden.'
        ]
    },
    {
        id: 'tacos',
        title: 'Mexicanske tacos',
        subtitle: 'med krydret oksekød og frisk salsa',
        emoji: '🌮',
        description: 'Byg-selv-taco-aften med krydret oksekød og friske toppings.',
        timeEstimates: [
            { portions: 2, minMinutes: 15, maxMinutes: 20 },
            { portions: 4, minMinutes: 25, maxMinutes: 30 }
        ],
        tags: ['Oksekød', 'Hurtigt'],
        ingredients: ['400 g hakket oksekød', 'Tacokrydderi', 'Tacoskaller', 'Salat, tomat, ost'],
        steps: [
            'Brun det hakkede oksekød i en pande.',
            'Rør tacokrydderi og lidt vand i.',
            'Lad simre i 5 minutter.',
            'Varm tacoskallerne.',
            'Lad alle bygge deres egne tacos.'
        ]
    },
    {
        id: 'boef-med-kartofler',
        title: 'Bøf med kartofler',
        subtitle: 'og hjemmelavet bearnaise',
        emoji: '🥩',
        description: 'En simpel og mættende weekendmiddag.',
        timeEstimates: [
            { portions: 2, minMinutes: 20, maxMinutes: 25 },
            { portions: 4, minMinutes: 35, maxMinutes: 40 }
        ],
        tags: ['Oksekød', 'Weekend'],
        ingredients: ['4 bøffer', '800 g kartofler', '50 g smør', '300 g grønne bønner'],
        steps: [
            'Tag bøfferne frem, så de når stuetemperatur.',
            'Kog kartoflerne.',
            'Steg bøfferne i smør.',
            'Lad bøfferne hvile, tilbered de grønne bønner.',
            'Anret og server.'
        ]
    },
    {
        id: 'lasagne',
        title: 'Klassisk lasagne',
        subtitle: 'med oksekød og bechamelsauce',
        emoji: '🧆',
        description: 'Lag på lag af pasta, fyldig kødsovs og cremet bechamelsauce.',
        timeEstimates: [
            { portions: 4, minMinutes: 70, maxMinutes: 75 },
            { portions: 6, minMinutes: 85, maxMinutes: 90 }
        ],
        tags: ['Pasta', 'Oksekød', 'Weekend'],
        ingredients: ['500 g hakket oksekød', 'Lasagneplader', 'Bechamelsauce', '400 g hakkede tomater', '150 g revet ost'],
        steps: [
            'Tag det hakkede oksekød ud af køleskabet.',
            'Hak løg og hvidløg.',
            'Start kødsovsen.',
            'Forvarm ovnen til 200°C.',
            'Saml lasagnen i lag.',
            'Sæt lasagnen i ovnen.',
            'Tag lasagnen ud af ovnen og lad den hvile.'
        ]
    }
];
