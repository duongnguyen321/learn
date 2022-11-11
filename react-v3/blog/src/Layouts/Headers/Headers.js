import React, { Component } from "react";
import Navigation from "./Navigation";
import Social from "./Social";
import HttpClient from "../../Services/Helpers/Api/HttpClient";
import { Link } from "react-router-dom";
const client = new HttpClient();

export class Headers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logo: "",
      social: {},
      menus: []
    };
  }

  getOptions = async () => {
    const res = await client.get(client.options);
    if (res.response.ok) {
      const data = res.data;
      this.setState({
        logo: data.logo,
        social: data.social,
        menus: data.menus
      })
    }
  };

  componentDidMount = () => {
    this.getOptions();
  };

  render() {
    const {logo, social, menus} = this.state;
    return (
      <>
        <header
          id="header"
          className="header d-flex align-items-center fixed-top"
        >
          <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
            <Link to="/" className="logo d-flex align-items-center">
              <h1>{logo}</h1>
            </Link>
            <Navigation menus={menus}/>
            <Social {...social}/>
          </div>
        </header>
        {/* End Header */}
      </>
    );
  }
}

export default Headers;
