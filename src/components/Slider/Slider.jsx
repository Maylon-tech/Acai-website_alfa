import React from 'react'
import { Arrow, Container } from './styles'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
const Slider = () => {
  return (
    <Container>
        <Arrow>
           <ArrowLeftOutlined />
        </Arrow>
        <Arrow>
            <ArrowRightOutlined />
        </Arrow>

    </Container>
  )
}

export default Slider