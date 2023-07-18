import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { 
  Container, 
  HeaderItem, 
  BackBtn, 
  ContainerItems, 
  ContainerFilter,
  ButtonsBox,
  ContentImages, 
  ImageLeft,
  ContentRight,
  ImageProd,
  Description,
  OptionsContent,
  OptionItem,
  Buttons,
  AddCart,
  WishList
} from './index'
import categories from '../../assets/data/category'

const SingleCategory = () => {
    const {id} = useParams()
    const sorvetes = categories.find(item => item.id === parseInt(id))
    const { img, title } = sorvetes

  return (
    <Container>
      <HeaderItem>
      <Link to="/">
        <BackBtn>Voltar</BackBtn>
      </Link>
      </HeaderItem>

      <ContainerItems>

        <ImageLeft>        
          <ImageProd src={img} />
        </ImageLeft>

        <ContentRight>          
          <h3>{title}</h3>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            distinctio non quos, modi sed fuga temporibus laudantium eos officia 
            consectetur ipsum, blanditiis necessitatibus ducimus quis iure deserunt
            quas, eligendi inventore itaque tempore id iusto! Eveniet.
          </Description>
          <OptionsContent>
            <OptionItem> More Fluits</OptionItem>
            <OptionItem> More Yorguts</OptionItem>
            <OptionItem> More Flakes and Aveia</OptionItem>
          </OptionsContent>

          <Buttons>
            <AddCart>Add to Cart</AddCart>
            <WishList>Save to Wish List</WishList>
          </Buttons>

        </ContentRight>

      </ContainerItems>

      <ContainerFilter>
        <ButtonsBox>

        </ButtonsBox>
        <ContentImages></ContentImages>
      </ContainerFilter>
    </Container>
  )
}

export default SingleCategory

