import styled from "styled-components";

// Container father from Categories.jsx
export const Container = styled.div`
    display: flex;
    gap: 1.5rem;
    max-width: 1200px;
    margin: 0 auto;
`

// Content Son from CategoriesItem.jsx
export const Content = styled.div`
    flex: 1;
    height: 70vh;
    margin: 1rem 0;
    position: relative;
    
`
export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
`

export const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 10px;
`

export const Title = styled.h1`
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 2rem;
    margin-bottom: 1.5rem;
`

export const Button = styled.button`
    padding: 1rem;
    border: none;
    background-color: #eee;
    color: #222;
    cursor: pointer;
    font-size: 1.2rem;
    border-radius: 5px;
    font-weight: bold;
`