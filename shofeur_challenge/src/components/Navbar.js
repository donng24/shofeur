import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo"><span className="highlight">s</span>hofeur</div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/vehicles">Vehicles</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <div className="member-buttons">
        <button className="login-button">Login</button>
        <button className="signup-button">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;