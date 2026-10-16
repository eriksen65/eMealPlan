export type AppPage = 'home' | 'recipes' | 'ingredients';

export const PAGE_PATHS: Record<AppPage, string> = {
    home: '/',
    recipes: '/opskrifter',
    ingredients: '/ingredienser'
};

export function pageFromPath(pathname: string): AppPage {
    const normalized = pathname.replace(/\/+$/, '');
    if (normalized === PAGE_PATHS.ingredients) return 'ingredients';
    if (normalized === PAGE_PATHS.recipes) return 'recipes';
    return 'home';
}
