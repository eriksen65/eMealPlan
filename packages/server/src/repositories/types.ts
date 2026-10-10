import type { CookingPlan, MealPlan, Recipe, ShoppingList } from '@emealplan/domain';

export interface RecipeRepository {
    list(): Promise<Recipe[]>;
    getById(id: string): Promise<Recipe | undefined>;
    save(recipe: Recipe): Promise<Recipe>;
    remove(id: string): Promise<boolean>;
}

export interface MealPlanRepository {
    getByWeekStart(weekStartDate: string): Promise<MealPlan | undefined>;
    save(mealPlan: MealPlan): Promise<MealPlan>;
}

export interface ShoppingListRepository {
    getByWeekStart(weekStartDate: string): Promise<ShoppingList | undefined>;
    save(shoppingList: ShoppingList): Promise<ShoppingList>;
}

export interface CookingPlanRepository {
    getByDate(date: string): Promise<CookingPlan | undefined>;
    save(cookingPlan: CookingPlan): Promise<CookingPlan>;
}
