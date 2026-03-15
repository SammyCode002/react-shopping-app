// Samuel Dameg

import SelectQuantity from './SelectQuantity';

function OrderRow({ item, quantity, onUpdate }) {
    return (
        <div className={`product-card${quantity > 0 ? ' in-cart' : ''}`}>
            <div className="product-emoji">{item.emoji}</div>
            <div className="product-info">
                <div className="product-category">{item.category}</div>
                <div className="product-name">{item.name}</div>
                <div className="product-price">${item.price.toFixed(2)}</div>
            </div>
            <SelectQuantity
                quantity={quantity}
                onChange={(qty) => onUpdate(item.id, qty)}
            />
        </div>
    );
}

export default OrderRow;
