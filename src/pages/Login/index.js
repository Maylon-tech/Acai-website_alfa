import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, .5),
        rgba(255, 255, 255, .5)),
        url("https://post.healthline.com/wp-content/uploads/2021/09/male-boy-holding-acai-berries-in-hands-732-549-feature-thumb-732x549.jpg");
    background-position: center;
    background-size: cover;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Wrapper = styled.div`
    width: 25%;
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
    flex-direction: column;
`

export const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin:10px 0;
    padding: 10px;
    border-radius: 5px;
    outline: none;
    border: 1px solid gray;
`

export const Link = styled.a`
    margin: 5px 0;
    font-size: .8rem;
    font-family: Arial, Helvetica, sans-serif;
    cursor: pointer;
    text-decoration: underline;
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
    margin: 1rem 0;
`
