import React, { useState } from 'react';
import firebase from 'firebase';
import { withRouter } from 'react-router-dom';
import { Heading, Section, Form, Input, PrimaryBtn } from '../style';


const Register = (props) => {
    const [ credentials, setCredentials ] = useState({ email: '', password: ''});

    const handleInputChange = (event) => {
        setCredentials({...credentials, [event.target.type]: event.target.value});
    };

    const handleRegister = (credentials) => {
        firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.password)
        .then(res => {
            const db = firebase.firestore();
            db.collection('users').doc(res.user.uid).set({
                uid: res.user.uid,
            });
            props.history.push('/home')
        })
        .catch(err => console.log(err));
    };

    return(
        <Form method="post">
            <label htmlFor="email">Write your email here</label>
            <Input type="email" required id="email" onChange={handleInputChange} />
            <label htmlFor="password">Write your password here</label>
            <Input type="password" required id="password" onChange={handleInputChange} />
            <PrimaryBtn onClick={() => handleRegister(credentials)}>Register</PrimaryBtn>
        </Form>
    );
};

export default withRouter(Register);