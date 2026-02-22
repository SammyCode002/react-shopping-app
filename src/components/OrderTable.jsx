// Samuel Dameg

import OrderRow from './OrderRow';

function OrderTable({ items }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item, index) => (
                    <OrderRow key={index} item={item} />
                ))}
            </tbody>
        </table>
    );
}

export default OrderTable;
