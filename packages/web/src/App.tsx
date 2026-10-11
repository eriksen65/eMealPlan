import { useState } from 'react';

import { TopNavBar } from './components/TopNavBar';
import type { AppPage } from './components/NavTabs';
import { RecipeCard } from './components/RecipeCard';
import { RecipeDetailModal } from './components/RecipeDetailModal';
import { IngredientCard } from './components/IngredientCard';
import { MOCK_RECIPES, type MockRecipe } from './data/mockRecipes';
import { MOCK_INGREDIENTS } from './data/mockIngredients';

export function App() {
    const [page, setPage] = useState<AppPage>('recipes');
    const [selectedRecipe, setSelectedRecipe] = useState<MockRecipe | null>(null);

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
                                {MOCK_INGREDIENTS.map((ingredient) => (
                                    <IngredientCard key={ingredient.id} ingredient={ingredient} />
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </main>

            {selectedRecipe && <RecipeDetailModal recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />}
        </div>
    );
}
