import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom'
import firebase from 'firebase';
import Redeem from '../Reedem';
import Products from '../Products';

const Home = (props) => {
    const [ user, setUser ] = useState({});

    const checkUser = () => {
        firebase.auth().onAuthStateChanged((user) => {
          if(user == null || user == undefined) {
            props.history.push("/");
          } else {
              setUser(user)
            }
        });
    };
    
    useEffect(() => {
        checkUser();
    });
    
    const logOut = () => {
        firebase.auth().signOut().then(() => console.log('log out'))
        .catch(err => console.log(err))
    }

    return (
        <>
            <p> Bienvenido {user.email}</p>
            <button onClick={logOut}> signOut</button>
            <Redeem uid={user.uid}/>
            <Products />
        </>
    );
};

export default withRouter(Home);