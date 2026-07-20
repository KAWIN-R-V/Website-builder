import "../../styles/portfolio.css";

import restaurant from "../../assets/images/restaurant.png";
import hospital from "../../assets/images/hospital.png";
import portfolio from "../../assets/images/portfolio.png";

const portfolioData = [
  {
    id: 1,
    title: "Restaurant Website",
    image: restaurant,
    category: "Restaurant",
    description:
      "Modern restaurant website with online table booking and menu management.",
    tech: "React • TypeScript",
  },
  {
    id: 2,
    title: "Hospital Website",
    image: hospital,
    category: "Healthcare",
    description:
      "Professional hospital website with appointment booking and doctor profiles.",
    tech: "React • Node.js",
  },
  {
    id: 3,
    title: "Portfolio Website",
    image: portfolio,
    category: "Personal",
    description:
      "Clean and modern portfolio website for freelancers and professionals.",
    tech: "React • CSS",
  },
];

function Portfolio() {
  return (
    <section className="portfolio">

      <h2>Our Recent Work</h2>

      <p className="portfolio-subtitle">
        A few examples of websites we've designed for our clients.
      </p>

      <div className="portfolio-container">

        {portfolioData.map((project) => (

          <div className="portfolio-card" key={project.id}>

            <img
              src={project.image}
              alt={project.title}
            />

            <div className="portfolio-content">

              <span className="portfolio-category">
                {project.category}
              </span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <span className="portfolio-tech">
                {project.tech}
              </span>

              <button className="portfolio-btn">
                View Project
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Portfolio;