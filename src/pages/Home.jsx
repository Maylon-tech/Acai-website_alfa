import React from 'react'
import Navbar from '../components/Navbar'

import Announcement from '../components/Announcement/Announcement'
import Hero from '../components/Hero/Hero'

const Home = () => {
  return (
    <div>
      <Announcement />
        <Navbar />
        <Hero />
    </div>
  )
}

export default Home