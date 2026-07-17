import "../styles/portfolio.css";

import restaurant from "../assets/images/restaurant.png";
import hospital from "../assets/images/hospital.png";
import portfolio from "../assets/images/portfolio.png";

const portfolioData = [
  {
    id: 1,
    title: "Restaurant Website",
    image: restaurant,
  },
  {
    id: 2,
    title: "Hospital Website",
    image: hospital,
  },
  {
    id: 3,
    title: "Portfolio Website",
    image: portfolio,
  },
];

function Portfolio() {
  return (
    <section className="portfolio">

      <h2>Our Recent Work</h2>

      <div className="portfolio-container">

        {portfolioData.map((project) => (
          <div className="portfolio-card" key={project.id}>

            <img
              src={project.image}
              alt={project.title}
            />

            <h3>{project.title}</h3>

            <button>View Details</button>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Portfolio;