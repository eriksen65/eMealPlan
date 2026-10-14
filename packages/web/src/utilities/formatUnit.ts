import type { Unit } from '../data/mockRecipes';

export const UNIT_LABELS: Record<Unit, string> = {
    g: 'g',
    kg: 'kg',
    ml: 'ml',
    l: 'l',
    tsp: 'tsk',
    tbsp: 'spsk',
    pcs: '',
    clove: 'fed',
    pinch: 'knivspids',
    sprig: 'kvist'
};

/** Formats a unit into its Danish display label. */
export function formatUnit(unit: Unit): string {
    return UNIT_LABELS[unit];
}
