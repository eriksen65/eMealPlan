import { describe, expect, it } from 'vitest';

import type { Recipe } from '../models/recipe';
import { generateCookingPlan } from '../services/cookingPlanService';

function makeRecipe(overrides: Partial<Recipe> & Pick<Recipe, 'id' | 'title' | 'steps'>): Recipe {
    return {
        subtitle: '',
        description: '',
        emoji: '🍽️',
        baseServings: 2,
        timeEstimates: [],
        tags: [],
        ingredients: [],
        ...overrides
    };
}

describe('generateCookingPlan', () => {
    it('schedules steps sequentially backward from the meal time, then appends a "ready" task', () => {
        const recipe = makeRecipe({
            id: 'lasagna',
            title: 'Lasagna',
            steps: [
                { title: 'Chop onion and garlic.', instruction: '', durationMinutes: 5 },
                { title: 'Start the meat sauce.', instruction: '', durationMinutes: 20 },
                { title: 'Assemble the lasagna.', instruction: '', durationMinutes: 10 },
                { title: 'Bake in the oven.', instruction: '', durationMinutes: 35 }
            ]
        });

        const plan = generateCookingPlan('2026-03-19', recipe, '18:30');

        expect(plan.tasks.map((t) => `${t.time} ${t.description}`)).toEqual([
            '17:20 Chop onion and garlic.',
            '17:25 Start the meat sauce.',
            '17:45 Assemble the lasagna.',
            '17:55 Bake in the oven.',
            '18:30 Lasagna is ready to serve.'
        ]);
        expect(plan.tasks.every((t) => t.done === false)).toBe(true);
    });

    it('wraps times correctly when scheduling crosses midnight', () => {
        const recipe = makeRecipe({
            id: 'midnight-snack',
            title: 'Midnight snack',
            steps: [{ title: 'Toast bread.', instruction: '', durationMinutes: 10 }]
        });

        const plan = generateCookingPlan('2026-03-19', recipe, '00:05');

        expect(plan.tasks[0]?.time).toBe('23:55');
    });
});
