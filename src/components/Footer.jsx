import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/LogoStartup.png";
import "../assets/css/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__brand">
          <Link to="/">
            <img src={Logo} alt="Start'Up 2K26 Logo" />
          </Link>
          <p> Empowering newly elected EBs to lead their terms with impact.</p>
        </div>

        <div className="footer__links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/meet-oc">Meet the Crew</Link></li>
            <li><Link to="/register">Register Now</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer__copy">
        <p>&copy; 2026 Start'Up 2K26. All rights reserved.</p>
        <p>developed by Baya Jribi</p>
      </div>
    </footer>
  );
}

export default Footer;
