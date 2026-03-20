// Samuel Dameg

import React from 'react';
import OrderRow from './OrderRow';

function OrderTable({ items }) {
    return (
        <div className="product-grid">
            {items.map(item => (
                <OrderRow key={item.id} item={item} />
            ))}
        </div>
    );
}

export default React.memo(OrderTable);
