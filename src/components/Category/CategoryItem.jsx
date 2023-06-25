import React from 'react'
import { Content ,Image, Info, Button, TitleChild } from '.'
import { Link } from 'react-router-dom'

const CategoryItem = ({ item, id }) => {


  return (
    <Content>
      <Link to={"/singleItem/" + item.id}> 
          <Image src={item.img} />
          <Info>
            <TitleChild>{item.title}</TitleChild>
            <Button>Veja o Menu</Button>
          </Info>
      </Link> 
    </Content>
  )
}

export default CategoryItem