import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { App } from '../App';
import type { Recipe } from '@emealplan/domain';

const recipe: Recipe = {
    id: 'vietnamesiske-nudler',
    title: 'Hurtige vietnamesiske nudler',
    subtitle: 'med frisk mynte',
    description: 'Sprøde nudler.',
    emoji: '🍜',
    baseServings: 2,
    timeEstimates: [{ portions: 2, minMinutes: 15, maxMinutes: 20 }],
    tags: ['quick'],
    ingredients: [],
    steps: [{ title: 'Kog nudler', instruction: 'Bring en stor gryde med saltet vand i kog.', durationMinutes: 5 }]
};

beforeEach(() => {
    vi.stubGlobal(
        'fetch',
        vi.fn(async (url: string) => ({
            ok: true,
            json: async () => (url === '/api/recipes' ? [recipe] : [])
        }))
    );
});

afterEach(() => {
    vi.unstubAllGlobals();
});

describe('App', () => {
    it('renders the top nav bar with the brand name and tagline', () => {
        render(<App />);

        expect(screen.getByText('eMealPlan')).toBeInTheDocument();
        expect(screen.getByText('Plan. Cook. Enjoy.')).toBeInTheDocument();
        expect(screen.getByAltText('eMealPlan logo')).toBeInTheDocument();
    });

    it('opens the full recipe when a recipe card is clicked', async () => {
        window.history.pushState(null, '', '/opskrifter');
        render(<App />);
        const user = userEvent.setup();

        await user.click(await screen.findByRole('button', { name: /hurtige vietnamesiske nudler/i }));

        expect(screen.getByRole('dialog', { name: /hurtige vietnamesiske nudler/i })).toBeInTheDocument();
        expect(screen.getByText(/bring en stor gryde med saltet vand i kog/i)).toBeInTheDocument();
    });
});
