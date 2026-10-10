import type { Id } from './common';

export interface User {
    id: Id;
    name: string;
    email: string;
}

export interface Household {
    id: Id;
    name: string;
    memberIds: Id[];
}
