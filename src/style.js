import styled from 'styled-components';

export const PrimaryBtn = styled.button`
    background-color: #E0FFFF;
    border: none;
    border: 1.5px solid black;
    padding: .5em;
    font-weight: bold;
    letter-spacing: .2em;
    margin: 2em;
`

export const Heading = styled.h1`
    align-self: center;
    font-size: 2rem;
    text-transform: lowercase;
    margin-top: 5rem;
    letter-spacing: .2rem;
`


export const Container = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
`


export const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

export const Form = styled.article`
    display: flex;
    flex-direction: column;
`

export const Input = styled.input`
    margin: 1rem 0 1rem 0;
    padding: .4rem;
    border: none;
    border-bottom: .3rem solid  #E0FFFF;
    border-radius: 7px;
`