import React from 'react'
import { Container, DefaultContainer, Title } from './ProductStyle'
import popularProducts from '../../assets/data/popularPro'
import Product from './Product'

const Products = () => {
  return (
    <Container>

      <Title>Produtos</Title>
      <DefaultContainer>


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