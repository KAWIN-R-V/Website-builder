import {
  FaMoneyBillWave,
  FaMobileAlt,
  FaHeadset,
} from "react-icons/fa";

import "../../styles/home.css";

function WhyChooseUs() {
  return (
    <section className="why-us">

      <h2>Why Choose Us?</h2>

      <p className="why-subtitle">
        We focus on quality, affordability, and long-term customer satisfaction.
      </p>

      <div className="why-container">

        <div className="why-card">

          <FaMoneyBillWave className="why-icon" />

          <h3>Affordable Pricing</h3>

          <p>
            We offer high-quality websites at competitive prices without compromising on performance.
          </p>

        </div>

        <div className="why-card">

          <FaMobileAlt className="why-icon" />

          <h3>Mobile First Design</h3>

          <p>
            Every website is fully responsive and optimized for phones, tablets, and desktops.
          </p>

        </div>

        <div className="why-card">

          <FaHeadset className="why-icon" />

          <h3>Dedicated Support</h3>

          <p>
            We continue supporting your website with updates and assistance even after delivery.
          </p>

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;