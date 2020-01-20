import React, { useState, useEffect } from 'react';
import firebase from 'firebase';

const Redeem = (props) => {
    const [ coupon, setCoupon ] = useState();
    const [ tokens, setTokens ] = useState();

    const handleOnChange = (event) => {
        setCoupon(event.target.value)
    }
    
    const redeemCoupon = () => {
        const db = firebase.firestore();
        const ref = db.collection('coupons').doc(coupon);
        ref.get().then(doc => {
            if (doc.exists) {
                db.collection('users').doc(props.uid).get().then((user) => {
                    db.collection('users').doc(props.uid).set({
                        uid: props.uid,
                        tokens: user.data().tokens + doc.data().coupon,
                        coupons: [...user.data().coupons, coupon]
                    });
                });
            } else {
                console.log("No such document!");
            }
        }).catch(err => console.log(err.message));
    }

    const checkTokens = () => {
        const db = firebase.firestore();
        const ref = db.collection('users').doc(props.uid);

        ref.get()
        .then((querySnapshot) => {
            setTokens(querySnapshot.data().tokens)
        });
    };

    return (
        <>
            <label htmlFor="redeem"> Redeem your coupon </label>
            <input type="number" id="redeem" onChange={handleOnChange} />
            <button onClick={redeemCoupon}>Redeem</button>

            <button onClick={checkTokens}>Check Tokens</button>
            <p>{tokens}</p>
        </>
    );
};

export default Redeem;