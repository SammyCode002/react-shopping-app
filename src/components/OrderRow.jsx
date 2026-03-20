// Samuel Dameg

import React, { useCallback } from 'react';
import { useCart } from '../context/CartContext';
import SelectQuantity from './SelectQuantity';

function OrderRow({ item }) {
    const { cart, updateCart } = useCart();
    const quantity = cart[item.id] || 0;

    const handleChange = useCallback(
        (qty) => updateCart(item.id, qty),
        [item.id, updateCart]
    );

    return (
        <div className={`product-card${quantity > 0 ? ' in-cart' : ''}`}>
            <div className="product-emoji">{item.emoji}</div>
            <div className="product-info">
                <div className="product-category">{item.category}</div>
                <div className="product-name">{item.name}</div>
                <div className="product-price">${item.price.toFixed(2)}</div>
            </div>
            <SelectQuantity quantity={quantity} onChange={handleChange} />
        </div>
    );
}

export default React.memo(OrderRow);
