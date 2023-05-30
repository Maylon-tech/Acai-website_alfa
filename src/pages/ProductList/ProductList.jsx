import React from 'react'
import { Container, Filter, FilterContainer, FilterText, Option, Select, Title } from './styled'
import Navbar from '../../components/Navbar/Navbar'
import Announcement from '../../components/Announcement/Announcement'
import Products from '../../components/Products/Products'
import Footer from '../../components/Footer/Footer'

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />

      <Title>Geladinho</Title>
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
            <Option>Bonus Weekend</Option>
            <Option>Night Special</Option>
            <Option>Descount cupon</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />

      <Footer />
    </Container>
  )
}

export default ProductList