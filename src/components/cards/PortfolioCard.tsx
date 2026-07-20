interface PortfolioCardProps {
  title: string;
  image: string;
  description: string;
  technology: string;
}

function PortfolioCard({
  title,
  image,
  description,
  technology,
}: PortfolioCardProps) {
  return (
    <div className="portfolio-card">

      <img src={image} alt={title} />

      <div className="portfolio-content">

        <h3>{title}</h3>

        <p>{description}</p>

        <span className="tech-badge">
          {technology}
        </span>

        <button>View Project</button>

      </div>

    </div>
  );
}

export default PortfolioCard;