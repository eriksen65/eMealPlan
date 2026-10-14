import type { RecipeIngredient, Unit, IngredientPreparation } from '../data/mockRecipes';
import { MOCK_INGREDIENTS } from '../data/mockIngredients';

const UNIT_LABELS: Record<Unit, string> = {
    g: 'g',
    kg: 'kg',
    ml: 'ml',
    l: 'l',
    tsp: 'tsk',
    tbsp: 'spsk',
    pcs: '',
    clove: 'fed',
    pinch: 'knivspids'
};

const PREPARATION_LABELS: Record<IngredientPreparation, string> = {
    whole: 'hel',
    halved: 'halveret',
    quartered: 'i kvarte',
    sliced: 'skåret i skiver',
    'thinly-sliced': 'skåret i tynde skiver',
    chopped: 'hakket',
    'finely-chopped': 'finthakket',
    diced: 'skåret i tern',
    minced: 'hakket',
    grated: 'revet',
    crushed: 'knust',
    peeled: 'skrællet',
    juiced: 'presset',
    melted: 'smeltet'
};

/**
 * Formats a recipe ingredient into a readable Danish line, e.g.
 * "300 g hakket svinekød, hakket" or "2 hvidløg (valgfri)".
 */
export function formatRecipeIngredient(recipeIngredient: RecipeIngredient): string {
    const ingredient = MOCK_INGREDIENTS.find((candidate) => candidate.id === recipeIngredient.ingredientId);
    const name = ingredient?.name ?? recipeIngredient.ingredientId;
    const unitLabel = UNIT_LABELS[recipeIngredient.unit];
    const amountPart = unitLabel ? `${recipeIngredient.amount} ${unitLabel}` : `${recipeIngredient.amount}`;

    let line = `${amountPart} ${name}`;

    if (recipeIngredient.preparation && recipeIngredient.preparation.length > 0) {
        const preparationLabels = recipeIngredient.preparation.map((preparation) => PREPARATION_LABELS[preparation]);
        line += `, ${preparationLabels.join(', ')}`;
    }

    if (recipeIngredient.optional) {
        line += ' (valgfri)';
    }

    return line;
}
