import React, { useEffect, useState, Fragment } from 'react';
import firebase from 'firebase';
import Cart from './Cart';

const Products = () => {
    const [ products, setProducts ] = useState()
    const [ cart, setCart ] = useState([]);


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
            <Fragment key={i}>
                <p>{product.name}</p>
                <p>{product.price}</p>
                <button name={product.name} value={product.price} onClick={addToCart}>Add</button>
            </Fragment >
        )
    })
    return (
        <Fragment>
            <Cart products={cart} />
            {productList}
        </Fragment> 
    )
    } else {
        return (
            <p>loading</p>
        )
    }
}

export default Products