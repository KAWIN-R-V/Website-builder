import hero from "../assets/images/hero.png";
import "../styles/home.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <h1>Build Your Dream Website</h1>

        <p>
          We create modern, responsive and affordable
          websites for businesses and startups.
        </p>

        <div className="hero-buttons">

          <button className="primary-btn">
            Plan My Website
          </button>

          <button className="secondary-btn">
            Book Discovery Call
          </button>

        </div>

      </div>

      <div className="hero-image">

        <img src={hero} alt="Hero" />

      </div>

    </section>
  );
}

export default Hero;