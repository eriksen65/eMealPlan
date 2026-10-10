import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { App } from '../App';

describe('App', () => {
    it('renders the top nav bar with the brand name and tagline', () => {
        render(<App />);

        expect(screen.getByText('eMealPlan')).toBeInTheDocument();
        expect(screen.getByText('Plan. Cook. Enjoy.')).toBeInTheDocument();
        expect(screen.getByAltText('eMealPlan logo')).toBeInTheDocument();
    });
});
