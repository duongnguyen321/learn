import React, { Component } from 'react'

import Dasboard from './render-props/Dasboard';

import Login from './render-props/Login';
import Products from './render-props/Products';
import Errors from './render-props/Errors';

export class Layout extends Component {

  constructor(props){
    super(props);

    this.state = {
        loginId: 0,
        userInfo: {},
        currentComponent: null
    }
  }  

  getUserId = () => {
    return sessionStorage.getItem("loginId");
  }

  getUser = () => {
    const userId = this.getUserId();
    const data = {
      userId: userId,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },

      body: new URLSearchParams(data).toString(),
    };

    fetch("https://unicode.vn/api/get_user.php", options)
      .then((response) => response.json())
      .then((response) => {

            if (response.status === 'success'){
                this.setState({
                    userInfo: response.data
                })
            }
           
      });
  }

  receiveData = (data) => {
    
    this.setState({
        loginId: data.loginId
    })

    if (data.loginId){
        this.getUser();
    }
  }

  componentDidMount = () => {
    this.getUser();

  }

  goPage = (e) => {
    e.preventDefault();
    const page = e.target.dataset.page;

    switch (page) {
        case 'products': 
            this.setState({
                currentComponent: <Products {...this.state} render={this.receiveData}/>
            })
        break;    

        case 'dashboard': 
        this.setState({
            currentComponent: <Dasboard {...this.state} render={this.receiveData}/>
        })    
            
        break;

        default:
            this.setState({
                currentComponent: <Errors {...this.state} render={this.receiveData}/>
            })
        break;
    }
  }

  render() {
    
    const isLogin = this.getUserId();

    const renderLayout = () => {
       return (
            <div className='row'>
                <div className='col-3'>
                    <ul>
                        <li><a href="#" data-page='dashboard' onClick={this.goPage}>Dashboard</a></li>
                        <li><a href="#" data-page='products' onClick={this.goPage}>Products</a></li>
                    </ul>
                </div>
                <div className='col-9'>
                    {this.state.currentComponent ? this.state.currentComponent:<Dasboard {...this.state} render={this.receiveData}/>}
                   
                </div>
            </div>
            
       );
       
       
    }

    return (
      <>
        <div className='container'>
            {
                isLogin?renderLayout(): <Login render={this.receiveData}/>
            }
        </div>
      </>
    )
  }
}

export default Layout