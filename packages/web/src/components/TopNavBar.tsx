import logo from '../assets/logo.png';
import { NavTabs, type AppPage } from './NavTabs';
import { PAGE_PATHS } from '../utilities/pageRoutes';

interface TopNavBarProps {
    activePage: AppPage;
    onChangePage: (page: AppPage) => void;
}

export function TopNavBar({ activePage, onChangePage }: TopNavBarProps) {
    return (
        <header className='top-nav'>
            <a
                href={PAGE_PATHS.home}
                className={`top-nav__brand${activePage === 'home' ? ' top-nav__brand--active' : ''}`}
                aria-current={activePage === 'home' ? 'page' : undefined}
                aria-label='eMealPlan – gå til forsiden'
                onClick={(event) => {
                    // Let the browser handle modified clicks (new tab/window).
                    if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
                    event.preventDefault();
                    onChangePage('home');
                }}>
                <img className='top-nav__logo' src={logo} alt='eMealPlan logo' />
                <div className='top-nav__text'>
                    <span className='top-nav__title'>eMealPlan</span>
                    <span className='top-nav__tagline'>Plan. Cook. Enjoy.</span>
                </div>
            </a>
            <NavTabs active={activePage} onChange={onChangePage} />
            <div className='top-nav__spacer' aria-hidden='true' />
        </header>
    );
}
