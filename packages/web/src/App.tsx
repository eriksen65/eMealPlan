import { Route, Routes } from 'react-router-dom';

import { NavBar } from './components/NavBar';
import { CookingPlanPage } from './pages/CookingPlanPage';
import { DashboardPage } from './pages/DashboardPage';
import { MealPlanPage } from './pages/MealPlanPage';
import { RecipeDetailPage } from './pages/RecipeDetailPage';
import { RecipeFormPage } from './pages/RecipeFormPage';
import { RecipesPage } from './pages/RecipesPage';
import { ShoppingListPage } from './pages/ShoppingListPage';

export function App() {
    return (
        <div className='app-shell'>
            <header className='app-header'>
                <span className='app-header__logo' aria-hidden='true'>
                    🍲
                </span>
                <span className='app-header__title'>eMealPlan</span>
            </header>

            <main className='app-main'>
                <Routes>
                    <Route path='/' element={<DashboardPage />} />
                    <Route path='/meal-plan' element={<MealPlanPage />} />
                    <Route path='/cooking/:date' element={<CookingPlanPage />} />
                    <Route path='/shopping-list' element={<ShoppingListPage />} />
                    <Route path='/recipes' element={<RecipesPage />} />
                    <Route path='/recipes/new' element={<RecipeFormPage />} />
                    <Route path='/recipes/:id' element={<RecipeDetailPage />} />
                    <Route path='/recipes/:id/edit' element={<RecipeFormPage />} />
                </Routes>
            </main>

            <NavBar />
        </div>
    );
}
