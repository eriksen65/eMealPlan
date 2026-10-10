import { useParams } from 'react-router-dom';

import { fetchCookingPlan, setTaskDone } from '../api/cookingPlan';
import { fetchRecipe } from '../api/recipes';
import { LoadingState } from '../components/RequestState';
import { TaskChecklist } from '../components/TaskChecklist';
import { useFetch } from '../utilities/useFetch';
import { formatDisplayDate } from '../utilities/format';

export function CookingPlanPage() {
    const { date = '' } = useParams<{ date: string }>();

    const cookingPlan = useFetch(() => fetchCookingPlan(date), [date]);
    const recipe = useFetch(
        () => (cookingPlan.data ? fetchRecipe(cookingPlan.data.recipeId) : Promise.resolve(undefined)),
        [cookingPlan.data?.recipeId]
    );

    async function handleToggle(taskId: string, done: boolean) {
        const updated = await setTaskDone(date, taskId, done);
        cookingPlan.setData(updated);
    }

    if (cookingPlan.loading) return <LoadingState label='Loading cooking plan…' />;
    if (cookingPlan.error) {
        return (
            <section className='page'>
                <h1 className='page__title'>{formatDisplayDate(date)}</h1>
                <p className='state'>Nothing is planned for this day yet. Head to the meal plan to add a recipe.</p>
            </section>
        );
    }
    if (!cookingPlan.data) return null;

    return (
        <section className='page'>
            <h1 className='page__title'>{recipe.data?.name ?? 'Cooking plan'}</h1>
            <p className='page__subtitle'>
                {formatDisplayDate(date)} · ready at {cookingPlan.data.mealTime}
            </p>
            <TaskChecklist tasks={cookingPlan.data.tasks} onToggle={handleToggle} />
        </section>
    );
}
