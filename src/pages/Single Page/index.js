import styled from 'styled-components'

export const Container = styled.div`
  border: 3px solid red;
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

export const FilterSizeOption = styled.option``

export const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`

export const Amount = styled.span`
  height: 40px;
  width: 40px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
  font-size: 1.1rem;
  font-family: Arial, Helvetica, sans-serif;
`

export const Button = styled.button`
  padding: 15px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.2rem;
  border: 1px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: lightgreen;
  }
`

export const Btn = styled.button`
  font-size: 1.7rem;
  color: #555;
  padding: .2rem .4rem;
  height: 40px;
  width: 40px;
  border-radius: 6px;
  cursor: pointer;
  transition: all .3s;

  &:hover {
    background-color: lightgray;
  }
`