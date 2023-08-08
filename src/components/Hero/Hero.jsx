import React from 'react'
import { 
  Container,
  InfoContent,
  Logo,
  Title,
  ButtonContent,
  ButtonDelivery,
  ButtonMobile,
  TextContent,
  TitleRight,
  SubTitle,
  MiniImgContainer
} from '.'

import MiniImg01 from '../../assets/images/hero-nutriente.png'
import MiniImg02 from '../../assets/images/hero-nutriente02.jpg'
import MiniImg03 from '../../assets/images/hero-nutriente03.jpg'
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

        <ButtonContent>
          <ButtonDelivery onClick={() => navigate("/ProductList")}>
            Produtos
          </ButtonDelivery>
          <ButtonMobile>
            Delivery
          </ButtonMobile>
        </ButtonContent>

      </InfoContent>

      <TextContent>
        <TitleRight>Rico em nutrientes, leve e natural.</TitleRight>

        <MiniImgContainer>
          <img src={MiniImg01} alt="nutriente01" />
          <img src={MiniImg02} alt="nutriente02" />
          <img src={MiniImg03} alt="nutriente03" />
        </MiniImgContainer>

        <SubTitle>
        Encontre e descubra <strong>Açaí Space</strong> &mais perto de você!
        </SubTitle>
      </TextContent>
    </Container>
  )
}

export default Hero