import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, .5),
        rgba(255, 255, 255, .5)),
        url("https://www.cleanjuice.com/wp-content/uploads/2022/06/Acai-Berries-scaled.jpeg");
    background-position: center;
    background-size: cover;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    
`

export const Title = styled.h1`
    font-size: 1.8rem;
    font-weight: 300;
    font-family: Arial, Helvetica, sans-serif;
`

export const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`

export const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0 0 ;
    padding: 10px;
    border-radius: 5px;
    outline: none;
    border: 1px solid gray;
`

export const Agreement = styled.span`
    font-size: 1rem;
    margin: 20px 0;
    font-family: Arial, Helvetica, sans-serif;
    color: #444;
`

export const Button = styled.button`
    width: 40%;
    border: none;
    cursor: pointer;
    padding: 15px 20px;
    color: white;
    background-color: teal;
    font-size: 1rem;
    border-radius: 3px;
`