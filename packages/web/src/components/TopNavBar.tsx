import logo from '../assets/logo.png';
import { NavTabs, type AppPage } from './NavTabs';

interface TopNavBarProps {
    activePage: AppPage;
    onChangePage: (page: AppPage) => void;
}

export function TopNavBar({ activePage, onChangePage }: TopNavBarProps) {
    return (
        <header className='top-nav'>
            <div className='top-nav__brand'>
                <img className='top-nav__logo' src={logo} alt='eMealPlan logo' />
                <div className='top-nav__text'>
                    <span className='top-nav__title'>eMealPlan</span>
                    <span className='top-nav__tagline'>Plan. Cook. Enjoy.</span>
                </div>
            </div>
            <NavTabs active={activePage} onChange={onChangePage} />
        </header>
    );
}
