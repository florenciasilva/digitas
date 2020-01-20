import React from 'react';
import firebase from 'firebase';
import { PrimaryBtn } from '../style';

const Cart = (props) => {
    const purchase = (event) => {
        event.persist();
        const db = firebase.firestore();
        const ref = db.collection('users').doc(props.uid);
        ref.get().then((res) => {
            return res.data()
        })
        .then(user => {
            
            if (user.tokens - parseInt(event.target.value) < 0) {
                alert('insufficient tokens')
            } else {
                let remainingBalance = user.tokens - parseInt(event.target.value)
                props.products.forEach(product => {
                    ref.set({
                        tokens: user.tokens - remainingBalance,
                        purchased: [...user.purchased, product],
                        uid: user.uid,
                        coupons: user.coupons
                    });
                    alert('Purchase successful')
                })
            }
        })
        .catch( err => console.log(err.message));
        
    }


        if(props.products.length !== 0) {
            let totalCart = 0;
            const productList = props.products.map((product, i) => {
                totalCart = totalCart + parseInt(product.price)
                return (
                    <div key={i}>
                        <p>{product.name}</p>
                        <p>$ {product.price}</p>
                    </div>
                );
            });
            return (
                <>
                    {productList}
                    <p>Total: $ {totalCart}</p>
                    <PrimaryBtn onClick={purchase} value={totalCart}> Purchase </PrimaryBtn>
                </>
            )
        } else {
            return (
                <p> empty </p>
            );
        };
    };

export default Cart;
