import { NavLink } from 'react-router-dom';

const NAV_ITEMS: Array<{ to: string; label: string; icon: string; end: boolean }> = [
    { to: '/', label: 'Today', icon: '🍽️', end: true },
    { to: '/meal-plan', label: 'Week', icon: '📅', end: false },
    { to: '/shopping-list', label: 'Shopping', icon: '🛒', end: false },
    { to: '/recipes', label: 'Recipes', icon: '📖', end: false }
];

export function NavBar() {
    return (
        <nav className='nav-bar' aria-label='Primary'>
            {NAV_ITEMS.map((item) => (
                <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.end}
                    className={({ isActive }) => `nav-bar__item${isActive ? ' nav-bar__item--active' : ''}`}>
                    <span className='nav-bar__icon' aria-hidden='true'>
                        {item.icon}
                    </span>
                    <span>{item.label}</span>
                </NavLink>
            ))}
        </nav>
    );
}
