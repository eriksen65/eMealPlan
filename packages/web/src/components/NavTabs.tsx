import { useState } from 'react';

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
    const [menuOpen, setMenuOpen] = useState(false);

    function selectTab(page: AppPage) {
        onChange(page);
        setMenuOpen(false);
    }

    return (
        <nav className='nav-tabs'>
            <div className='nav-tabs__items'>
                {TABS.map((tab) => (
                    <button
                        key={tab.id}
                        type='button'
                        className={`nav-tabs__item${active === tab.id ? ' nav-tabs__item--active' : ''}`}
                        aria-current={active === tab.id ? 'page' : undefined}
                        onClick={() => selectTab(tab.id)}>
                        {tab.label}
                    </button>
                ))}
            </div>

            <button
                type='button'
                className='nav-tabs__menu-button'
                aria-label='Åbn menu'
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((open) => !open)}>
                <span className='nav-tabs__menu-icon' aria-hidden='true'>
                    ☰
                </span>
            </button>

            {menuOpen && (
                <div className='nav-tabs__dropdown'>
                    {TABS.map((tab) => (
                        <button
                            key={tab.id}
                            type='button'
                            className={`nav-tabs__dropdown-item${active === tab.id ? ' nav-tabs__dropdown-item--active' : ''}`}
                            aria-current={active === tab.id ? 'page' : undefined}
                            onClick={() => selectTab(tab.id)}>
                            {tab.label}
                        </button>
                    ))}
                </div>
            )}
        </nav>
    );
}
