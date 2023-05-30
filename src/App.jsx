import React from 'react'
import Home from './pages/Home'
import GlobalStyle from './GlobalStyle'
import ProductList from './pages/ProductList/ProductList'
import ProductSinglePage from './pages/Single Page/ProductSinglePage'

const App = () => {
  return (
    <div>
      <GlobalStyle />
      {/* <Home /> */}
      {/* <ProductList /> */}
      <ProductSinglePage />
    </div>
  )
}

export default App