import React from 'react'
import { Content ,Image, Info, Button, TitleChild } from '.'

const CategoryItem = ({ item }) => {

  return (
    <Content>
        <Image src={item.img} />
        <Info>
          <TitleChild>{item.title}</TitleChild>
          <Button>Veja o Menu</Button>
        </Info>
    </Content>
  )
}

export default CategoryItem