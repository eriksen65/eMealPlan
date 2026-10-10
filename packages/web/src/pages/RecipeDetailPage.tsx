import { Link, useNavigate, useParams } from 'react-router-dom';

import { deleteRecipe, fetchRecipe } from '../api/recipes';
import { ErrorState, LoadingState } from '../components/RequestState';
import { useFetch } from '../utilities/useFetch';
import { formatTotalTime } from '../utilities/format';

export function RecipeDetailPage() {
    const { id = '' } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const recipe = useFetch(() => fetchRecipe(id), [id]);

    async function handleDelete() {
        if (!window.confirm('Delete this recipe? This cannot be undone.')) return;
        await deleteRecipe(id);
        navigate('/recipes');
    }

    if (recipe.loading) return <LoadingState label='Loading recipe…' />;
    if (recipe.error) return <ErrorState error={recipe.error} />;
    if (!recipe.data) return null;

    const { data } = recipe;

    return (
        <section className='page'>
            <div className='page__header'>
                <h1 className='page__title'>{data.name}</h1>
                <div className='page__actions'>
                    <Link to={`/recipes/${data.id}/edit`} className='button'>
                        Edit
                    </Link>
                    <button type='button' className='button button--ghost' onClick={handleDelete}>
                        Delete
                    </button>
                </div>
            </div>

            <p>{data.description}</p>
            <p className='card__meta'>
                {formatTotalTime(data)} total · {data.portions} portions
            </p>

            <h2 className='section-title'>Ingredients</h2>
            <ul className='ingredient-list'>
                {data.ingredients.map((ingredient) => (
                    <li key={ingredient.id}>
                        {ingredient.quantity} {ingredient.unit} {ingredient.name}
                    </li>
                ))}
            </ul>

            <h2 className='section-title'>Steps</h2>
            <ol className='step-list'>
                {[...data.steps]
                    .sort((a, b) => a.order - b.order)
                    .map((step) => (
                        <li key={step.id}>
                            {step.instruction} <span className='card__meta'>({step.durationMinutes} min)</span>
                        </li>
                    ))}
            </ol>

            {data.notes && (
                <>
                    <h2 className='section-title'>Notes</h2>
                    <p>{data.notes}</p>
                </>
            )}
        </section>
    );
}
