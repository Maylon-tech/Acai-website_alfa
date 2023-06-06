import React from 'react'
import cartImg from '../../assets/images/heroImg2.jpg'
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
ProductName,
ProductId,
ProductColor,
ProductSize,
ProductPrice,
ProductAmountContainer,
ProductAmount,
SumTitle,
SumItem,
SumItemText,
SumItemPrice,
Button
} from './index'
import Navbar from '../../components/Navbar/Navbar'
import Announcement from '../../components/Announcement/Announcement'
import Footer from '../../components/Footer/Footer'

const Cart = () => {
  return (
    <Container>
        <Navbar />
        {/* <Announcement /> */}
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
                                <Image src={cartImg} />
                                <Details>
                                    <ProductName><b>Product:</b> Jesie thundder Shoes</ProductName>
                                    <ProductId><b>ID:</b> 98765549223</ProductId>
                                    <ProductColor color="orange" />
                                    <ProductSize><b>Size:</b> 37.5</ProductSize>
                                </Details>
                            </ProductDetails>
                            
                            <PriceDetails>
                                <ProductAmountContainer>
                                    {/* <Add /> */}
                                    <ProductAmount> 2 </ProductAmount>
                                    {/* <Remove /> */}
                                </ProductAmountContainer>
                                <ProductPrice> $ 45</ProductPrice>
                            </PriceDetails>

                        </Product>
                        <hr />
                        <Product>
                            <ProductDetails>
                                <Image src={cartImg} />
                                <Details>
                                    <ProductName><b>Product:</b> Jesie thundder Shoes</ProductName>
                                    <ProductId><b>ID:</b> 98765549223</ProductId>
                                    <ProductColor color="orange" />
                                    <ProductSize><b>Size:</b> 37.5</ProductSize>
                                </Details>
                            </ProductDetails>
                            
                            <PriceDetails>
                                <ProductAmountContainer>
                                    {/* <Add /> */}
                                    <ProductAmount> 2 </ProductAmount>
                                    {/* <Remove /> */}
                                </ProductAmountContainer>
                                <ProductPrice> $ 45</ProductPrice>
                            </PriceDetails>

                        </Product>
                        <hr />
                        <Product>
                            <ProductDetails>
                                <Image src={cartImg} />
                                <Details>
                                    <ProductName><b>Product:</b> Jesie thundder Shoes</ProductName>
                                    <ProductId><b>ID:</b> 98765549223</ProductId>
                                    <ProductColor color="orange" />
                                    <ProductSize><b>Size:</b> 37.5</ProductSize>
                                </Details>
                            </ProductDetails>
                            
                            <PriceDetails>
                                <ProductAmountContainer>
                                    {/* <Add /> */}
                                    <ProductAmount> 2 </ProductAmount>
                                    {/* <Remove /> */}
                                </ProductAmountContainer>
                                <ProductPrice> $ 45</ProductPrice>
                            </PriceDetails>

                        </Product>
                    </Info>
                    <Summary>
                        <SumTitle>Order Summary</SumTitle>

                        <SumItem>
                            <SumItemText>Subtotal</SumItemText>
                            <SumItemPrice>$ 98</SumItemPrice>
                        </SumItem>

                        <SumItem>
                            <SumItemText>Estimate Shiping</SumItemText>
                            <SumItemPrice>$ 898</SumItemPrice>
                        </SumItem>

                        <SumItem>
                            <SumItemText>Shipping Discount</SumItemText>
                            <SumItemPrice>$ - 298</SumItemPrice>
                        </SumItem>

                        <SumItem>
                            <SumItemText type="total">Total</SumItemText>
                            <SumItemPrice>$ 698</SumItemPrice>
                        </SumItem>
                        <Button>Checkout Now</Button>
                    </Summary>
                </Bottom>
            </Wrapper>

        <Footer />
    </Container>
  )
}

export default Cart