// Samuel Dameg

import OrderTable from '../components/OrderTable';

function OrderPage({ items, cart, cartCount, cartTotal, onUpdate, onClear }) {
    return (
        <>
            <div className="page-header">
                <h2 className="page-title">Order Items</h2>
                <p className="page-subtitle">
                    Tap + and − to adjust quantities. Your total updates instantly.
                </p>
            </div>

            <OrderTable items={items} cart={cart} onUpdate={onUpdate} />

            {cartCount > 0 && (
                <div className="cart-bar">
                    <div className="cart-bar-items">
                        <strong>{cartCount}</strong> {cartCount === 1 ? 'item' : 'items'} in cart
                    </div>
                    <div className="cart-bar-total">
                        ${cartTotal.toFixed(2)}
                    </div>
                    <button className="cart-bar-clear" onClick={onClear}>
                        Clear
                    </button>
                </div>
            )}
        </>
    );
}

export default OrderPage;
