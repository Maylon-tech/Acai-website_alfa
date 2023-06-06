import styled from 'styled-components'

export const Container = styled.div`
    background: rgb(204,160,232);
  background: linear-gradient(79deg, rgba(204,160,232,1) 40%, rgba(221,125,167,0.927608543417367) 80%);
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

export const Product = styled.div`
    display: flex;
    justify-content: space-between;
    border: 2px solid orange;
    margin: 1.5rem;
`

export const ProductDetails = styled.div`
    flex: 2;
    display: flex;
`

export const PriceDetails = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px solid purple;
`

export const Image = styled.img`
    width: 200px;  
    height: 150px;
    object-fit: cover;  
`

export const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 2px solid white;
`

export const ProductName = styled.span`
    
`

export const ProductId = styled.span`
    
`

export const ProductColor = styled.span`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
`

export const ProductSize = styled.span`
    
`

export const ProductAmountContainer = styled.span`
    display: flex;
    align-items: center;
`
export const ProductAmount = styled.span`
    font-size: 24px;
    margin: 5px;
`

export const ProductPrice= styled.span`
    font-size: 30px;
    font-weight: 200;
`

export const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    padding: 20px;
    border-radius: 10px;
    height: 50vh;
`

export const SumTitle = styled.h1`
    font-weight: 200;
`

export const SumItem = styled.div`
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "500"};
    font-size: ${props => props.type === "total" && "24px"};
`

export const SumItemText = styled.span`
    
`

export const SumItemPrice = styled.span`
    
`

export const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: #111;
    color: white;
    font-weight: 600;
    border-radius: 4px;
    border: none;
    cursor: pointer;
`