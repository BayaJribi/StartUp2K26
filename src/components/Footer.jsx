import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__brand">
          <img src="assets/img/FullStartUp.png" alt="Start'Up 2K26 Logo" />
          <p>Start'Up 2K26 – Empowering newly elected EBs to lead their terms with impact.</p>
        </div>

        <div className="footer__links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/meet-oc">Meet the Crew</Link></li>
            <li><Link to="/register">Register Now</Link></li>
          </ul>
        </div>

        <div className="footer__social">
          <h3>Follow Us</h3>
          <a href="#"><i className="ri-facebook-fill"></i></a>
          <a href="#"><i className="ri-instagram-fill"></i></a>
          <a href="#"><i className="ri-linkedin-fill"></i></a>
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
