import React, { useState } from 'react'
import { Arrow, Button, Container, Desc, Image, ImgContainer, InfoContainer, Title, Wrapper } from './styles'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'

import { sliderItems } from '../data'

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0)
  const handleClick = (direction) => {}


  return (
    <Container>
        <Arrow direction="left" onClick={handleClick("left")}>
           <ArrowLeftOutlined />
        </Arrow>

        <Wrapper>
          {
            sliderItems.map((item) => (

              <Slider bg={item.bg}>
                <ImgContainer>
                  <Image src={item.img} />
                </ImgContainer>            
                <InfoContainer>
                  <Title>{item.title}</Title>
                  <Desc>{item.desc}</Desc>
                  <Button>Show Now</Button>
                </InfoContainer>
              </Slider>

            ))
          }
         
        </Wrapper>

        <Arrow direction="right" onClick={handleClick("right")}>
            <ArrowRightOutlined />
        </Arrow>

    </Container>
  )
}

export default Slider