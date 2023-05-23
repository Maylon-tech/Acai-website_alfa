import React from 'react'
import { Container, DefaultContainer, Title } from './ProductStyle'
import popularProducts from '../../assets/data/popularPro'
import Product from './Product'

const Products = () => {
  return (
    <Container>

      <DefaultContainer>

        <Title>Produto e Novidades</Title>

          {
              popularProducts.map(item => (
                  <Product item={item} key={item.id} />
              ))
          }

      </DefaultContainer>

    </Container>
  )
}

export default Products