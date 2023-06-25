import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

const TemplateDefault = ({ children }) => {
  return (
    <>
        <Navbar />
        <section>
            { children }
        </section>
        <Footer />
    </>
  )
}

export default TemplateDefault