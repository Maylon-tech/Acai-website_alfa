import React, { useState } from 'react'
import { Content, Icon, Image, ImageContainer, Info, InfoTitle } from '.'
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'

const Product = ({ item, title }) => {
  const [heart, setHeart] = useState(false)

  const handleActive = () => {
    setHeart(heart)
  }




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
                <FavoriteBorderOutlined 
                  
                  onClick={() => handleActive(alert("OK"))} 
                />
            </Icon>
        </Info>
    </Content>
  )
}

export default Product