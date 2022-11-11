import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Products from './Products'
import Cart from './Cart'
import CartProvider from './context/CartProvider'
import Router from './Router/Router'

export class Shop extends Component {
  render() {
    return (
      <>
        <CartProvider>
           <Router/>
        </CartProvider>
      </>
    )
  }
}

export default Shop