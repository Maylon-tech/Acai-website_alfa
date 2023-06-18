import React from 'react'
import { AddContainer, Amount, AmountContainer, Btn, Button, Container, Desc, FilterColor, FilterSize, FilterSizeOption, FilterTitle, Image, ImgContainer, InfoContainer, Price, Title, Wrapper } from './index'
import Navbar from '../../components/Navbar/Navbar'
// import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'
import { Filter, FilterContainer } from '../Single Page'
import imageHero from '../../assets/images/heroImg2.jpg'

const ProductSinglePage = () => {
  return (
    <Container>
        <Navbar />
        {/* <Banner /> */}

        <Wrapper>
            <ImgContainer>
                <Image src={imageHero}  alt='imageHero' />
            </ImgContainer>

            <InfoContainer>
                <Title>Produto especial do Mes</Title>
                <Desc>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quis repudiandae ipsum temporibus nisi dolores beatae at sunt dolor architecto quae voluptatum eius,iure reiciendis, 
                    neque sit porro. Soluta, fugiat. Cupiditate!
                </Desc>
                <Price> $ 30</Price>

                <FilterContainer>

                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black" />
                        <FilterColor color="darkblue" />
                        <FilterColor color="grey" />
                    </Filter>
                    
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                        </FilterSize>
                    </Filter>

                </FilterContainer>

                <AddContainer>
                    <AmountContainer>
                        <Btn> - </Btn>
                        <Amount> 1 </Amount>
                        <Btn> + </Btn>
                    </AmountContainer>
                    <Button> Add to Cart</Button>
                </AddContainer>


            </InfoContainer>
        </Wrapper>

        <Footer />
    </Container>
  )
}

export default ProductSinglePage