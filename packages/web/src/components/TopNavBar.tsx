import logo from '../assets/logo.png';

export function TopNavBar() {
    return (
        <header className='top-nav'>
            <div className='top-nav__brand'>
                <img className='top-nav__logo' src={logo} alt='eMealPlan logo' />
                <div className='top-nav__text'>
                    <span className='top-nav__title'>eMealPlan</span>
                    <span className='top-nav__tagline'>Plan. Cook. Enjoy.</span>
                </div>
            </div>
        </header>
    );
}
