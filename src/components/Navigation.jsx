// Samuel Dameg

import { NavLink } from 'react-router-dom';

function Navigation({ cartCount }) {
    return (
        <nav className="nav-links">
            <NavLink
                to="/"
                end
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            >
                Home
            </NavLink>
            <NavLink
                to="/order"
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            >
                <span className="nav-cart-badge">
                    Order
                    {cartCount > 0 && (
                        <span className="cart-badge">{cartCount}</span>
                    )}
                </span>
            </NavLink>
            <NavLink
                to="/registration"
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            >
                Register
            </NavLink>
        </nav>
    );
}

export default Navigation;
