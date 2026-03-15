// Samuel Dameg

import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import OrderPage from './pages/OrderPage';
import RegistrationPage from './pages/RegistrationPage';
import items from './data/items';

function App() {
  const [cart, setCart] = useState({});

  const updateCart = (itemId, quantity) => {
    setCart(prev => ({ ...prev, [itemId]: quantity }));
  };

  const clearCart = () => setCart({});

  const cartCount = Object.values(cart).reduce((sum, q) => sum + q, 0);
  const cartTotal = items.reduce((sum, item) => sum + (cart[item.id] || 0) * item.price, 0);

  return (
    <div className="app-wrapper">
      <header className="app-header">
        <div className="header-inner">
          <div className="header-logo">
            <div className="header-logo-icon">🛒</div>
            Fresh<span>Cart</span>
          </div>
          <Navigation cartCount={cartCount} />
        </div>
      </header>

      <main className="app-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/order"
            element={
              <OrderPage
                items={items}
                cart={cart}
                cartCount={cartCount}
                cartTotal={cartTotal}
                onUpdate={updateCart}
                onClear={clearCart}
              />
            }
          />
          <Route path="/registration" element={<RegistrationPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
