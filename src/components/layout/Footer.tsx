import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

import "../../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company */}

        <div className="footer-section">

          <h2>WebBuilder</h2>

          <p>
            We create modern, responsive and affordable websites for businesses
            and startups.
          </p>

        </div>

        {/* Quick Links */}

        <div className="footer-section">

          <h3>Quick Links</h3>

          <ul>

            <li>Home</li>
            <li>Templates</li>
            <li>Pricing</li>
            <li>Portfolio</li>
            <li>Reviews</li>

          </ul>

        </div>

        {/* Contact */}

        <div className="footer-section">

          <h3>Contact</h3>

          <p>
            <FaEnvelope /> info@webbuilder.com
          </p>

          <p>
            <FaPhone /> +91 9876543210
          </p>

          <p>
            <FaMapMarkerAlt /> Coimbatore, Tamil Nadu
          </p>

        </div>

        {/* Social */}

        <div className="footer-section">

          <h3>Follow Us</h3>

          <div className="social-icons">

            <FaFacebook />

            <FaInstagram />

            <FaLinkedin />

            <FaGithub />

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        © 2026 WebBuilder. All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;