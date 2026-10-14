import { useState } from 'react';

import { TopNavBar } from './components/TopNavBar';
import type { AppPage } from './components/NavTabs';
import { RecipeCard } from './components/RecipeCard';
import { RecipeDetailModal } from './components/RecipeDetailModal';
import { IngredientCard } from './components/IngredientCard';
import { IngredientDetailModal } from './components/IngredientDetailModal';
import { MOCK_RECIPES, type MockRecipe } from './data/mockRecipes';
import { MOCK_INGREDIENTS, type Ingredient } from './data/mockIngredients';

export function App() {
    const [page, setPage] = useState<AppPage>('recipes');
    const [selectedRecipe, setSelectedRecipe] = useState<MockRecipe | null>(null);
    const [selectedIngredient, setSelectedIngredient] = useState<Ingredient | null>(null);

    const coreIngredients = MOCK_INGREDIENTS.filter((ingredient) => !ingredient.isStaple);
    const staples = MOCK_INGREDIENTS.filter((ingredient) => ingredient.isStaple);

    return (
        <div className='app-shell'>
            <TopNavBar activePage={page} onChangePage={setPage} />

            <main className='app-main'>
                <div className='app-main__inner'>
                    {page === 'recipes' ? (
                        <>
                            <h1 className='page__title'>Opskrifter</h1>
                            <div className='recipe-grid'>
                                {MOCK_RECIPES.map((recipe) => (
                                    <RecipeCard key={recipe.id} recipe={recipe} onClick={setSelectedRecipe} />
                                ))}
                            </div>
                        </>
                    ) : (
                        <>
                            <h1 className='page__title'>Ingredienser</h1>
                            <div className='ingredient-grid'>
                                {coreIngredients.map((ingredient) => (
                                    <IngredientCard key={ingredient.id} ingredient={ingredient} onClick={setSelectedIngredient} />
                                ))}
                            </div>

                            {staples.length > 0 && (
                                <>
                                    <h2 className='section-title section-title--divider'>Basisvarer</h2>
                                    <div className='ingredient-grid'>
                                        {staples.map((ingredient) => (
                                            <IngredientCard key={ingredient.id} ingredient={ingredient} onClick={setSelectedIngredient} />
                                        ))}
                                    </div>
                                </>
                            )}
                        </>
                    )}
                </div>
            </main>

            {selectedRecipe && <RecipeDetailModal recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />}
            {selectedIngredient && <IngredientDetailModal ingredient={selectedIngredient} onClose={() => setSelectedIngredient(null)} />}
        </div>
    );
}
