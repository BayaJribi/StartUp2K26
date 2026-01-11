import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/LOGO COLORS-01.png";
import "../assets/css/Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shadow, setShadow] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${shadow ? "shadow-header" : ""}`}>
      <nav className="nav container">
        <Link to="/" className="nav__logo" onClick={closeMenu}>
          <img src={Logo} alt="logo" />
        </Link>

        {/* Mobile / Desktop Menu */}
        <div className={`nav__menu ${menuOpen ? "show" : ""}`}>
          <ul className="nav__list">
            <li>
              <Link to="/" className="nav__link" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/meet-oc" className="nav__link " onClick={closeMenu}>
                Meet the Crew
              </Link>
            </li>
            <li>
              <Link to="/register" className="nav__link nav__button" onClick={closeMenu}>
                Register Now
              </Link>
            </li>
          </ul>

        </div>

        {/* Hamburger */}
        <div className="nav__toggle" onClick={toggleMenu}>
          <i className="ri-menu-line"></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
