import React, { Component } from 'react'
import Header from './Header'

export class Products extends Component {

  constructor(props){
    super(props);
  }  
  render() {
    return (
      <>
        <Header {...this.props}/>
        
        <h1>
            Products
        </h1>

      </>
    )
  }
}

export default Products