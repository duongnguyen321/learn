import React, { Component } from 'react'
import Logout from './Logout'

export class Header extends Component {

    constructor(props){
        super(props);
    }

  render() {

    const {name} = this.props.userInfo;
    
    return (
        <p>
        Xin Chào : {name}, <Logout {...this.props}/>
        </p>
    )
  }
}

export default Header