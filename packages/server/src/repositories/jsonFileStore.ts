import { mkdir, readFile, rename, writeFile } from 'node:fs/promises';
import path from 'node:path';

/**
 * A minimal JSON-file-backed collection store, keyed by `id`.
 * Good enough for the MVP's single-household data volume; swap for a real database
 * later by implementing the same repository interfaces against it instead.
 */
export class JsonFileStore<T extends { id: string }> {
    private readonly filePath: string;
    private cache: T[] | undefined;

    constructor(dataDir: string, fileName: string) {
        this.filePath = path.join(dataDir, fileName);
    }

    async list(): Promise<T[]> {
        return [...(await this.load())];
    }

    async getById(id: string): Promise<T | undefined> {
        return (await this.load()).find((item) => item.id === id);
    }

    async upsert(item: T): Promise<T> {
        const items = await this.load();
        const index = items.findIndex((existing) => existing.id === item.id);
        if (index === -1) {
            items.push(item);
        } else {
            items[index] = item;
        }
        await this.persist(items);
        return item;
    }

    async remove(id: string): Promise<boolean> {
        const items = await this.load();
        const next = items.filter((item) => item.id !== id);
        const removed = next.length !== items.length;
        if (removed) await this.persist(next);
        return removed;
    }

    private async load(): Promise<T[]> {
        if (this.cache) return this.cache;
        try {
            const raw = await readFile(this.filePath, 'utf-8');
            this.cache = JSON.parse(raw) as T[];
        } catch (error) {
            if (isNotFoundError(error)) {
                this.cache = [];
            } else {
                throw error;
            }
        }
        return this.cache;
    }

    private async persist(items: T[]): Promise<void> {
        this.cache = items;
        await mkdir(path.dirname(this.filePath), { recursive: true });
        const tmpPath = `${this.filePath}.tmp`;
        await writeFile(tmpPath, JSON.stringify(items, null, 2), 'utf-8');
        await rename(tmpPath, this.filePath);
    }
}

function isNotFoundError(error: unknown): error is NodeJS.ErrnoException {
    return Boolean(error && typeof error === 'object' && 'code' in error && (error as { code: unknown }).code === 'ENOENT');
}
