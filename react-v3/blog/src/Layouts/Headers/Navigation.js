import React, { Component } from "react";
import { NavLink } from "react-router-dom";

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
                  <NavLink to={link}>
                    <span>{title}</span>
                    <i className="bi bi-chevron-down dropdown-indicator"></i>
                  </NavLink>
                  {this.getMenus(children)}
                </li>
              );
            } else {
              menuItem = (
                <li key={index}>
                  <NavLink to={link}>{title}</NavLink>
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
