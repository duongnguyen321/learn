import React, { Component } from "react";

export class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHide: true,
    };
  }
  handleClick = () => {
    
    this.setState({ isHide: false });
  };
  render() {
    const { isHide } = this.state;
    return (
      <>
        <button onClick={this.handleClick}>{isHide?"Ẩn":"Hiện"}</button>
        <p className={isHide?"Ẩn":"Hiện"}>abc</p>
      </>
    );
  }
}

export default Toggle;
