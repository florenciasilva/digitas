import React, { useState } from 'react';
import firebase from 'firebase';
import { withRouter } from 'react-router-dom';


const Register = (props) => {
    const [ credentials, setCredentials ] = useState({ email: '', password: ''});

    const handleInputChange = (event) => {
        setCredentials({...credentials, [event.target.type]: event.target.value});
    };

    const handleRegister = (credentials) => {
        firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.password)
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
            <button onClick={() => handleRegister(credentials)}> Register </button>
        </>
    );
};

export default withRouter(Register);