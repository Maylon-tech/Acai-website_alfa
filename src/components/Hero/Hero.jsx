import React from 'react'
import { 
  Container,
  ImageFloat,
  ImageOne,
  InfoContent,
  Logo,
  Title,
  ButtonContent,
  ButtonDelivery,
  ButtonMobile
} from '.'

import heroImg from '../../assets/images/Hero-removebg-preview.png'

const Hero = () => {
  return (
    <Container>
      
      <ImageFloat>
        <ImageOne>
          <img src={heroImg} alt="img" />
        </ImageOne>        
      </ImageFloat>

      <InfoContent>
        <Logo>
          <h1>Amazon</h1>
        </Logo>
        <Title>Novos Sabores toda semana!</Title>

        <ButtonContent>
          <ButtonDelivery>
            Produtos
          </ButtonDelivery>
          <ButtonMobile>
            Delivery
          </ButtonMobile>
        </ButtonContent>
      </InfoContent>

    </Container>
  )
}

export default Hero