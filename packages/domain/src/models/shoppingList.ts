import type { Id, IsoDate } from './common';
import type { IngredientCategory } from './ingredient';
import type { Unit } from './recipe';

export interface ShoppingListItem {
    id: Id;
    name: string;
    quantity: number;
    unit: Unit;
    category: IngredientCategory;
    checked: boolean;
    /** Recipes that contributed to this aggregated quantity. Empty for manually added items. */
    sourceRecipeIds: Id[];
    /** True for items the user added by hand, not derived from a recipe. */
    manuallyAdded: boolean;
}

export interface ShoppingList {
    id: Id;
    householdId: Id;
    weekStartDate: IsoDate;
    items: ShoppingListItem[];
    updatedAt: string;
}
