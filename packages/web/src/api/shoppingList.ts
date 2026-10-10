import type { IngredientCategory, ShoppingList, Unit } from '@emealplan/domain';

import { apiDelete, apiGet, apiPatch, apiPost } from './client';

export interface ManualItemInput {
    name: string;
    quantity: number;
    unit: Unit;
    category?: IngredientCategory;
}

export function fetchShoppingList(weekStartDate: string): Promise<ShoppingList> {
    return apiGet<ShoppingList>(`/shopping-lists/${weekStartDate}`);
}

export function addManualItem(weekStartDate: string, input: ManualItemInput): Promise<ShoppingList> {
    return apiPost<ShoppingList>(`/shopping-lists/${weekStartDate}/items`, input);
}

export function setItemChecked(weekStartDate: string, itemId: string, checked: boolean): Promise<ShoppingList> {
    return apiPatch<ShoppingList>(`/shopping-lists/${weekStartDate}/items/${itemId}`, { checked });
}

export function removeManualItem(weekStartDate: string, itemId: string): Promise<ShoppingList> {
    return apiDelete<ShoppingList>(`/shopping-lists/${weekStartDate}/items/${itemId}`);
}
