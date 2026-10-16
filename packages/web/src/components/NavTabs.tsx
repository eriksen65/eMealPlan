import { useState, type MouseEvent } from 'react';

import { PAGE_PATHS, type AppPage } from '../utilities/pageRoutes';

export type { AppPage };

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

    function selectTab(event: MouseEvent<HTMLAnchorElement>, page: AppPage) {
        // Let the browser handle modified clicks (new tab/window).
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
        event.preventDefault();
        onChange(page);
        setMenuOpen(false);
    }

    return (
        <nav className='nav-tabs'>
            <div className='nav-tabs__items'>
                {TABS.map((tab) => (
                    <a
                        key={tab.id}
                        href={PAGE_PATHS[tab.id]}
                        className={`nav-tabs__item${active === tab.id ? ' nav-tabs__item--active' : ''}`}
                        aria-current={active === tab.id ? 'page' : undefined}
                        onClick={(event) => selectTab(event, tab.id)}>
                        {tab.label}
                    </a>
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
                        <a
                            key={tab.id}
                            href={PAGE_PATHS[tab.id]}
                            className={`nav-tabs__dropdown-item${active === tab.id ? ' nav-tabs__dropdown-item--active' : ''}`}
                            aria-current={active === tab.id ? 'page' : undefined}
                            onClick={(event) => selectTab(event, tab.id)}>
                            {tab.label}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}
