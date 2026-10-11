import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { App } from '../App';

describe('App', () => {
    it('renders the top nav bar with the brand name and tagline', () => {
        render(<App />);

        expect(screen.getByText('eMealPlan')).toBeInTheDocument();
        expect(screen.getByText('Plan. Cook. Enjoy.')).toBeInTheDocument();
        expect(screen.getByAltText('eMealPlan logo')).toBeInTheDocument();
    });

    it('opens the full recipe when a recipe card is clicked', async () => {
        render(<App />);
        const user = userEvent.setup();

        await user.click(screen.getByRole('button', { name: /klassisk lasagne/i }));

        expect(screen.getByRole('dialog', { name: 'Klassisk lasagne' })).toBeInTheDocument();
        expect(screen.getByText('Forvarm ovnen til 200°C.')).toBeInTheDocument();
    });
});
