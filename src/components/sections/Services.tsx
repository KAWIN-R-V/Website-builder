import {
  FaLaptopCode,
  FaMobileAlt,
  FaTools,
} from "react-icons/fa";

import "../../styles/home.css";

function Services() {
  return (

    <section className="services">

      <h2>Our Services</h2>

      <div className="service-card">

        <FaLaptopCode className="service-icon"/>

        <h3>Custom Website</h3>

        <p>
          We build professional websites
          for businesses and startups.
        </p>

      </div>

      <div className="service-card">

        <FaMobileAlt className="service-icon"/>

        <h3>Mobile Responsive</h3>

        <p>
          Your website works perfectly
          on every device.
        </p>

      </div>

      <div className="service-card">

        <FaTools className="service-icon"/>

        <h3>Maintenance</h3>

        <p>
          We provide website maintenance
          whenever needed.
        </p>

      </div>

    </section>

  );
}

export default Services;