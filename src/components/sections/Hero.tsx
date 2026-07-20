import "../../styles/home.css";
import hero from "../../assets/images/hero.png";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <h1>Build Your Dream Website</h1>

        <p>
          We create modern, responsive and affordable websites
          for businesses and startups.
        </p>

        <div className="hero-buttons">

          <Link to="/plan" className="primary-btn">
            Plan My Website
          </Link>

          <Link to="/booking" className="secondary-btn">
            Book Discovery Call
          </Link>

        </div>

      </div>

      <div className="hero-image">
        <img
          src={hero}
          alt="Website Builder"
        />
      </div>

    </section>
  );
}

export default Hero;