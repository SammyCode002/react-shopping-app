// Samuel Dameg

import { useState } from 'react';
import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi';

function SelectQuantity() {
    const [quantity, setQuantity] = useState(0);

    const increment = () => {
        if (quantity < 10) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="quantity-selector">
            <FiMinusCircle onClick={decrement} className="icon" />
            <span>{quantity}</span>
            <FiPlusCircle onClick={increment} className="icon" />
        </div>
    );
}

export default SelectQuantity;
