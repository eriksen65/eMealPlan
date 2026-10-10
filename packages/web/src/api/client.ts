/** Thin fetch wrapper: JSON in, JSON out, throws a readable error on non-2xx responses. */
export async function apiRequest<TResponse>(path: string, init?: RequestInit): Promise<TResponse> {
    const response = await fetch(`/api${path}`, {
        headers: { 'Content-Type': 'application/json' },
        ...init
    });

    if (!response.ok) {
        const body = await response.json().catch(() => undefined);
        const message = (body as { message?: string } | undefined)?.message ?? response.statusText;
        throw new Error(`Request to ${path} failed (${response.status}): ${message}`);
    }

    if (response.status === 204) return undefined as TResponse;
    return (await response.json()) as TResponse;
}

export function apiGet<TResponse>(path: string): Promise<TResponse> {
    return apiRequest<TResponse>(path);
}

export function apiPost<TResponse>(path: string, body: unknown): Promise<TResponse> {
    return apiRequest<TResponse>(path, { method: 'POST', body: JSON.stringify(body) });
}

export function apiPut<TResponse>(path: string, body: unknown): Promise<TResponse> {
    return apiRequest<TResponse>(path, { method: 'PUT', body: JSON.stringify(body) });
}

export function apiPatch<TResponse>(path: string, body: unknown): Promise<TResponse> {
    return apiRequest<TResponse>(path, { method: 'PATCH', body: JSON.stringify(body) });
}

export function apiDelete<TResponse>(path: string): Promise<TResponse> {
    return apiRequest<TResponse>(path, { method: 'DELETE' });
}
