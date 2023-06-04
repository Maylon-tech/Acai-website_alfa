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

import img1 from '../../assets/images/heroImg1.jpg'
import img2 from '../../assets/images/heroImg2.jpg'
import img3 from '../../assets/images/heroImg3.jpeg'
import InfoLogo from '../../assets/images/logo.png'

const Hero = () => {
  return (
    <Container>
      
      <ImageFloat>
        <ImageOne>
          <img src={img1} alt="img" />
        </ImageOne>
        <ImageTwo>
          <img src={img2} alt="img" />
        </ImageTwo>
        <ImageThree>
          <img src={img3} alt="img" />
        </ImageThree>
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