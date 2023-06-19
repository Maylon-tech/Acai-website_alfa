import React from 'react'
import { Container, Filter, FilterContainer, FilterText, Option, Select, Title } from '.'
import Navbar from '../../components/Navbar/Navbar'
import Banner from '../../components/Banner/Banner'
import Products from '../../components/Products/Products'
import Footer from '../../components/Footer/Footer'

import BannerImg from '../../assets/images/acai banner.jpeg'

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Banner img={BannerImg} />
      
      <FilterContainer>
        <Filter>
          <FilterText Text>Filtar por Produtos:</FilterText>
          <Select>
            <Option>Barry Bowls</Option>
            <Option>Banana Salad</Option>
            <Option>Acai Juice</Option>
            <Option>Ice soft cream</Option>
            <Option>Dessert with juice</Option>
            <Option>Acai plus all Barries</Option>
          </Select>
          <Select>
            <Option>
              Size: 
            </Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>Extra Big</Option>
          </Select>
        </Filter>

        <Filter>
          <FilterText>Separar por Categoria:</FilterText>
          <Select>
            <Option>
              Novidades
            </Option>
            <Option>Pacote Congelado</Option>
            <Option>Grade de Acai Juice</Option>
            <Option>Combo de Acai com Salgados</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />

      <Footer />
    </Container>
  )
}

export default ProductList