import React from 'react'
import { Content ,Image, Info, Button, TitleChild } from '.'

const CategoryItem = ({ item, id }) => {


  return (
    <Content>
      {/* <Link to={"/sorvetes/" + item.id}> */}
          <Image src={item.img} />
          <Info>
            <TitleChild>{item.title}</TitleChild>
            <Button>Veja o Menu</Button>
          </Info>
      {/* </Link> */}
    </Content>
  )
}

export default CategoryItem