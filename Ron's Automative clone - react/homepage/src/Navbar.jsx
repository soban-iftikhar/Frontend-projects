import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="logo">
        <img src="/logo.svg" alt="Logo" />
      </div>

      <button
        className={`hamburger-btn ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`nav-container ${isOpen ? "active" : ""}`}>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Cars</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        <div className="auth-links">
          <a href="#" className="login">Login</a>
          <a href="#" className="register">Register</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
