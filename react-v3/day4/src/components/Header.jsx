import React from "react";
import { NavLink } from "react-router-dom";
import Url from "../Helper/Url";
const url = new Url();
export default function Header() {
  const navLinkClass = ({ isActive }) => {
    return isActive ? "active" : "disabled";
  };
  return (
    <header>
      <nav className="primary-menu">
        <ul>
          <li>
            <NavLink to={url.home} className={navLinkClass} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={url.about} className={navLinkClass}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to={`${url.products}`} className={navLinkClass}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to={url.checkout} className={navLinkClass}>
              Thank toán
            </NavLink>
          </li>
          <li>
            <NavLink to={url.profile} className={navLinkClass}>
              Cá Nhân
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
