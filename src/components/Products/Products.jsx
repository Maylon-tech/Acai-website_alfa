import React from 'react'
import { Container } from './ProductStyle'
import popularProducts from '../../assets/data/popularPro'
import Product from './Product'

const Products = () => {
  return (
    <Container>
        {
            popularProducts.map(item => (
                <Product item={item} key={item.id} />
            ))
        }
    </Container>
  )
}

export default Products