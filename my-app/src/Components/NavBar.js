import React, { useState } from "react";
import '../Css/NavBar.css';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">Goals</div>
      <div className={`menu-container ${isMenuOpen ? "open" : ""}`}>
        <ul className="menu">
          <li><Link to="/" className="navbar-link-text">Home</Link></li>
          <li><Link to="/about" className="navbar-link-text">About</Link></li>
          <li><Link to="/tasks" className="navbar-link-text">Tasks</Link></li>
          <Link to="/login"><button className="sign-up-button">Sign up</button></Link>
        </ul>
      </div>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
