import styled from 'styled-components'

export const Container = styled.div`
  
`

export const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  gap: 1rem;
`

export const ImgContainer = styled.div`
  flex: 1;
  height: 450px;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

export const InfoContainer = styled.div`
  flex: 1;
  border: 3px solid black;
  padding: 2rem;
`

export const Title = styled.h1`
  font-weight: 200;
`

export const Desc = styled.p`
  margin: 20px 0;
  color: #222;
  font-family: Arial, Helvetica, sans-serif;
`

export const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`


export const FilterContainer = styled.div`
    border: 3px solid orange;
    width: 50%;
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
`

export const Filter = styled.span`
  display: flex;
  align-items: center;
  margin-left: 20px;
`

export const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`
export const FilterColor= styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 5px;
  cursor: pointer;
`

export const FilterSize = styled.select`
  padding: 0%.5rem;
`



export const FilterSizeOption = styled.option`

`

export const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
`

export const AmountContainer = styled.div`

`

export const Amount = styled.span`

`

export const Button = styled.button`

`