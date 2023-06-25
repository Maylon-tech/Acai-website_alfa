import React from 'react'

import BannerImg from '../assets/images/acai banner 2.jpg'

import Banner from '../components/Banner/Banner'
import Hero from '../components/Hero/Hero'
import Categories from '../components/Category/Categories'
import Products from '../components/Products/Products'
import TemplateDefault from '../components/TemplateDefault'

const Home = () => {
  return (
    <TemplateDefault>
        
        <Hero />
        <Categories />
        <Banner img={BannerImg} /> 
        <Products />
        
    </TemplateDefault>
  )
}

export default Home