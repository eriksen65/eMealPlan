import { describe, expect, it } from 'vitest';

import type { Recipe } from '../models/recipe';
import { generateCookingPlan } from '../services/cookingPlanService';

describe('generateCookingPlan', () => {
    it('schedules steps sequentially backward from the meal time, then appends a "ready" task', () => {
        const recipe: Recipe = {
            id: 'lasagna',
            name: 'Lasagna',
            description: '',
            portions: 4,
            prepTimeMinutes: 30,
            cookTimeMinutes: 45,
            ingredients: [],
            steps: [
                { id: 's1', order: 1, instruction: 'Chop onion and garlic.', durationMinutes: 5 },
                { id: 's2', order: 2, instruction: 'Start the meat sauce.', durationMinutes: 20 },
                { id: 's3', order: 3, instruction: 'Assemble the lasagna.', durationMinutes: 10 },
                { id: 's4', order: 4, instruction: 'Bake in the oven.', durationMinutes: 35 }
            ],
            tags: [],
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };

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
        const recipe: Recipe = {
            id: 'midnight-snack',
            name: 'Midnight snack',
            description: '',
            portions: 1,
            prepTimeMinutes: 0,
            cookTimeMinutes: 0,
            ingredients: [],
            steps: [{ id: 's1', order: 1, instruction: 'Toast bread.', durationMinutes: 10 }],
            tags: [],
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };

        const plan = generateCookingPlan('2026-03-19', recipe, '00:05');

        expect(plan.tasks[0]?.time).toBe('23:55');
    });
});
