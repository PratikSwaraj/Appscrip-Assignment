import React from "react";
import "./Navbar.css";
import Logo from "./Logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="main">
        <img src={Logo} alt="Logo" />
        <h1 className="logo">LOGO</h1>
        <div className="navbar-icons">
          <span>🔍</span>
          <span>🛒</span>
          <span>👤</span>
          <span>🌐 ENG</span>
        </div>
      </div>
      <div className="navbar-links">
        <p to="/shop">SHOP</p>
        <p to="/skills">SKILLS</p>
        <p to="/stories">STORIES</p>
        <p to="/about">ABOUT</p>
        <p to="/contact">CONTACT US</p>
      </div>
    </nav>
  );
};

export default Navbar;
