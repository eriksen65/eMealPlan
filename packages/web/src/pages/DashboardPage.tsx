import { Link } from 'react-router-dom';
import { getWeekStartDate, todayIsoDate } from '@emealplan/domain';

import { fetchDashboard } from '../api/dashboard';
import { fetchMealPlan } from '../api/mealPlan';
import { fetchRecipes } from '../api/recipes';
import { ErrorState, LoadingState } from '../components/RequestState';
import { useFetch } from '../utilities/useFetch';
import { capitalize, formatDisplayDate } from '../utilities/format';

export function DashboardPage() {
    const today = todayIsoDate();
    const weekStartDate = getWeekStartDate(today);

    const dashboard = useFetch(() => fetchDashboard(today), [today]);
    const mealPlan = useFetch(() => fetchMealPlan(weekStartDate), [weekStartDate]);
    const recipes = useFetch(() => fetchRecipes(), []);
    const recipeNameById = new Map((recipes.data ?? []).map((recipe) => [recipe.id, recipe.name]));

    if (dashboard.loading) return <LoadingState label='Loading today…' />;
    if (dashboard.error) return <ErrorState error={dashboard.error} />;
    if (!dashboard.data) return null;

    const { recipe, label, mealTime, progress, shoppingListPendingCount } = dashboard.data;
    const mealName = recipe?.name ?? label ?? 'Nothing planned yet';

    return (
        <section className='page dashboard'>
            <h1 className='page__title'>What are we eating today?</h1>

            <article className='card card--highlight'>
                <p className='eyebrow'>{capitalize(dashboard.data.weekday)} dinner</p>
                <h2 className='card__title'>{mealName}</h2>
                <p className='card__meta'>Ready at {mealTime}</p>

                {progress ? (
                    <>
                        <p className='card__meta'>
                            {progress.completedTasks} of {progress.totalTasks} steps done
                        </p>
                        {progress.nextTask && (
                            <p className='next-task'>
                                Next: <strong>{progress.nextTask.time}</strong> - {progress.nextTask.description}
                            </p>
                        )}
                        <Link className='button' to={`/cooking/${today}`}>
                            Open cooking plan
                        </Link>
                    </>
                ) : recipe ? (
                    <Link className='button' to={`/cooking/${today}`}>
                        Start cooking plan
                    </Link>
                ) : (
                    <Link className='button' to='/meal-plan'>
                        Plan tonight's dinner
                    </Link>
                )}
            </article>

            <Link to='/shopping-list' className='card card--link'>
                <span>🛒 Shopping list</span>
                <span className='badge'>{shoppingListPendingCount} to buy</span>
            </Link>

            <h2 className='section-title'>This week</h2>
            {mealPlan.loading && <LoadingState label='Loading week…' />}
            {mealPlan.error && <ErrorState error={mealPlan.error} />}
            {mealPlan.data && (
                <ul className='week-strip'>
                    {mealPlan.data.days.map((day) => (
                        <li key={day.date} className={day.date === today ? 'week-strip__item week-strip__item--today' : 'week-strip__item'}>
                            <Link to={`/cooking/${day.date}`}>
                                <span className='week-strip__weekday'>{capitalize(day.weekday).slice(0, 3)}</span>
                                <span className='week-strip__date'>{formatDisplayDate(day.date).split(',')[1]}</span>
                                <span className='week-strip__meal'>
                                    {day.label ?? (day.recipeId ? recipeNameById.get(day.recipeId) : undefined) ?? '—'}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}
