import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import styled from 'styled-components';
import { PrimaryBtn } from '../style';

const Redeem = (props) => {
    const [ coupon, setCoupon ] = useState();
    const [ tokens, setTokens ] = useState();

    const handleOnChange = (event) => {
        setCoupon(event.target.value)
    }
    
    const redeemCoupon = (e) => {
        e.preventDefault();
        const db = firebase.firestore();
        const ref = db.collection('coupons').doc(coupon);
        ref.get().then(doc => {
            if (doc.exists) {
                db.collection('users').doc(props.uid).get().then((user) => {
                    db.collection('users').doc(props.uid).set({
                        uid: props.uid,
                        tokens: user.data().tokens + doc.data().coupon,
                        coupons: [...user.data().coupons, coupon],
                        purchased: user.data().purchased
                    });
                });
            } else {
                console.log("No such document!");
            }
        }).catch(err => console.log(err.message));
    }

    const checkTokens = (e) => {
        e.preventDefault();
        const db = firebase.firestore();
        const ref = db.collection('users').doc(props.uid);

        ref.get()
        .then((querySnapshot) => {
            setTokens(querySnapshot.data().tokens)
        });
    };

    return (
        <>
        <Container>
        <Form>
            <Label htmlFor="redeem"> Redeem your coupon </Label>
            <Input type="number" id="redeem" onChange={handleOnChange} />
            <RedeemBtn onClick={redeemCoupon}>Redeem</RedeemBtn>
        </Form>
        <PrimaryBtn onClick={checkTokens}>Check Tokens</PrimaryBtn>
        <Tokens>{tokens}</Tokens>
        </Container>
        </>
    );
};


const Form = styled.form`
    width: 20vw;
    display: flex;
    flex-direction: column;
`

const Label = styled.label`
    letter-spacing: .2em;
`

const Input = styled.input`
    width: 20vw
`

const Tokens = styled.p`
    width: 3vw;
    margin: 1em;
    background-color: #E0FFFF;
    text-align: center;
    margin-top: -1em;
`

const Container = styled.aside`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 29vw;
    flex-direction: column;
`

const RedeemBtn = styled(PrimaryBtn)`
    width: 5vw;
    margin: 1em;
    align-self: center;
`

export default Redeem;