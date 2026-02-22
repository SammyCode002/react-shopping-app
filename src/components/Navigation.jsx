// Samuel Dameg

import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/order">Order</Link>
            <Link to="/registration">Registration</Link>
        </nav>
    );
}

export default Navigation;
