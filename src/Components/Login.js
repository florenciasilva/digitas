import React, { useState } from 'react';
import firebase from 'firebase';
import { withRouter } from 'react-router-dom';
import { Heading, Section, Form, Input, PrimaryBtn } from '../style';

const Login = (props) => {
    const [ credentials, setCredentials ] = useState({email: '', password: ''});

    const handleInputChange = (event) => {
        setCredentials({...credentials, [event.target.type]: event.target.value});
    };

    const handleLogin = (e, credentials) => {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
        .then(res => props.history.push('/home'))
        .catch(err => console.log(err));
    };

    return(
        <>

            <Form method="post">
                <label htmlFor="email">Write your email here</label>
                <Input type="email" required id="email" onChange={handleInputChange} />
                <label htmlFor="password">Write your password here</label>
                <Input type="password" required id="password" onChange={handleInputChange} />
                <PrimaryBtn onClick={() => handleLogin(credentials)}>Log In</PrimaryBtn>
            </Form>
    </>
    );
};



export default withRouter(Login);