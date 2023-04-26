import React from 'react'
import { Arrow, Button, Container, Desc, Image, ImgContainer, InfoContainer, Title, Wrapper } from './styles'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'

const Slider = () => {
  return (
    <Container>
        <Arrow direction="left">
           <ArrowLeftOutlined />
        </Arrow>

        <Wrapper>
          <Slider bg="f5fafd">
            <ImgContainer>
              <Image />
            </ImgContainer>            
            <InfoContainer>
              <Title>Summer Sal</Title>
              <Desc>Don't Compromise on style.! Get flat 30% off for New Arrivals.</Desc>
              <Button>Show Now</Button>
            </InfoContainer>
          </Slider>

          <Slider bg="f5fafd">
            <ImgContainer>
              <Image />
            </ImgContainer>            
            <InfoContainer>
              <Title>Winter Sal</Title>
              <Desc>Don't Compromise on style.! Get flat 30% off for New Arrivals.</Desc>
              <Button>Show Now</Button>
            </InfoContainer>
          </Slider>

          <Slider bg="f5fafd">
            <ImgContainer>
              <Image />
            </ImgContainer>            
            <InfoContainer>
              <Title>Popular Sal</Title>
              <Desc>Don't Compromise on style.! Get flat 30% off for New Arrivals.</Desc>
              <Button>Show Now</Button>
            </InfoContainer>
          </Slider>
        </Wrapper>

        <Arrow direction="right">
            <ArrowRightOutlined />
        </Arrow>

    </Container>
  )
}

export default Slider