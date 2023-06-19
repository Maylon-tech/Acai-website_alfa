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

import heroImg from '../../assets/images/Acai_logo_hero-removebg-preview.png'
import { useNavigate } from 'react-router-dom'

const Hero = () => {

  const navigate = useNavigate()

  return (
    <Container>
      <InfoContent>
        <Logo>
          <img src={heroImg} alt="img" />
        </Logo>

        <Title>Acai Restaurant!</Title>

        <ButtonContent>
          <ButtonDelivery onClick={() => navigate("/ProductList")}>
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