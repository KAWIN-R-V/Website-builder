interface TemplateCardProps {
  title: string;
  image: string;
  description: string;
}

function TemplateCard({
  title,
  image,
  description,
}: TemplateCardProps) {
  return (
    <div className="template-card">

      <img src={image} alt={title} />

      <div className="template-content">

        <h3>{title}</h3>

        <p>{description}</p>

        <button>View Template</button>

      </div>

    </div>
  );
}

export default TemplateCard;