import type { Unit } from '@emealplan/domain';

const UNIT_LABELS: Record<Unit, string> = {
    g: 'g',
    kg: 'kg',
    ml: 'ml',
    l: 'l',
    dl: 'dl',
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
