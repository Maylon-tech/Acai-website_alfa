import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import BannerImg from '../assets/images/acai banner 2.jpg'
import Banner from '../components/Banner/Banner'
import Hero from '../components/Hero/Hero'
import Categories from '../components/Category/Categories'
import Products from '../components/Products/Products'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Categories />
        <Banner img={BannerImg} /> 
        <Products />
        <Footer />
    </div>
  )
}

export default Home