import React from 'react'
import { Content ,Image, Info, Title, Button } from './styles'

const CategoryItem = ({ item }) => {

  return (
    <Content>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>Shop Now</Button>
        </Info>
    </Content>
  )
}

export default CategoryItem