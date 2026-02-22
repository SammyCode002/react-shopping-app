// Samuel Dameg

import OrderTable from '../components/OrderTable';

function OrderPage({ items }) {
    return (
        <>
            <h2>Order Items</h2>
            <p>
                Select the quantity of each item you would like to order. 
                Use the + and - buttons to adjust the quantity (0-10).
            </p>
            <OrderTable items={items} />
        </>
    );
}

export default OrderPage;
