import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  background-color: #eee;

    display: flex;
    flex-direction: column;

  img {
    width: 100px;
  }
`
export const HeaderItem = styled.div`
   
`

export const BackBtn = styled.div``

export const ContainerItems = styled.div`
 
    display: flex;

    img {
      width: 300px;
    }
`

export const ImageLeft = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ImageProd = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`


export const ContentRight = styled.div`
  flex: 1;
  
`

export const Description = styled.p`
  color: #555;
  font-size: 1.1rem;
  line-height: 1.5;
  font-family: Arial, Helvetica, sans-serif;
  padding: 1rem 1.5rem;
`

export const OptionsContent = styled.ol`
  list-style: decimal;
  padding: 1rem;
  margin-top: 2rem;
  width: 90%;
  margin: auto;
`

export const OptionItem = styled.li`
  color: #444;
  font-size: 1.2rem;
  margin: 1.2rem 0;
  font-family: Arial, Helvetica, sans-serif;
`

export const Buttons = styled.div`
  padding: 1.5rem 0;
  width: 90%;
  margin: auto;
  display: flex;
  gap: 2rem;
`

export const AddCart = styled.button`
  cursor: pointer;
  padding: .8rem 1.1rem;
  border: none;
  border-radius: 8px;
  color: #fff;
  background-color: purple;
  font-size: 1.2rem;
  transition: all .3s ease-in-out;

  &:hover {
    background-color: blue;
  }
`

export const WishList = styled.button`
  cursor: pointer;
  padding: .8rem 1.1rem;
  border: none;
  border-radius: 8px;
  color: #fff;
  background-color: purple;
  font-size: 1.2rem;
  transition: all .3s ease-in-out;

  &:hover {
    background-color: orangered;
  }
`




export const ContainerFilter = styled.div`
    border: 2px soliid orange;
`

export const ButtonsBox = styled.div``

export const ContentImages = styled.div``

export const Containe = styled.div``