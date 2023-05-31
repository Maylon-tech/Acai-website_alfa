import React from 'react'
import { Container, Desc, FilterColor, FilterSize, FilterSizeOption, FilterTitle, Image, ImgContainer, InfoContainer, Price, Title, Wrapper } from './index'
import Navbar from '../../components/Navbar/Navbar'
import Announcement from '../../components/Announcement/Announcement'
import Footer from '../../components/Footer/Footer'
import { Filter, FilterContainer } from '../Single Page'
import imageHero from '../../assets/images/heroImg2.jpg'

const ProductSinglePage = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />

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
                    <AountContainer>
                        <Remove />
                        <Amount> 1 </Amount>
                        <Add />
                    </AountContainer>
                    <Button> Add to Cart</Button>
                </AddContainer>


            </InfoContainer>
        </Wrapper>

        <Footer />
    </Container>
  )
}

export default ProductSinglePage