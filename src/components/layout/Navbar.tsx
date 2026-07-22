import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import "../../styles/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const isLoggedIn = !!localStorage.getItem("adminToken");

  // Close mobile menu
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("adminToken");

    closeMenu();

    navigate("/admin/login", {
      replace: true,
    });
  };

  return (
    <nav className="navbar">

      <div className="logo">
        WebBuilder
      </div>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>

        <li onClick={closeMenu}>
          <Link to="/">Home</Link>
        </li>

        <li onClick={closeMenu}>
          <Link to="/templates">Templates</Link>
        </li>

        <li onClick={closeMenu}>
          <Link to="/pricing">Pricing</Link>
        </li>

        <li onClick={closeMenu}>
          <Link to="/portfolio">Portfolio</Link>
        </li>

        <li onClick={closeMenu}>
          <Link to="/reviews">Reviews</Link>
        </li>

        <li onClick={closeMenu}>
          <Link to="/plan">Plan Website</Link>
        </li>

        <li onClick={closeMenu}>
          <Link to="/booking">Book Call</Link>
        </li>

        {!isLoggedIn ? (
          <li onClick={closeMenu}>
            <Link to="/admin/login">
              Admin
            </Link>
          </li>
        ) : (
          <li onClick={handleLogout}>
            Logout
          </li>
        )}

      </ul>

    </nav>
  );
}

export default Navbar;