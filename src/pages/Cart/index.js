import styled from 'styled-components'

export const Container = styled.div`
    background-color: lightgray;
`

export const Wrapper = styled.div`
    padding: 20px;
`
export const Title = styled.h1`
    font-weight: 300;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
`

export const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

export const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === "filled" && "none"};
    background-color: ${props => props.type === "filled" ? "black" : "transparent"};
    color: ${props => props.type === "filled" && "none"};
`

export const TopTexts = styled.div`
  
`

export const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px;
`

export const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`
export const Info = styled.div`
    flex: 3;
`

export const Summary = styled.div`
    flex: 1;
`

export const Product = styled.div`
    
`

export const ProductDetails = styled.div`
    
`

export const PriceDetails = styled.div`
    
`

export const Image = styled.img`
    
`

export const Details = styled.p`
    
`

export const ProductName = styled.h1`
    
`