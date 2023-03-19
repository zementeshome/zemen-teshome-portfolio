import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <section className="header" id="header">
      <div className="header__container">
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <h1 className="header__logo">zt</h1>
        </Link>
      </div>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-list-item">
            <a href="/work" style={{ textDecoration: "none", color: "white" }}>
              work
            </a>
          </li>
          <li className="header__nav-list-item">
            {" "}
            <a href="/about" style={{ textDecoration: "none", color: "white" }}>
              about{" "}
            </a>
          </li>
          <li className="header__nav-list-item">
            {" "}
            <a
              href="/contact"
              style={{ textDecoration: "none", color: "white" }}
            >
              contact
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Header;
