import React from 'react'
import Navbar from '../components/Navbar/Navbar'

import Announcement from '../components/Announcement/Announcement'
import Hero from '../components/Hero/Hero'
import Categories from '../components/Category/Categories'
import Products from '../components/Products/Products'

const Home = () => {
  return (
    <div>
      <Announcement />
        <Navbar />
        <Hero />
        <Categories />
        <Products />
    </div>
  )
}

export default Home