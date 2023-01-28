import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h3 className="navbar-title" id="navbar-logo">Rapid Comments</h3>
      <button className="navbar-login-btn">Login</button>
    </nav>
  );
}

export default Navbar;
