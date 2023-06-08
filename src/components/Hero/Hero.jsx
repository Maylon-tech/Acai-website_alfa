import React from 'react'
import { 
  Container,
  ImageFloat,
  ImageOne,
  ImageTwo,
  ImageThree,
  InfoContent,
  Logo,
  Title,
  ButtonContent,
  ButtonDelivery,
  ButtonMobile
} from '.'

import heroImg from '../../assets/images/Hero.jpg'

import InfoLogo from '../../assets/images/logo.png'

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
          <img src={InfoLogo} alt="" />
        </Logo>
        <Title>Novos Sabores toda semana!</Title>

        <ButtonContent>
          <ButtonDelivery>
            Entrega
          </ButtonDelivery>
          <ButtonMobile>
            Mobile
          </ButtonMobile>
        </ButtonContent>
      </InfoContent>

    </Container>
  )
}

export default Hero