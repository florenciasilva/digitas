import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom'
import firebase from 'firebase';
import Redeem from '../Reedem';
import Products from '../Products';
import styled from 'styled-components';

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
            <Nav>
                <UserName> Bienvenido {user.email}</UserName>
                <SignOut onClick={logOut}> Sign Out</SignOut>
            </Nav>
            <Container>
                <Redeem uid={user.uid} />
                <Products uid={user.uid} />
            </Container>
        </>
    );
};

const Nav = styled.nav`
    background-color: #E0FFFF;
    color: black;
    width: 100vw;
    height: 5vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0;
    padding: 0;
`

const SignOut = styled.button`
    background: transparent;
    border: 1.5px solid black;
    padding: .5em;
    font-weight: bold;
    letter-spacing: .2em;

`

const UserName = styled.h1`
    font-size: 1em;
    font-weight: normal;
    letter-spacing: .2em;
    border-bottom: 1.5px solid white;
`

const Container = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
`

export default withRouter(Home);