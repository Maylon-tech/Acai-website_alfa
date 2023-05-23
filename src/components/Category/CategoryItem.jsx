import React from 'react'
import { Content ,Image, Info, Title, Button, TitleChild } from './CategoryStyles'

const CategoryItem = ({ item }) => {

  return (
    <Content>
        <Image src={item.img} />
        <Info>
          <TitleChild>{item.title}</TitleChild>
          <Button>Shop Now</Button>
        </Info>
    </Content>
  )
}

export default CategoryItem