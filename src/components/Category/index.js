import styled from "styled-components";
import { mobile } from "../../responsive";

// Container father from Categories.jsx
export const Container = styled.div`
    display: flex;
    gap: 1.5rem;
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    background: rgb(204,160,232);
    background: linear-gradient(79deg, rgba(204,160,232,1) 40%, rgba(221,125,167,0.927608543417367) 80%);
    ${mobile({  width: '50px', })}
`

//  Container Padrado  para todos os Componentes.
export const DefaultContainer = styled.div`
    max-width: 1180px;
    margin: 0 auto;
    padding: 1rem;

    display: flex;
    flex-wrap: wrap;
    gap: 1.2rem;
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
    margin-left: 4rem;
`

export const TitleChild = styled.h1`
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 2rem;
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