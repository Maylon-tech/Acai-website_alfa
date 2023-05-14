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
} from './styles'

import img1 from '../../assets/images/heroImg1.jpg'
import img2 from '../../assets/images/heroImg2.jpg'
import img3 from '../../assets/images/heroImg3.jpeg'
import InfoLogo from '../../assets/images/logo.png'

const Hero = () => {
  return (
    <Container>

      <ImageFloat>
        <ImageOne>
          <img src={img1} alt="" />
        </ImageOne>
        <ImageTwo>
          <img src={img2} alt="" />
        </ImageTwo>
        <ImageThree>
          <img src={img3} alt="" />
        </ImageThree>
      </ImageFloat>

      <InfoContent>
        <Logo>
          <img src={InfoLogo} alt="" />
        </Logo>
        <Title></Title>
        <ButtonContent>
          <ButtonDelivery>

          </ButtonDelivery>
          <ButtonMobile>

          </ButtonMobile>
        </ButtonContent>
      </InfoContent>

    </Container>
  )
}

export default Hero