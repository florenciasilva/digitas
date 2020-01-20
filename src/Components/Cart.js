import React, { useEffect } from 'react';

const Cart = (props) => {

    if(props.products.length !== 0) {
        return props.products.map((product, i) => {
            return (
                <div key={i}>
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                </div>
            );
        });
    } else {
        return (
            <p> empty </p>
        );
    };
}

export default Cart;
