import React, { Component } from "react";

export class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  getMenus = (menus) => {
    if (menus.length) {
      return (
        <ul>
          {menus.map(({ link, title, children }, index) => {
            let menuItem;
            if (children) {
              menuItem = (
                <li key={index} className="dropdown">
                  <a href={link}>
                    <span>{title}</span>
                    <i className="bi bi-chevron-down dropdown-indicator"></i>
                  </a>
                  {this.getMenus(children)}
                </li>
              );
            } else {
              menuItem = (
                <li key={index}>
                  <a href={link}>{title}</a>
                </li>
              );
            }
            return menuItem;
          })}
        </ul>
      );
    }
  };
  render() {
    const { menus } = this.props;
    return (
      <nav id="navbar" className="navbar">
        {this.getMenus(menus)}
      </nav>
    );
  }
}

export default Navigation;
