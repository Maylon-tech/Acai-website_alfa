import React from 'react'
import Navbar from '../components/Navbar/Navbar'

// import Announcement from '../components/Announcement/Announcement'
import Hero from '../components/Hero/Hero'
import Categories from '../components/Category/Categories'
import Products from '../components/Products/Products'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div>
        {/* <Announcement /> */}
        <Navbar />
        <Hero />
        <Categories />
        <Products />
        <Footer />
    </div>
  )
}

export default Home