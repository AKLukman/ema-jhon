import React from 'react';

const Cart = (props) => {
    const { cart } = props;
    const total = cart.reduce((previous, product) => previous + product.price, 0);
    return (
        <div>
            <h3>Order summary</h3>
            <p>Items ordered {cart.length}</p>
            <p>Total: {total}</p>
        </div>
    );
};

export default Cart;