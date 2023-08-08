import styled from 'styled-components'

export const Container = styled.div`
    background: #eee;
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
    padding: 1rem;
    border-radius: 4px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === "filled" && "none"};
    border: 2px solid gray;
    color: ${props => props.type === "filled" && "none"};
`

export const TopTexts = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.1rem;
    color: #333;
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
    justify-content: space-evenly;
    margin: 1.5rem;
    font-family: Arial, Helvetica, sans-serif;
`

export const ProductDetails = styled.div`
    flex: 1;
    display: flex;
`

export const PriceDetails = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Image = styled.img`
    width: 200px;  
    height: 190px;
    object-fit: cover;  
`

export const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
`

export const ProductName = styled.span`
    margin-bottom: .8rem;
`

export const ProductId = styled.span`
    margin:.8rem 0;
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
    background-color: lightgray;
    padding: 20px;
    border-radius: 10px;
    height: 60vh;
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
    font-size: 1.1rem;
    margin: 1.2rem 0;
    font-weight: 600;
    border-radius: 4px;
    border: none;
    cursor: pointer;
`