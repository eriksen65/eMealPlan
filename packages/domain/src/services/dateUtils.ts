import type { IsoDate } from '../models/common';
import { WEEKDAYS, type Weekday } from '../models/mealPlan';

export function formatIsoDate(date: Date): IsoDate {
    return date.toISOString().slice(0, 10);
}

export function todayIsoDate(): IsoDate {
    return formatIsoDate(new Date());
}

export function getWeekdayFromIsoDate(date: IsoDate): Weekday {
    // getUTCDay(): 0 = Sunday .. 6 = Saturday. WEEKDAYS starts on Monday.
    const jsDay = new Date(`${date}T00:00:00Z`).getUTCDay();
    const index = (jsDay + 6) % 7;
    return WEEKDAYS[index] as Weekday;
}

/** Returns the Monday of the ISO week containing `date`. */
export function getWeekStartDate(date: IsoDate): IsoDate {
    const current = new Date(`${date}T00:00:00Z`);
    const jsDay = current.getUTCDay();
    const diffToMonday = (jsDay + 6) % 7;
    current.setUTCDate(current.getUTCDate() - diffToMonday);
    return formatIsoDate(current);
}

/** Returns the 7 consecutive ISO dates (Monday-Sunday) starting at `weekStartDate`. */
export function getWeekDates(weekStartDate: IsoDate): IsoDate[] {
    const start = new Date(`${weekStartDate}T00:00:00Z`);
    return Array.from({ length: 7 }, (_, i) => {
        const date = new Date(start);
        date.setUTCDate(start.getUTCDate() + i);
        return formatIsoDate(date);
    });
}
