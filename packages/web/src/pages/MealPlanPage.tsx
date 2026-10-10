import { useState } from 'react';
import { getWeekDates, getWeekStartDate, todayIsoDate } from '@emealplan/domain';

import { assignMealPlanDay, fetchMealPlan } from '../api/mealPlan';
import { fetchRecipes } from '../api/recipes';
import { ErrorState, LoadingState } from '../components/RequestState';
import { useFetch } from '../utilities/useFetch';
import { capitalize, formatDisplayDate } from '../utilities/format';

function addDays(isoDate: string, days: number): string {
    const date = new Date(`${isoDate}T00:00:00Z`);
    date.setUTCDate(date.getUTCDate() + days);
    return date.toISOString().slice(0, 10);
}

export function MealPlanPage() {
    const [weekStartDate, setWeekStartDate] = useState(() => getWeekStartDate(todayIsoDate()));

    const mealPlan = useFetch(() => fetchMealPlan(weekStartDate), [weekStartDate]);
    const recipes = useFetch(() => fetchRecipes(), []);

    async function handleAssign(date: string, recipeId: string) {
        if (recipeId === '__leftovers__') {
            const updated = await assignMealPlanDay(weekStartDate, date, { recipeId: null, label: 'Leftovers' });
            mealPlan.setData(updated);
            return;
        }
        if (recipeId === '') {
            const updated = await assignMealPlanDay(weekStartDate, date, { recipeId: null, label: null });
            mealPlan.setData(updated);
            return;
        }
        const updated = await assignMealPlanDay(weekStartDate, date, { recipeId, label: null });
        mealPlan.setData(updated);
    }

    async function handleMealTimeChange(date: string, mealTime: string) {
        const updated = await assignMealPlanDay(weekStartDate, date, { mealTime });
        mealPlan.setData(updated);
    }

    return (
        <section className='page'>
            <h1 className='page__title'>This week's meal plan</h1>

            <div className='week-nav'>
                <button type='button' onClick={() => setWeekStartDate((current) => addDays(current, -7))}>
                    ← Previous week
                </button>
                <span>{formatDisplayDate(weekStartDate)}</span>
                <button type='button' onClick={() => setWeekStartDate((current) => addDays(current, 7))}>
                    Next week →
                </button>
            </div>

            {mealPlan.loading && <LoadingState label='Loading meal plan…' />}
            {mealPlan.error && <ErrorState error={mealPlan.error} />}

            {mealPlan.data && (
                <ul className='day-plan-list'>
                    {getWeekDates(weekStartDate).map((date) => {
                        const day = mealPlan.data?.days.find((candidate) => candidate.date === date);
                        const selectedValue = day?.label === 'Leftovers' ? '__leftovers__' : (day?.recipeId ?? '');
                        return (
                            <li key={date} className='day-plan-list__item'>
                                <div className='day-plan-list__header'>
                                    <strong>{capitalize(day?.weekday ?? '')}</strong>
                                    <span>{formatDisplayDate(date)}</span>
                                </div>
                                <select value={selectedValue} onChange={(event) => handleAssign(date, event.target.value)}>
                                    <option value=''>— Nothing planned —</option>
                                    <option value='__leftovers__'>Leftovers</option>
                                    {recipes.data?.map((recipe) => (
                                        <option key={recipe.id} value={recipe.id}>
                                            {recipe.name}
                                        </option>
                                    ))}
                                </select>
                                <label className='day-plan-list__time'>
                                    Ready at
                                    <input
                                        type='time'
                                        value={day?.mealTime ?? '18:00'}
                                        onChange={(event) => handleMealTimeChange(date, event.target.value)}
                                    />
                                </label>
                            </li>
                        );
                    })}
                </ul>
            )}
        </section>
    );
}
