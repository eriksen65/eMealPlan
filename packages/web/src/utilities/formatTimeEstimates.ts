import type { TimeEstimate } from '../data/mockRecipes';

/**
 * Formats a list of time estimates into a single readable line,
 * e.g. "2p: 15-20 min | 4p: 20-25 min".
 */
export function formatTimeEstimates(estimates: TimeEstimate[]): string {
    return estimates.map((estimate) => `${estimate.portions}p: ${estimate.minMinutes}-${estimate.maxMinutes} min`).join(' | ');
}
