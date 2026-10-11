export type AppPage = 'recipes' | 'ingredients';

interface NavTabsProps {
    active: AppPage;
    onChange: (page: AppPage) => void;
}

const TABS: { id: AppPage; label: string }[] = [
    { id: 'recipes', label: 'Opskrifter' },
    { id: 'ingredients', label: 'Ingredienser' }
];

export function NavTabs({ active, onChange }: NavTabsProps) {
    return (
        <nav className='nav-tabs'>
            {TABS.map((tab) => (
                <button
                    key={tab.id}
                    type='button'
                    className={`nav-tabs__item${active === tab.id ? ' nav-tabs__item--active' : ''}`}
                    aria-current={active === tab.id ? 'page' : undefined}
                    onClick={() => onChange(tab.id)}>
                    {tab.label}
                </button>
            ))}
        </nav>
    );
}
