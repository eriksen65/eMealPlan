import { useEffect, useState } from 'react';

import { TopNavBar } from './components/TopNavBar';
import type { AppPage } from './components/NavTabs';
import { RecipeCard } from './components/RecipeCard';
import { RecipeDetailModal } from './components/RecipeDetailModal';
import { IngredientCard } from './components/IngredientCard';
import { IngredientDetailModal } from './components/IngredientDetailModal';
import { InfoTooltip } from './components/InfoTooltip';
import { fetchIngredients, fetchRecipes } from './api/client';
import type { Recipe } from '@emealplan/domain';
import type { Ingredient } from '@emealplan/domain';
import { STAPLES_INFO_TEXT } from './utilities/staplesInfoText';

export function App() {
    const [page, setPage] = useState<AppPage>('recipes');
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
    const [selectedIngredient, setSelectedIngredient] = useState<Ingredient | null>(null);

    useEffect(() => {
        Promise.all([fetchRecipes(), fetchIngredients()])
            .then(([loadedRecipes, loadedIngredients]) => {
                setRecipes(loadedRecipes);
                setIngredients(loadedIngredients);
            })
            .catch(() => setError('Kunne ikke hente data fra serveren.'));
    }, []);

    const coreIngredients = ingredients.filter((ingredient) => !ingredient.isStaple);
    const staples = ingredients.filter((ingredient) => ingredient.isStaple);

    return (
        <div className='app-shell'>
            <TopNavBar activePage={page} onChangePage={setPage} />

            <main className='app-main'>
                <div className='app-main__inner'>
                    {error && <p role='alert'>{error}</p>}{' '}
                    {page === 'recipes' ? (
                        <>
                            <h1 className='page__title'>Opskrifter</h1>
                            <div className='recipe-grid'>
                                {recipes.map((recipe) => (
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
                                    <h2 className='section-title section-title--divider'>
                                        Basisvarer
                                        <InfoTooltip text={STAPLES_INFO_TEXT} />
                                    </h2>
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

            {selectedRecipe && <RecipeDetailModal recipe={selectedRecipe} ingredients={ingredients} onClose={() => setSelectedRecipe(null)} />}
            {selectedIngredient && <IngredientDetailModal ingredient={selectedIngredient} onClose={() => setSelectedIngredient(null)} />}
        </div>
    );
}
