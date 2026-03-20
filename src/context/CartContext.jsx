// Samuel Dameg

import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import items from '../data/items';

const CartContext = createContext(null);

export function CartProvider({ children }) {
    const [cart, setCart] = useState({});

    const updateCart = useCallback((itemId, quantity) => {
        setCart(prev => ({ ...prev, [itemId]: quantity }));
    }, []);

    const clearCart = useCallback(() => setCart({}), []);

    const cartCount = useMemo(
        () => Object.values(cart).reduce((sum, q) => sum + q, 0),
        [cart]
    );

    const cartTotal = useMemo(
        () => items.reduce((sum, item) => sum + (cart[item.id] || 0) * item.price, 0),
        [cart]
    );

    return (
        <CartContext.Provider value={{ cart, cartCount, cartTotal, updateCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error('useCart must be used inside CartProvider');
    return ctx;
}
