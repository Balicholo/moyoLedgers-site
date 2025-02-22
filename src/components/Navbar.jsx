import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu when hamburger icon is clicked
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu when a nav link is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav>
      <div className={`navbar ${isOpen ? "open" : ""}`}>
        <Link to="/">
          <div className="logo"></div>
        </Link>
        <ul>
          <li>
            <Link to="/" onClick={closeMenu}>Home</Link>
          </li>
          <li>
            <Link to="/privacy-policy" onClick={closeMenu}>Privacy Policy</Link>
          </li>
          <li>
            <Link to="/terms-of-use" onClick={closeMenu}>Terms of Use</Link>
          </li>
        </ul>
        <div className="menu-button">
         <div>
          <a href="https://app.moyoledgers.com/login">
            <button>SignIn</button>
          </a>
         </div>
         <div className="hamburger" onClick={toggleMenu}>
           <div></div>
           <div></div>
           <div></div>
         </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
