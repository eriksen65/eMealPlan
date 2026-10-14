import type { DietaryProperty } from '../data/mockIngredients';

const DIETARY_PROPERTY_LABELS: Record<DietaryProperty, string> = {
    vegan: 'Vegansk',
    vegetarian: 'Vegetarisk',
    'gluten-free': 'Glutenfri',
    'lactose-free': 'Laktosefri'
};

/** Formats a dietary property into its Danish display label. */
export function formatDietaryProperty(property: DietaryProperty): string {
    return DIETARY_PROPERTY_LABELS[property];
}
