import React, { useEffect, useState, Fragment } from 'react';
import firebase from 'firebase';
import Cart from './Cart';
import styled from 'styled-components';
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import { PrimaryBtn } from '../style';

const Products = (props) => {
    const [ products, setProducts ] = useState()
    const [ cart, setCart ] = useState([]);
    const [showDialog, setShowDialog] = useState(false);
    const open = () => setShowDialog(true);
    const close = () => setShowDialog(false);

    const getProducts = () => {
        const db = firebase.firestore();
        const ref = db.collection('products').doc('d4YTETPqomgQTDyCCc9o')
        ref.get()
        .then(doc => {
            setProducts(doc.data().arrayOfProducts)
        });
    };

    const addToCart = (event) => {
        const product = {
            name: event.target.name,
            price: event.target.value
        };
        setCart([...cart, product])
    };
    
    useEffect(() => {
        getProducts();
    }, [cart])


    if(products) {
    const productList = products.map((product, i) => {
        return (
            <ProductCard key={i}>
                <p>{product.name}</p>
                <p>$ {product.price}</p>
                <PrimaryBtn name={product.name} value={product.price} onClick={addToCart}>Add</PrimaryBtn>
            </ProductCard >
        )
    })
    return (
        <ProductContainer>
            <PrimaryBtn onClick={open}>Show Cart</PrimaryBtn>
            <Dialog isOpen={showDialog} onDismiss={close}>
                <Cart products={cart} uid={props.uid} />
                <PrimaryBtn onClick={close}>Okay</PrimaryBtn>
            </Dialog>
            {productList}
        </ProductContainer> 
    )
    } else {
        return (
            <p>loading</p>
        )
    }
}

const ProductCard= styled.article`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 30vw;
`

const ProductContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70vw;
`


export default Products