import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Cart from '../Cart'
import Products from '../Products'

function Router() {
  return (
   <Routes>
    <Route path="/" name="home" component={<Products/>} element={<Products/>} />
    <Route path="/products" name="products" component={<Products/>} element={<Products/>} />
    <Route path="/cart" name="cart" component={<Cart/>} element={<Cart/>} />
   </Routes>
  )
}

export default Router