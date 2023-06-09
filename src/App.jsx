import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import GlobalStyle from './GlobalStyle'
import ProductList from './pages/ProductList/ProductList'
import SingleCategory from './pages/CategoryItems/SingleCategory'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import Cart from './pages/Cart/Cart'
import Sorvetes from './pages/CategoryItems/SingleCategory'

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/ProductList" element={ <ProductList /> } />
        <Route path="/login" element={ <Login />  } />
        <Route path="/register" element={ <Register /> } /> 
        <Route path="/cart" element={ <Cart /> } />

        <Route path="/singleItem/:id" element={ <SingleCategory /> } />

        <Route path="/" element={ <Home /> } /> 
        {/* <ProductList /> */}
        {/* <ProductSinglePage /> */}        
      </Routes>
    </Router>
  )
}

export default App