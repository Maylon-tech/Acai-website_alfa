import React from 'react'
import { Circle, Content, Icon, Image, Info } from './ProductStyle'
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'

const Product = ({ item }) => {
  return (
    <Content>
        <Circle />
        <Image src={item.img} />
        <Info>
            <Icon>
                <ShoppingCartOutlined />
            </Icon>
            <Icon>
                <SearchOutlined />
            </Icon>
            <Icon>
                <FavoriteBorderOutlined />
            </Icon>
        </Info>
    </Content>
  )
}

export default Product