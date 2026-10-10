import type { Recipe } from '@emealplan/domain';

export const DEFAULT_HOUSEHOLD_ID = 'default-household';

const now = new Date().toISOString();

function recipe(data: Omit<Recipe, 'createdAt' | 'updatedAt'>): Recipe {
    return { ...data, createdAt: now, updatedAt: now };
}

export const SEED_RECIPES: Recipe[] = [
    recipe({
        id: 'spaghetti-bolognese',
        name: 'Spaghetti Bolognese',
        description: 'A classic, comforting meat sauce served over spaghetti.',
        portions: 4,
        prepTimeMinutes: 15,
        cookTimeMinutes: 40,
        tags: ['pasta', 'beef', 'kid-friendly'],
        ingredients: [
            { id: 'ing-1', name: 'Minced beef', quantity: 500, unit: 'g', category: 'meat' },
            { id: 'ing-2', name: 'Spaghetti', quantity: 400, unit: 'g', category: 'dry-goods' },
            { id: 'ing-3', name: 'Onion', quantity: 1, unit: 'pcs', category: 'fruit-veg' },
            { id: 'ing-4', name: 'Garlic', quantity: 2, unit: 'pcs', category: 'fruit-veg' },
            { id: 'ing-5', name: 'Chopped tomatoes', quantity: 800, unit: 'g', category: 'dry-goods' }
        ],
        steps: [
            { id: 'step-1', order: 1, instruction: 'Take the minced beef out of the refrigerator.', durationMinutes: 5 },
            { id: 'step-2', order: 2, instruction: 'Chop onion and garlic.', durationMinutes: 5 },
            { id: 'step-3', order: 3, instruction: 'Brown the mince, then add onion, garlic and tomatoes.', durationMinutes: 10 },
            { id: 'step-4', order: 4, instruction: 'Simmer the sauce.', durationMinutes: 25 },
            { id: 'step-5', order: 5, instruction: 'Boil the spaghetti.', durationMinutes: 10 },
            { id: 'step-6', order: 6, instruction: 'Combine pasta and sauce, then serve.', durationMinutes: 5 }
        ]
    }),
    recipe({
        id: 'chicken-curry',
        name: 'Chicken Curry',
        description: 'A mild, fragrant curry the whole family can enjoy.',
        portions: 4,
        prepTimeMinutes: 15,
        cookTimeMinutes: 30,
        tags: ['chicken', 'quick-meals'],
        ingredients: [
            { id: 'ing-1', name: 'Chicken breast', quantity: 600, unit: 'g', category: 'meat' },
            { id: 'ing-2', name: 'Rice', quantity: 300, unit: 'g', category: 'dry-goods' },
            { id: 'ing-3', name: 'Coconut milk', quantity: 400, unit: 'ml', category: 'dry-goods' },
            { id: 'ing-4', name: 'Curry paste', quantity: 2, unit: 'tbsp', category: 'dry-goods' },
            { id: 'ing-5', name: 'Potatoes', quantity: 750, unit: 'g', category: 'fruit-veg' }
        ],
        steps: [
            { id: 'step-1', order: 1, instruction: 'Cut chicken into bite-sized pieces.', durationMinutes: 10 },
            { id: 'step-2', order: 2, instruction: 'Fry curry paste, then add chicken.', durationMinutes: 10 },
            { id: 'step-3', order: 3, instruction: 'Add coconut milk and potatoes, then simmer.', durationMinutes: 20 },
            { id: 'step-4', order: 4, instruction: 'Cook the rice.', durationMinutes: 15 },
            { id: 'step-5', order: 5, instruction: 'Serve curry over rice.', durationMinutes: 5 }
        ]
    }),
    recipe({
        id: 'homemade-pizza',
        name: 'Homemade Pizza',
        description: 'Everyone builds their own - a fun, flexible weeknight favorite.',
        portions: 4,
        prepTimeMinutes: 30,
        cookTimeMinutes: 15,
        tags: ['weekend-food', 'kid-friendly'],
        ingredients: [
            { id: 'ing-1', name: 'Pizza dough', quantity: 4, unit: 'pcs', category: 'bread' },
            { id: 'ing-2', name: 'Tomato sauce', quantity: 300, unit: 'ml', category: 'dry-goods' },
            { id: 'ing-3', name: 'Mozzarella', quantity: 400, unit: 'g', category: 'dairy' },
            { id: 'ing-4', name: 'Toppings of choice', quantity: 1, unit: 'pcs', category: 'other' }
        ],
        steps: [
            { id: 'step-1', order: 1, instruction: 'Preheat the oven as hot as it will go.', durationMinutes: 15 },
            { id: 'step-2', order: 2, instruction: 'Roll out the dough.', durationMinutes: 10 },
            { id: 'step-3', order: 3, instruction: 'Add sauce, cheese and toppings.', durationMinutes: 10 },
            { id: 'step-4', order: 4, instruction: 'Bake until golden.', durationMinutes: 10 },
            { id: 'step-5', order: 5, instruction: 'Slice and serve.', durationMinutes: 5 }
        ]
    }),
    recipe({
        id: 'tacos',
        name: 'Tacos',
        description: 'Build-your-own tacos with seasoned beef and fresh toppings.',
        portions: 4,
        prepTimeMinutes: 15,
        cookTimeMinutes: 15,
        tags: ['beef', 'quick-meals', 'kid-friendly'],
        ingredients: [
            { id: 'ing-1', name: 'Minced beef', quantity: 500, unit: 'g', category: 'meat' },
            { id: 'ing-2', name: 'Taco shells', quantity: 12, unit: 'pcs', category: 'bread' },
            { id: 'ing-3', name: 'Lettuce', quantity: 1, unit: 'pcs', category: 'fruit-veg' },
            { id: 'ing-4', name: 'Tomato', quantity: 2, unit: 'pcs', category: 'fruit-veg' },
            { id: 'ing-5', name: 'Grated cheese', quantity: 200, unit: 'g', category: 'dairy' }
        ],
        steps: [
            { id: 'step-1', order: 1, instruction: 'Chop lettuce and tomato.', durationMinutes: 10 },
            { id: 'step-2', order: 2, instruction: 'Brown the mince and add taco seasoning.', durationMinutes: 15 },
            { id: 'step-3', order: 3, instruction: 'Warm the taco shells.', durationMinutes: 5 },
            { id: 'step-4', order: 4, instruction: 'Set out toppings and serve.', durationMinutes: 5 }
        ]
    }),
    recipe({
        id: 'steak-with-potatoes',
        name: 'Steak with Potatoes',
        description: 'A simple, satisfying weekend dinner.',
        portions: 4,
        prepTimeMinutes: 10,
        cookTimeMinutes: 30,
        tags: ['beef', 'weekend-food'],
        ingredients: [
            { id: 'ing-1', name: 'Steak', quantity: 4, unit: 'pcs', category: 'meat' },
            { id: 'ing-2', name: 'Potatoes', quantity: 800, unit: 'g', category: 'fruit-veg' },
            { id: 'ing-3', name: 'Butter', quantity: 50, unit: 'g', category: 'dairy' },
            { id: 'ing-4', name: 'Green beans', quantity: 300, unit: 'g', category: 'frozen' }
        ],
        steps: [
            { id: 'step-1', order: 1, instruction: 'Take the steaks out to reach room temperature.', durationMinutes: 15 },
            { id: 'step-2', order: 2, instruction: 'Boil the potatoes.', durationMinutes: 20 },
            { id: 'step-3', order: 3, instruction: 'Sear the steaks in butter.', durationMinutes: 10 },
            { id: 'step-4', order: 4, instruction: 'Rest the steaks, cook green beans.', durationMinutes: 5 },
            { id: 'step-5', order: 5, instruction: 'Plate and serve.', durationMinutes: 5 }
        ]
    }),
    recipe({
        id: 'lasagna',
        name: 'Lasagna',
        description: 'Layers of pasta, rich meat sauce and bechamel, baked until bubbling.',
        portions: 6,
        prepTimeMinutes: 35,
        cookTimeMinutes: 45,
        tags: ['pasta', 'beef', 'weekend-food'],
        ingredients: [
            { id: 'ing-1', name: 'Minced beef', quantity: 500, unit: 'g', category: 'meat' },
            { id: 'ing-2', name: 'Lasagna sheets', quantity: 250, unit: 'g', category: 'dry-goods' },
            { id: 'ing-3', name: 'Bechamel sauce', quantity: 500, unit: 'ml', category: 'dairy' },
            { id: 'ing-4', name: 'Onion', quantity: 1, unit: 'pcs', category: 'fruit-veg' },
            { id: 'ing-5', name: 'Garlic', quantity: 2, unit: 'pcs', category: 'fruit-veg' },
            { id: 'ing-6', name: 'Chopped tomatoes', quantity: 800, unit: 'g', category: 'dry-goods' },
            { id: 'ing-7', name: 'Grated cheese', quantity: 150, unit: 'g', category: 'dairy' },
            { id: 'ing-8', name: 'Lettuce', quantity: 1, unit: 'pcs', category: 'fruit-veg' }
        ],
        steps: [
            { id: 'step-1', order: 1, instruction: 'Take the minced beef out of the refrigerator.', durationMinutes: 5 },
            { id: 'step-2', order: 2, instruction: 'Chop onion and garlic.', durationMinutes: 5 },
            { id: 'step-3', order: 3, instruction: 'Start the meat sauce.', durationMinutes: 20 },
            { id: 'step-4', order: 4, instruction: 'Preheat oven to 200°C.', durationMinutes: 5 },
            { id: 'step-5', order: 5, instruction: 'Assemble the lasagna.', durationMinutes: 10 },
            { id: 'step-6', order: 6, instruction: 'Put lasagna in the oven.', durationMinutes: 35 },
            { id: 'step-7', order: 7, instruction: 'Prepare a side salad.', durationMinutes: 5 }
        ]
    })
];
