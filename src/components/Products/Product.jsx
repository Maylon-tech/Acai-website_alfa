import React from 'react'
import { Content, Icon, Image, Info, InfoTitle } from './ProductStyle'
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'

const Product = ({ item, title }) => {
  return (
    <Content>
        <Image src={item.img} />
        <Info>
            <InfoTitle>{item.title}</InfoTitle>
            <Icon>
                <ShoppingCartOutlined />           
                <SearchOutlined />            
                <FavoriteBorderOutlined />
            </Icon>
        </Info>
    </Content>
  )
}

export default Product