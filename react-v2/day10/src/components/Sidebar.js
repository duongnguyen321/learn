import React, { Component } from "react";

import { Link, NavLink } from "react-router-dom";

import "./Sidebar.css";

export class Sidebar extends Component {
  render() {
    const navLinkClass = ({ isActive }) => {
      return isActive ? "nav-link current" : "nav-link";
    };

    return (
      <ul className="nav flex-column menu">
        <li>
          <NavLink to="/" className='nav-link'>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" className='nav-link'>
            About
          </NavLink>
        </li>

        <li>
          <NavLink to="/products" className='nav-link'>
            Products
          </NavLink>
        </li>

        <li>
          <NavLink to="/news" className='nav-link'>
            News
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact" className='nav-link'>
            Contact
          </NavLink>
        </li>

        <li>
          <NavLink to="/order" className='nav-link'>
            Order
          </NavLink>
        </li>

        <li>
          <NavLink to="/report" className='nav-link'>
            Report
          </NavLink>
        </li>
      </ul>
    );
  }
}

export default Sidebar;
