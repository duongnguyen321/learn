import React, { Component } from 'react'
import Header from './Header'

export class Errors extends Component {

  constructor(props){
    super(props);
  }  
  render() {
    return (
      <>
        <Header {...this.props}/>
        
        <h1>
            PAGE NOT FOUND
        </h1>

      </>
    )
  }
}

export default Errors