import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div class="container">
        <div className="navbar-brand">
          <b class="ndo">Ndo</b>
          <b class="va">va</b>
          <b class="do">do</b>
        </div>
        <ul className="navbar-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
