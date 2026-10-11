import { useState } from 'react';

import { TopNavBar } from './components/TopNavBar';
import { RecipeCard } from './components/RecipeCard';
import { RecipeDetailModal } from './components/RecipeDetailModal';
import { MOCK_RECIPES, type MockRecipe } from './data/mockRecipes';

export function App() {
    const [selectedRecipe, setSelectedRecipe] = useState<MockRecipe | null>(null);

    return (
        <div className='app-shell'>
            <TopNavBar />

            <main className='app-main'>
                <h1 className='page__title'>Opskrifter</h1>
                <div className='recipe-grid'>
                    {MOCK_RECIPES.map((recipe) => (
                        <RecipeCard key={recipe.id} recipe={recipe} onClick={setSelectedRecipe} />
                    ))}
                </div>
            </main>

            {selectedRecipe && <RecipeDetailModal recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />}
        </div>
    );
}
