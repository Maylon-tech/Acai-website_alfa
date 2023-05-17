import React from 'react'
import Navbar from '../components/Navbar/Navbar'

import Announcement from '../components/Announcement/Announcement'
import Hero from '../components/Hero/Hero'
import Categories from '../components/Category/Categories'

const Home = () => {
  return (
    <div>
      <Announcement />
        <Navbar />
        <Hero />
        <Categories />
    </div>
  )
}

export default Home