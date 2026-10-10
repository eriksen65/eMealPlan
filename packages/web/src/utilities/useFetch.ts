import { useEffect, useRef, useState } from 'react';

interface UseFetchResult<T> {
    data: T | undefined;
    error: Error | undefined;
    loading: boolean;
    setData: (value: T) => void;
    reload: () => void;
}

/**
 * Small generic data-fetching hook shared by every page: runs `loader` whenever `deps`
 * change, tracks loading/error state, and exposes `reload()` to refetch on demand
 * (e.g. after a mutation elsewhere invalidates the current data).
 */
export function useFetch<T>(loader: () => Promise<T>, deps: unknown[]): UseFetchResult<T> {
    const [data, setData] = useState<T>();
    const [error, setError] = useState<Error>();
    const [loading, setLoading] = useState(true);
    const [reloadToken, setReloadToken] = useState(0);
    const loaderRef = useRef(loader);
    loaderRef.current = loader;

    useEffect(() => {
        let cancelled = false;
        setLoading(true);
        setError(undefined);
        loaderRef
            .current()
            .then((result) => {
                if (!cancelled) setData(result);
            })
            .catch((err: unknown) => {
                if (!cancelled) setError(err instanceof Error ? err : new Error(String(err)));
            })
            .finally(() => {
                if (!cancelled) setLoading(false);
            });
        return () => {
            cancelled = true;
        };
        // deps is caller-controlled; loader is read via a ref so it doesn't need to be listed.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [...deps, reloadToken]);

    return { data, error, loading, setData, reload: () => setReloadToken((token) => token + 1) };
}
