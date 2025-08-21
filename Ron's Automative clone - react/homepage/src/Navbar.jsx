import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/logo.svg" alt="Ron's Automotive" />
      </div>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/">Inventory</a></li>
        <li><a href="/apply">Apply Online</a></li>
        <li><a href="/finance">Finance Calculator</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact Us</a></li>
      </div>

      <div className="auth-links">
        <a className="login" href="/login">Login</a>
        <a className="register" href="/register">Register</a>
      </div>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
