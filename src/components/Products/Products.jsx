import React from 'react'
import { Container, Title } from './ProductStyle'
import popularProducts from '../../assets/data/popularPro'
import Product from './Product'

const Products = () => {
  return (
    <Container>
      <Title>Produto e Novidades</Title>
        {
            popularProducts.map(item => (
                <Product item={item} key={item.id} />
            ))
        }
    </Container>
  )
}

export default Products