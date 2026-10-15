import type { RecipeTag } from '@emealplan/domain';

const RECIPE_TAG_LABELS: Record<RecipeTag, string> = {
    quick: 'Hurtigt',
    weekend: 'Weekend',
    'kid-friendly': 'Børnevenligt',
    'meal-prep': 'Meal prep'
};

/** Formats a recipe tag into its Danish display label. */
export function formatRecipeTag(tag: RecipeTag): string {
    return RECIPE_TAG_LABELS[tag];
}
