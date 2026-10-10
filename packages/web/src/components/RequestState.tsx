interface LoadingStateProps {
    label?: string;
}

export function LoadingState({ label = 'Loading…' }: LoadingStateProps) {
    return <p className='state state--loading'>{label}</p>;
}

interface ErrorStateProps {
    error: Error;
}

export function ErrorState({ error }: ErrorStateProps) {
    return <p className='state state--error'>Something went wrong: {error.message}</p>;
}
