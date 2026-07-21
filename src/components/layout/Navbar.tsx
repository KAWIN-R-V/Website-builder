import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../../styles/navbar.css";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const isLoggedIn = !!localStorage.getItem("adminToken");

  const handleLogout = () => {
    localStorage.removeItem("adminToken");

    navigate("/admin/login");

    window.location.reload();
  };

  return (
    <nav className="navbar">
      <div className="logo">WebBuilder</div>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/templates">Templates</Link>
        </li>

        <li>
          <Link to="/pricing">Pricing</Link>
        </li>

        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>

        <li>
          <Link to="/reviews">Reviews</Link>
        </li>

        <li>
          <Link to="/plan">Plan Website</Link>
        </li>

        <li>
          <Link to="/booking">Book Call</Link>
        </li>

        {!isLoggedIn ? (
          <li>
            <Link to="/admin/login">Admin</Link>
          </li>
        ) : (
          <>
            <li>
              <Link to="/admin">Dashboard</Link>
            </li>

            <li>
              <button
                className="logout-btn"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;