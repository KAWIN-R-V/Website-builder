import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../../styles/navbar.css";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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
        </ul>
    </nav>
  );
}

export default Navbar;