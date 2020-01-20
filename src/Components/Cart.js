import React from 'react';

const Cart = (props) => {
        if(props.products.length !== 0) {
            let totalCart = 0;
            const productList = props.products.map((product, i) => {
                totalCart = totalCart + parseInt(product.price)
                return (
                    <div key={i}>
                        <p>{product.name}</p>
                        <p>{product.price}</p>
                    </div>
                );
            });
            return (
                <>
                    {productList}
                    {totalCart}
                </>
            )
        } else {
            return (
                <p> empty </p>
            );
        };
    };

export default Cart;
