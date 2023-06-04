import React from 'react'
import Home from './pages/Home'
import GlobalStyle from './GlobalStyle'
import ProductList from './pages/ProductList/ProductList'
import ProductSinglePage from './pages/Single Page/ProductSinglePage'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import Cart from './pages/Cart/Cart'

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Home /> 
      {/* <ProductList /> */}
      {/* <ProductSinglePage /> */}
      {/* <Register /> */}
      {/* <Login /> */}
      {/* <Cart /> */}
    </div>
  )
}

export default App