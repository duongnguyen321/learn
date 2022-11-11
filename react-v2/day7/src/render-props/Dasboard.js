import React, { Component } from "react";
import Header from "./Header";

export class Dasboard extends Component {

  constructor(props){
    super(props);
  }  

  render() {

    return (
      <>
        <Header {...this.props}/>
        <h1>Dasboard</h1>
        
      </>
    );
  }
}

export default Dasboard;
