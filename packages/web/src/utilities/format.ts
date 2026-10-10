import { getTotalTimeMinutes } from '@emealplan/domain';

export function formatMinutes(minutes: number): string {
    if (minutes < 60) return `${minutes} min`;
    const hours = Math.floor(minutes / 60);
    const remainder = minutes % 60;
    return remainder === 0 ? `${hours} h` : `${hours} h ${remainder} min`;
}

export function formatTotalTime(recipe: { prepTimeMinutes: number; cookTimeMinutes: number }): string {
    return formatMinutes(getTotalTimeMinutes(recipe));
}

export function capitalize(value: string): string {
    return value.charAt(0).toUpperCase() + value.slice(1);
}

export function formatDisplayDate(isoDate: string): string {
    return new Date(`${isoDate}T00:00:00`).toLocaleDateString(undefined, { weekday: 'long', month: 'short', day: 'numeric' });
}
