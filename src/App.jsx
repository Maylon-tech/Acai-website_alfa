import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import GlobalStyle from './GlobalStyle'
import ProductList from './pages/ProductList/ProductList'
import ProductSinglePage from './pages/Single Page/ProductSinglePage'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import Cart from './pages/Cart/Cart'

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        
        <Route path="/login" element={ <Login />  } />
        <Route path="/register" element={ <Register /> } /> 
        <Route path="/cart" element={ <Cart /> } />
        <Route path="/" element={ <Home /> } /> 
        {/* <ProductList /> */}
        {/* <ProductSinglePage /> */}        
      </Routes>
    </Router>
  )
}

export default App