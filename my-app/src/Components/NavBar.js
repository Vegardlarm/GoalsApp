import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Css/NavBar.css';

const Navbar = () => {
  const location = useLocation(); // Get the current location

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-logo">Goals</Link>
      </div>
      <div className="navbar-right">
        <ul className="navbar-links">
          <li className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`}>
            <Link to="/" className="navbar-link-text">Home</Link>
          </li>
          <li className={`navbar-link ${location.pathname === '/about' ? 'active' : ''}`}>
            <Link to="/about" className="navbar-link-text">About</Link>
          </li>
          <li className={`navbar-link ${location.pathname === '/tasks' ? 'active' : ''}`}>
            <Link to="/tasks" className="navbar-link-text">Task</Link>
          </li>
        </ul>
        <Link to="/login" className="navbar-button-link">
          <button className="navbar-button">Sign up</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;