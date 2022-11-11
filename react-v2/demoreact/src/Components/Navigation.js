import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
export class Navigation extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
        <div className="container px-4 px-lg-5">
          <NavLink to="/" className="navbar-brand">
            Start Bootstrap
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto py-4 py-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link px-lg-3 py-3 py-lg-4">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link px-lg-3 py-3 py-lg-4">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/post" className="nav-link px-lg-3 py-3 py-lg-4">
                  Sample Post
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link px-lg-3 py-3 py-lg-4">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navigation