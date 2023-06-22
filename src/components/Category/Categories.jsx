import React from 'react'
import { Container, DefaultContainer, Title } from '.'
import categories from '../../assets/data/category'
import CategoryItem from './CategoryItem'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <Container>
      <Title>Novidades da Semana</Title>
      <DefaultContainer>
          {
            categories.map(item => (
              <Link to={"/sorvetes/" + item.id}>         
                <CategoryItem item={item} key={item.id} />
              </Link>  
            ))
          }
      </DefaultContainer>
    </Container>
  )
}

export default Categories