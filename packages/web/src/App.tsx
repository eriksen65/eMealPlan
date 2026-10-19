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
import { PAGE_PATHS, pageFromPath } from './utilities/pageRoutes';

export function App() {
    const [page, setPage] = useState<AppPage>(() => pageFromPath(window.location.pathname));
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);
    const [ingredientQuery, setIngredientQuery] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
    const [selectedIngredient, setSelectedIngredient] = useState<Ingredient | null>(null);

    useEffect(() => {
        const onPopState = () => setPage(pageFromPath(window.location.pathname));
        window.addEventListener('popstate', onPopState);
        return () => window.removeEventListener('popstate', onPopState);
    }, []);

    function changePage(next: AppPage) {
        if (next !== page) window.history.pushState(null, '', PAGE_PATHS[next]);
        setPage(next);
    }

    useEffect(() => {
        Promise.all([fetchRecipes(), fetchIngredients()])
            .then(([loadedRecipes, loadedIngredients]) => {
                setRecipes(loadedRecipes);
                setIngredients(loadedIngredients);
            })
            .catch(() => setError('Kunne ikke hente data fra serveren.'));
    }, []);

    const query = ingredientQuery.trim().toLocaleLowerCase('da');
    const sortedIngredients = [...ingredients]
        .filter(
            (ingredient) =>
                !query ||
                ingredient.name.toLocaleLowerCase('da').includes(query) ||
                (ingredient.aliases ?? []).some((alias) => alias.toLocaleLowerCase('da').includes(query))
        )
        .sort((a, b) => a.name.localeCompare(b.name, 'da'));
    const coreIngredients = sortedIngredients.filter((ingredient) => !ingredient.isStaple);
    const staples = sortedIngredients.filter((ingredient) => ingredient.isStaple);

    return (
        <div className='app-shell'>
            <TopNavBar activePage={page} onChangePage={changePage} />

            <main className='app-main'>
                <div className='app-main__inner'>
                    {error && <p role='alert'>{error}</p>}{' '}
                    {page === 'home' ? (
                        <>
                            <h1 className='page__title'>Velkommen til eMealPlan</h1>
                            <div className='home__grid'>
                                {(['recipes', 'ingredients'] as const).map((target) => (
                                    <a
                                        key={target}
                                        href={PAGE_PATHS[target]}
                                        className='home__card'
                                        onClick={(event) => {
                                            if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
                                            event.preventDefault();
                                            changePage(target);
                                        }}>
                                        <span className='home__card-emoji' aria-hidden='true'>
                                            {target === 'recipes' ? '🍜' : '🥕'}
                                        </span>
                                        <span className='home__card-title'>{target === 'recipes' ? 'Opskrifter' : 'Ingredienser'}</span>
                                        <span className='home__card-text'>
                                            {target === 'recipes'
                                                ? `${recipes.length} opskrifter at lave mad efter`
                                                : `${ingredients.length} ingredienser med næringsindhold`}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </>
                    ) : page === 'recipes' ? (
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
                            <input
                                type='search'
                                className='search-input'
                                placeholder='Søg efter ingrediens…'
                                aria-label='Søg efter ingrediens'
                                value={ingredientQuery}
                                onChange={(event) => setIngredientQuery(event.target.value)}
                            />
                            <h1 className='page__title'>Ingredienser</h1>
                            {sortedIngredients.length === 0 && <p>Ingen ingredienser matcher din søgning.</p>}
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

            {selectedRecipe && (
                <RecipeDetailModal
                    recipe={selectedRecipe}
                    ingredients={ingredients}
                    onSelectIngredient={setSelectedIngredient}
                    onClose={() => setSelectedRecipe(null)}
                />
            )}
            {selectedIngredient && (
                <IngredientDetailModal
                    ingredient={selectedIngredient}
                    ingredients={ingredients}
                    onSelectIngredient={setSelectedIngredient}
                    onClose={() => setSelectedIngredient(null)}
                />
            )}
        </div>
    );
}
