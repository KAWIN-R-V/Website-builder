import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import {
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
} from "react-icons/fa";

import { useTheme } from "../../context/ThemeContext";

import "../../styles/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const { darkMode, toggleTheme } = useTheme();

  const isLoggedIn = !!localStorage.getItem("adminToken");

  // ==========================
  // Close Mobile Menu
  // ==========================

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // ==========================
  // Logout
  // ==========================

  // const handleLogout = () => {
  //   localStorage.removeItem("adminToken");

  //   closeMenu();

  //   navigate("/admin/login", {
  //     replace: true,
  //   });
  // };

    const handleLogout = () => {
    localStorage.removeItem("adminToken");

    closeMenu();

    navigate("/", {             //Destination Changed
      replace: true,
    });
  };

  return (
    <nav className="navbar">

      {/* Logo + Theme Button */}

      <div className="logo-container">

        <div className="logo">
          WebBuilder
        </div>

        <button
          className="theme-toggle"
          onClick={toggleTheme}
          title={
            darkMode
              ? "Switch to Light Mode"
              : "Switch to Dark Mode"
          }
          aria-label={
            darkMode
              ? "Light Mode"
              : "Dark Mode"
          }
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

      </div>

      {/* Mobile Menu Icon */}

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation */}

      <ul
        className={
          menuOpen
            ? "nav-links active"
            : "nav-links"
        }
      >
        <li onClick={closeMenu}>
          <Link to="/">Home</Link>
        </li>

        <li onClick={closeMenu}>
          <Link to="/templates">
            Templates
          </Link>
        </li>

        <li onClick={closeMenu}>
          <Link to="/pricing">
            Pricing
          </Link>
        </li>

        <li onClick={closeMenu}>
          <Link to="/portfolio">
            Portfolio
          </Link>
        </li>

        <li onClick={closeMenu}>
          <Link to="/reviews">
            Reviews
          </Link>
        </li>

        <li onClick={closeMenu}>
          <Link to="/plan">
            Plan Website
          </Link>
        </li>

        <li onClick={closeMenu}>
          <Link to="/booking">
            Book Call
          </Link>
        </li>



        {/* Disabled the Admin button from the navbar */}
        

        {/*{!isLoggedIn ? (
          <li onClick={closeMenu}>
            <Link to="/admin/login">
              Admin
            </Link>
          </li>
        ) : (
          <li>
            <button
              className="logout-btn"
              onClick={handleLogout}>
              Logout
            </button>
          </li>
        )}*/}


        {isLoggedIn && (              
            <li>
              <button
                className="logout-btn"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          )}                            
      </ul>

    </nav>
  );
}

export default Navbar;