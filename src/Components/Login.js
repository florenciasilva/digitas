import React, { useState } from 'react';
import firebase from 'firebase';
import { withRouter } from 'react-router-dom';


const Login = (props) => {
    const [ credentials, setCredentials ] = useState({email: '', password: ''});

    const handleInputChange = (event) => {
        setCredentials({...credentials, [event.target.type]: event.target.value});
    };

    const handleLogin = (credentials) => {
        firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
        .then(res => console.log(res))
        .catch(err => console.log(err));
        props.history.push('/home');
    };

    return(
        <>
            <label htmlFor="email"> Email </label>
            <input type="email" required id="email" onChange={handleInputChange} />
            <label htmlFor="email"> Password </label>
            <input type="password" required id="password" onChange={handleInputChange} />
            <button onClick={() => handleLogin(credentials)}> Login </button>
        </>
    );
};

export default withRouter(Login);