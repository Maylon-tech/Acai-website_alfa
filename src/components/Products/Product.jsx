import React from 'react'
import { Content, Icon, Image, ImageContainer, Info, InfoTitle } from './ProductStyle'
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'

const Product = ({ item, title }) => {
  return (
    <Content>
        <ImageContainer>
          <Image src={item.img} />
        </ImageContainer>
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