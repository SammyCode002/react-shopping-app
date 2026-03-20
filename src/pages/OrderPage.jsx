// Samuel Dameg

import { useState, useMemo } from 'react';
import { useCart } from '../context/CartContext';
import OrderTable from '../components/OrderTable';
import items from '../data/items';

const CATEGORIES = ['All', ...new Set(items.map(i => i.category))];

function OrderPage() {
    const { cartCount, cartTotal, clearCart } = useCart();
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredItems = useMemo(
        () => activeCategory === 'All' ? items : items.filter(i => i.category === activeCategory),
        [activeCategory]
    );

    return (
        <>
            <div className="page-header">
                <h2 className="page-title">Order Items</h2>
                <p className="page-subtitle">
                    Tap + and − to adjust quantities. Your total updates instantly.
                </p>
            </div>

            <div className="category-filters">
                {CATEGORIES.map(cat => (
                    <button
                        key={cat}
                        className={`filter-btn${activeCategory === cat ? ' active' : ''}`}
                        onClick={() => setActiveCategory(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <OrderTable items={filteredItems} />

            {cartCount > 0 && (
                <div className="cart-bar">
                    <div className="cart-bar-items">
                        <strong>{cartCount}</strong> {cartCount === 1 ? 'item' : 'items'} in cart
                    </div>
                    <div className="cart-bar-total">
                        ${cartTotal.toFixed(2)}
                    </div>
                    <button className="cart-bar-clear" onClick={clearCart}>
                        Clear
                    </button>
                </div>
            )}
        </>
    );
}

export default OrderPage;
