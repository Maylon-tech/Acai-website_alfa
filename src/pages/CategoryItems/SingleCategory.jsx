import React from 'react'
import { useParams } from 'react-router-dom'
import { 
  Container, 
  HeaderItem, 
  BackBtn, 
  ContainerItems, 
  ContainerFilter,
  ButtonsBox,
  ContentImages 
} from './index'
import categories from '../../assets/data/category'

const Sorvetes = () => {
    const {id} = useParams()
    const sorvetes = categories.find(item => item.id === parseInt(id))
    const { img, title } = sorvetes

  return (
    <Container>
      <HeaderItem>
        <BackBtn></BackBtn>
      </HeaderItem>

      <ContainerItems>
        <h1>Sorvetes pages Rendering </h1>
        <h3>{title}</h3>
        <img src={img} alt="img" />
      </ContainerItems>

      <ContainerFilter>
        <ButtonsBox>

        </ButtonsBox>
        <ContentImages></ContentImages>
      </ContainerFilter>
    </Container>
  )
}

export default Sorvetes

