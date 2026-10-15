import type { Unit } from '../models/recipe';

/**
 * Converts a quantity to a common base unit so quantities of the same "kind" (mass, volume, count)
 * can be summed even if recipes express them differently (e.g. 500 g + 0.75 kg).
 */
interface UnitGroup {
    base: Unit;
    factor: number;
}

const UNIT_GROUPS: Record<Unit, UnitGroup> = {
    g: { base: 'g', factor: 1 },
    kg: { base: 'g', factor: 1000 },
    ml: { base: 'ml', factor: 1 },
    l: { base: 'ml', factor: 1000 },
    pcs: { base: 'pcs', factor: 1 },
    tbsp: { base: 'tbsp', factor: 1 },
    tsp: { base: 'tsp', factor: 1 },
    pinch: { base: 'pinch', factor: 1 },
    clove: { base: 'clove', factor: 1 },
    sprig: { base: 'sprig', factor: 1 }
};

export function toBaseQuantity(quantity: number, unit: Unit): { base: Unit; quantity: number } {
    const group = UNIT_GROUPS[unit];
    return { base: group.base, quantity: quantity * group.factor };
}

/**
 * Converts a base-unit quantity back into a friendly display unit/quantity,
 * preferring the larger unit once a threshold is crossed (e.g. 1000 g -> 1 kg).
 */
export function fromBaseQuantity(base: Unit, quantity: number): { unit: Unit; quantity: number } {
    if (base === 'g' && quantity >= 1000) {
        return { unit: 'kg', quantity: round(quantity / 1000) };
    }
    if (base === 'ml' && quantity >= 1000) {
        return { unit: 'l', quantity: round(quantity / 1000) };
    }
    return { unit: base, quantity: round(quantity) };
}

function round(value: number): number {
    return Math.round(value * 100) / 100;
}
