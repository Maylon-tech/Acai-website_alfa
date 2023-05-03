import React from 'react'
import { Container, Wrapper, Card } from './styles'
import { imagesItems } from '../../assets/data'

const Image = () => {
  return (
    <Container>
        <Wrapper>
          {
            imagesItems.map((item) => (
              <Card>
                <h2>{item.title}</h2>
              </Card>
            ))
          }
        </Wrapper>
    </Container>
  )
}

export default Image