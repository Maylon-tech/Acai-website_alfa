import React from 'react'
import { Container } from './styles'
import categories from '../../assets/data/category'
import CategoryItem from './CategoryItem'

const Categories = () => {
  return (
    <Container>
        {
          categories.map(item => (
            <CategoryItem item={item} key={item.id} />
          ))
        }
    </Container>
  )
}

export default Categories