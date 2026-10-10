import type { ClockTime, Id, IsoDate } from './common';

export interface CookingTask {
    id: Id;
    /** Clock time this task should start, e.g. "17:35". */
    time: ClockTime;
    description: string;
    done: boolean;
}

export interface CookingPlan {
    id: Id;
    date: IsoDate;
    recipeId: Id;
    mealTime: ClockTime;
    tasks: CookingTask[];
}
