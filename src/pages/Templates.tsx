import "../styles/templates.css";

import TemplateCard from "../components/cards/TemplateCard";

import restaurant from "../assets/images/restaurant.png";
import hospital from "../assets/images/hospital.png";
import portfolio from "../assets/images/portfolio.png";

const templates = [
  {
    id: 1,
    title: "Restaurant Website",
    image: restaurant,
    description: "Perfect for restaurants, cafés and hotels."
  },
  {
    id: 2,
    title: "Hospital Website",
    image: hospital,
    description: "Professional healthcare website."
  },
  {
    id: 3,
    title: "Portfolio Website",
    image: portfolio,
    description: "Showcase your skills and projects."
  }
];

function Templates() {
  return (
    <section className="templates">

      <h1>Website Templates</h1>

      <p>
        Choose a design that best suits your business.
      </p>

      <div className="template-container">

        {templates.map((template) => (

          <TemplateCard
            key={template.id}
            title={template.title}
            image={template.image}
            description={template.description}
          />

        ))}

      </div>

    </section>
  );
}

export default Templates;