import React from 'react'
import { Container, 
Wrapper, Title, 
Top, Bottom, 
TopButton, TopTexts, 
TopText, Info, 
Summary, 
Product,
ProductDetails,
PriceDetails,
Image,
Details,
ProductName
} from './index'
import Navbar from '../../components/Navbar/Navbar'
import Announcement from '../../components/Announcement/Announcement'
import Footer from '../../components/Footer/Footer'

const Cart = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
            <Wrapper>
                <Title>YOUR BAG</Title>

                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag (2)</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetails>
                                <Image />
                                <Details>
                                    <ProductName><b>Product:</b> Jesie thundder Shoes</ProductName>
                                </Details>
                            </ProductDetails>
                            <PriceDetails></PriceDetails>
                        </Product>
                    </Info>
                    <Summary>Summary</Summary>
                </Bottom>
            </Wrapper>

        <Footer />
    </Container>
  )
}

export default Cart