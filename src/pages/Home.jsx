import React from 'react'
import Navbar from '../components/Navbar'

import styled from 'styled-components'
import Announcement from '../components/Announcement/Announcement'
import Slider from '../components/Slider/Slider';

export const Container = styled.div`
  
`;



const Home = () => {
  return (
    <div>
      <Announcement />
        <Navbar />
        <Slider />
    </div>
  )
}

export default Home