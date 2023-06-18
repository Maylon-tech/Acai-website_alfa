import React from 'react'
import { Container, ImageBanner } from './index'

const Banner = ({ img }) => {
  return (
    <Container>
      <ImageBanner src={img} alt="Image"/>
    </Container>
  )
}

export default Banner