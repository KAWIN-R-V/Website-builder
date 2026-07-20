interface PricingCardProps {
  plan: string;
  price: string;
  features: string[];
}

function PricingCard({
  plan,
  price,
  features,
}: PricingCardProps) {
  return (
    <div className="pricing-card">

      <h2>{plan}</h2>

      <h3>{price}</h3>

      <ul>

        {features.map((feature, index) => (

          <li key={index}>
            ✔ {feature}
          </li>

        ))}

      </ul>

      <button>Choose Plan</button>

    </div>
  );
}

export default PricingCard;