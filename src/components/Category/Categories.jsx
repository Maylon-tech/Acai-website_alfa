import React from 'react'
import { Container, DefaultContainer, Title } from '.'
import categories from '../../assets/data/category'
import CategoryItem from './CategoryItem'

const Categories = () => {
  return (
    <Container>
      <Title>Novidades da Semana</Title>
      <DefaultContainer>
          {
            categories.map(item => (
                      
                <CategoryItem item={item} key={item.id} />
             
            ))
          }
      </DefaultContainer>
    </Container>
  )
}

export default Categories