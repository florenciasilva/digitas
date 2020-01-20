import React from 'react';
import Login from '../Login';
import Register from '../Register';
import { Container } from '../../style';
import styled from 'styled-components';
import { Section, Heading } from '../../style';

const UserAuth = () => {
    return(
        <ContainerAuth>
        <Heading>Login or Register</Heading>
            <Login />
            <Register />
        </ContainerAuth>
    );
};

const ContainerAuth = styled(Container)`
    flex-direction: column;
`


export default UserAuth;