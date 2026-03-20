// Samuel Dameg

import './App.css';
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import OrderPage from './pages/OrderPage';
import RegistrationPage from './pages/RegistrationPage';

function App() {
    return (
        <CartProvider>
            <div className="app-wrapper">
                <header className="app-header">
                    <div className="header-inner">
                        <div className="header-logo">
                            <div className="header-logo-icon">🛒</div>
                            Fresh<span>Cart</span>
                        </div>
                        <Navigation />
                    </div>
                </header>

                <main className="app-main">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/order" element={<OrderPage />} />
                        <Route path="/registration" element={<RegistrationPage />} />
                    </Routes>
                </main>
            </div>
        </CartProvider>
    );
}

export default App;
