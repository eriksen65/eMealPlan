export interface MockRecipe {
    id: string;
    name: string;
    emoji: string;
    description: string;
    portions: number;
    totalTimeMinutes: number;
    tags: string[];
    ingredients: string[];
    steps: string[];
}

export const MOCK_RECIPES: MockRecipe[] = [
    {
        id: 'spaghetti-bolognese',
        name: 'Spaghetti Bolognese',
        emoji: '🍝',
        description: 'A rich, slow-simmered meat sauce over al dente spaghetti.',
        portions: 4,
        totalTimeMinutes: 45,
        tags: ['Pasta', 'Beef'],
        ingredients: ['500 g minced beef', '1 onion', '2 garlic cloves', '400 g crushed tomatoes', '400 g spaghetti', 'Parmesan, to serve'],
        steps: [
            'Chop the onion and garlic.',
            'Brown the minced beef in a large pan.',
            'Add onion and garlic, cook until soft.',
            'Stir in crushed tomatoes and simmer for 25 minutes.',
            'Boil the spaghetti according to the package.',
            'Serve the sauce over spaghetti with parmesan.'
        ]
    },
    {
        id: 'chicken-curry',
        name: 'Chicken Curry',
        emoji: '🍛',
        description: 'A warming coconut curry with tender chicken and vegetables.',
        portions: 4,
        totalTimeMinutes: 40,
        tags: ['Chicken', 'Quick meals'],
        ingredients: ['500 g chicken breast', '1 can coconut milk', '2 tbsp curry paste', '1 bell pepper', 'Rice, to serve'],
        steps: [
            'Cut the chicken into bite-sized pieces.',
            'Fry the curry paste for a minute in a hot pan.',
            'Add chicken and brown on all sides.',
            'Pour in coconut milk and simmer for 15 minutes.',
            'Add sliced bell pepper for the last 5 minutes.',
            'Serve with rice.'
        ]
    },
    {
        id: 'homemade-pizza',
        name: 'Homemade Pizza',
        emoji: '🍕',
        description: 'Crispy home-baked pizza with your favourite toppings.',
        portions: 4,
        totalTimeMinutes: 60,
        tags: ['Vegetarian', 'Kid friendly'],
        ingredients: ['Pizza dough', 'Tomato sauce', '200 g mozzarella', 'Toppings of choice'],
        steps: [
            'Preheat the oven to 250°C.',
            'Roll out the pizza dough.',
            'Spread tomato sauce over the dough.',
            'Add mozzarella and toppings.',
            'Bake for 10-12 minutes until golden.'
        ]
    },
    {
        id: 'tacos',
        name: 'Tacos',
        emoji: '🌮',
        description: 'Build-your-own taco night with seasoned beef and fresh toppings.',
        portions: 4,
        totalTimeMinutes: 30,
        tags: ['Beef', 'Quick meals'],
        ingredients: ['400 g minced beef', 'Taco seasoning', 'Taco shells', 'Lettuce, tomato, cheese'],
        steps: [
            'Brown the minced beef in a pan.',
            'Stir in taco seasoning and a splash of water.',
            'Simmer for 5 minutes.',
            'Warm the taco shells.',
            'Let everyone build their own tacos.'
        ]
    },
    {
        id: 'steak-potatoes',
        name: 'Steak with Potatoes',
        emoji: '🥩',
        description: 'A simple, satisfying weekend dinner.',
        portions: 4,
        totalTimeMinutes: 40,
        tags: ['Beef', 'Weekend food'],
        ingredients: ['4 steaks', '800 g potatoes', '50 g butter', '300 g green beans'],
        steps: [
            'Take the steaks out to reach room temperature.',
            'Boil the potatoes.',
            'Sear the steaks in butter.',
            'Rest the steaks, cook the green beans.',
            'Plate and serve.'
        ]
    },
    {
        id: 'lasagna',
        name: 'Lasagna',
        emoji: '🧆',
        description: 'Layers of pasta, rich meat sauce, and creamy béchamel.',
        portions: 6,
        totalTimeMinutes: 80,
        tags: ['Pasta', 'Beef', 'Weekend food'],
        ingredients: ['500 g minced beef', 'Lasagna sheets', 'Béchamel sauce', '400 g crushed tomatoes', '150 g grated cheese'],
        steps: [
            'Take the minced beef out of the refrigerator.',
            'Chop onion and garlic.',
            'Start the meat sauce.',
            'Preheat oven to 200°C.',
            'Assemble the lasagna.',
            'Put lasagna in the oven.',
            'Remove lasagna from the oven and let rest.'
        ]
    }
];
