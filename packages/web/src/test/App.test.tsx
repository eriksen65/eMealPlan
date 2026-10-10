import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';

import { App } from '../App';

function jsonResponse(body: unknown): Response {
    return new Response(JSON.stringify(body), { status: 200, headers: { 'Content-Type': 'application/json' } });
}

describe('App', () => {
    it("renders the dashboard with today's meal", async () => {
        vi.stubGlobal(
            'fetch',
            vi.fn((input: string | URL | Request) => {
                const url = typeof input === 'string' ? input : input.toString();

                if (url.includes('/api/dashboard/')) {
                    return Promise.resolve(
                        jsonResponse({
                            date: '2024-01-01',
                            weekday: 'monday',
                            mealTime: '18:00',
                            recipe: { id: 'r1', name: 'Spaghetti Bolognese' },
                            label: undefined,
                            cookingPlan: undefined,
                            progress: undefined,
                            shoppingListPendingCount: 3
                        })
                    );
                }

                if (url.includes('/api/meal-plans/')) {
                    return Promise.resolve(jsonResponse({ id: '2024-01-01', weekStartDate: '2024-01-01', days: [] }));
                }

                if (url.includes('/api/recipes')) {
                    return Promise.resolve(jsonResponse([]));
                }

                return Promise.resolve(jsonResponse({}));
            })
        );

        render(
            <MemoryRouter initialEntries={['/']}>
                <App />
            </MemoryRouter>
        );

        expect(await screen.findByText('Spaghetti Bolognese')).toBeInTheDocument();
        expect(screen.getByText('What are we eating today?')).toBeInTheDocument();
    });
});
