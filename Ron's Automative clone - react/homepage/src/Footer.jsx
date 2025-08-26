import { FaFacebookF, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaClock, FaCoffee } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-left">
          <img src="/logo.svg" alt="Logo" className="footer-logo" />
          <div className="footer-info">
            <p><FaMapMarkerAlt className="icon" /> 4028 Hanover Pike, MD 21102</p>
            <p><FaPhoneAlt className="icon" /> 410-239-3180</p>
            <p><FaClock className="icon" /> Monday to Saturday 09:00 AM - 08:00 PM</p>
            <p><FaCoffee className="icon" /> Sunday Closed</p>
          </div>
        </div>

        <div className="footer-middle">
          <h3>Company</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Inventory</a></li>
            <li><a href="#">Apply Online</a></li>
            <li><a href="#">Finance Calculator</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-right">
          <h3>Follow us</h3>
          <ul>
            <li><a href="#"><FaFacebookF className="icon fb" /> Facebook</a></li>
            <li><a href="#"><FaInstagram className="icon ig" /> Instagram</a></li>
            <li><a href="#"><FaYoutube className="icon yt" /> YouTube</a></li>
          </ul>
        </div>
      </div>


      <div className="footer-bottom">
        <p>&copy; 2024 Ron's Automotive.com, All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Notice</a>
        </div>
      </div>
    </footer>
  );
}
