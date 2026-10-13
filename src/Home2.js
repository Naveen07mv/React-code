import React from 'react'
import { Routes,Route,Link } from 'react-router-dom'
import Login2 from './Login2'
import Product from './Product'
import Product2 from './Product2'

const Home2 = () => {
  return (
    <div>
      <h1>Home page</h1>
       {/* <center >
        <h1>Home page</h1><br/>
        <Link to="/">LOGIN</Link><br/><br/>
        <Link to="/ProductShoe">PRODUCT1</Link><br/><br/>
        <Link to="ProductScoks/">PRODUCT2</Link>
       </center> */}
       {/* <Routes>
        <Route path='/'element={<Login2/>}/>
        <Route path='product1' element={<Product productObj={productObj}/>}/>
        <Route path='product2'element={<Product2 productObj={productSOCK}/>}/>
       </Routes> */}
    </div>
  )
}

export default Home2


