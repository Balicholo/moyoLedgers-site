import "../styles/styles.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="footer-text">
        <Link to="/">
          <div className="logo-white"></div>
        </Link>
        <h2>Follow us on our socials for updates</h2>
        <div className="social-icons">
          <a href="#"><i class="ri-instagram-line"></i></a>
          <a href="#"><i class="ri-facebook-fill"></i></a>
          <a href="#"><i class="ri-twitter-x-line"></i></a>
        </div>
        </div>

        <div className="copyright-text">
          <p>© {new Date().getFullYear()} MoyoLedgers. All rights reserved.</p>
          <div className="privacy-terms">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-use">Terms of Use</Link>
          </div>
        </div>
      </div>

      <div className="decorating-strip"></div>
    </footer>
  );
};

export default Footer;