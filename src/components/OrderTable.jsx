// Samuel Dameg

import OrderRow from './OrderRow';

function OrderTable({ items, cart, onUpdate }) {
    return (
        <div className="product-grid">
            {items.map(item => (
                <OrderRow
                    key={item.id}
                    item={item}
                    quantity={cart[item.id] || 0}
                    onUpdate={onUpdate}
                />
            ))}
        </div>
    );
}

export default OrderTable;
