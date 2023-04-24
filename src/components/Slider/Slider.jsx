import React from 'react'
import { Arrow, Container, ImgContainer, InfoContainer, Wrapper } from './styles'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
const Slider = () => {
  return (
    <Container>
        <Arrow direction="left">
           <ArrowLeftOutlined />
        </Arrow>
        <Wrapper>
          <Image />
          <ImgContainer></ImgContainer>
          <InfoContainer></InfoContainer>
        </Wrapper>
        <Arrow direction="right">
            <ArrowRightOutlined />
        </Arrow>

    </Container>
  )
}

export default Slider