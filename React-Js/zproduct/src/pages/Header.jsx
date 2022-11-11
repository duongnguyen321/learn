import {Link } from "react-router-dom";

import "bootstrap-icons/font/bootstrap-icons.css";

const navbarItems = [
  {
    id: 1,
    text: "Trang chủ",

    href: "/",
  },
  {
    id: 2,
    text: "Đặt Lịch",

    href: "/book",
  },
  {
    id: 3,
    text: "Ưu Đãi",

    href: "/packages",
  },
];

function Header(props) {
  return (
    <header>
      <Link to="/" className="logo">
        <span>S</span>Travel
      </Link>
      <nav className="navbar">
        {navbarItems.map((navbarItems) => {
          return (
            <Link key={navbarItems.id} to={navbarItems.href}>
              {navbarItems.text}
            </Link>
          );
        })}
      </nav>
      <div className="icons">
        <i className="bi bi-moon btn-toggle"></i>
        <i className="bi bi-search" id="search-btn"></i>
        <i className="bi bi-person login-btn"></i>
      </div>
    </header>
  );
}

export default Header;
