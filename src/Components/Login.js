import React, { useState } from 'react';
import firebase from 'firebase';
import { withRouter } from 'react-router-dom';
import { Form, Input, PrimaryBtn } from '../style';

const Login = (props) => {
    const [ credentials, setCredentials ] = useState({email: '', password: ''});

    const handleInputChange = (event) => {
        setCredentials({...credentials, [event.target.type]: event.target.value});
    };

    const handleLogin = (credentials) => {
        firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
        .then(res => props.history.push('/home'))
        .catch(err => console.log(err));
    };

    return(
        <>
            <Form>
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