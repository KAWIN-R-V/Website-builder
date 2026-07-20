import "../../styles/testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Rahul Kumar",
    review:
      "They built my website quickly and professionally. The entire process was smooth.",
  },
  {
    id: 2,
    name: "Priya Sharma",
    review:
      "Affordable pricing and excellent customer support throughout the project.",
  },
  {
    id: 3,
    name: "Arjun",
    review:
      "Highly recommended for anyone looking for a simple business website.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What Our Clients Say</h2>

      <div className="testimonial-container">
        {testimonials.map((client) => (
          <div className="testimonial-card" key={client.id}>
            <div className="stars">★★★★★</div>

            <p>"{client.review}"</p>

            <h4>- {client.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;