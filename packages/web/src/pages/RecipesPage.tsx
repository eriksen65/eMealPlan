import { useState } from 'react';
import { Link } from 'react-router-dom';
import { RECIPE_TAGS } from '@emealplan/domain';

import { fetchRecipes } from '../api/recipes';
import { ErrorState, LoadingState } from '../components/RequestState';
import { RecipeCard } from '../components/RecipeCard';
import { useFetch } from '../utilities/useFetch';

export function RecipesPage() {
    const [search, setSearch] = useState('');
    const [tag, setTag] = useState('');

    const recipes = useFetch(() => {
        const query: { search?: string; tag?: string } = {};
        if (search) query.search = search;
        if (tag) query.tag = tag;
        return fetchRecipes(query);
    }, [search, tag]);

    return (
        <section className='page'>
            <div className='page__header'>
                <h1 className='page__title'>Recipes</h1>
                <Link to='/recipes/new' className='button'>
                    + New recipe
                </Link>
            </div>

            <div className='recipe-filters'>
                <input type='search' placeholder='Search recipes…' value={search} onChange={(event) => setSearch(event.target.value)} />
                <select value={tag} onChange={(event) => setTag(event.target.value)}>
                    <option value=''>All categories</option>
                    {RECIPE_TAGS.map((option) => (
                        <option key={option} value={option}>
                            {option.replace('-', ' ')}
                        </option>
                    ))}
                </select>
            </div>

            {recipes.loading && <LoadingState label='Loading recipes…' />}
            {recipes.error && <ErrorState error={recipes.error} />}
            {recipes.data && recipes.data.length === 0 && <p className='state'>No recipes match your search yet.</p>}

            <div className='recipe-grid'>
                {recipes.data?.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </section>
    );
}
