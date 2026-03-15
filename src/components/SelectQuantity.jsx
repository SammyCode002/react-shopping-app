// Samuel Dameg

import { FiMinusCircle, FiPlusCircle } from 'react-icons/fi';

function SelectQuantity({ quantity, onChange }) {
    const increment = () => { if (quantity < 10) onChange(quantity + 1); };
    const decrement = () => { if (quantity > 0) onChange(quantity - 1); };

    return (
        <div className="qty-selector">
            <button
                className="qty-btn"
                onClick={decrement}
                disabled={quantity === 0}
                aria-label="Decrease quantity"
            >
                <FiMinusCircle />
            </button>
            <span className="qty-value">{quantity}</span>
            <button
                className="qty-btn"
                onClick={increment}
                disabled={quantity === 10}
                aria-label="Increase quantity"
            >
                <FiPlusCircle />
            </button>
        </div>
    );
}

export default SelectQuantity;
