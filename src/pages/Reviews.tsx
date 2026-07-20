import "../styles/reviews.css";

const reviews = [
  {
    id: 1,
    name: "Rahul Kumar",
    review: "They delivered exactly what I wanted. The website looks professional and works perfectly on mobile.",
  },
  {
    id: 2,
    name: "Priya Sharma",
    review: "Very professional team. They explained everything clearly and completed the project on time.",
  },
  {
    id: 3,
    name: "Arun",
    review: "Affordable pricing and excellent customer support. Highly recommended.",
  },
  {
    id: 4,
    name: "Sneha",
    review: "The booking system and contact forms work perfectly. Great experience!",
  },
];

function Reviews() {
  return (
    <section className="reviews-container">

      <h1>Customer Reviews</h1>

      <p>
        Here's what our clients say about working with us.
      </p>

      <div className="review-list">

        {reviews.map((review) => (

          <div className="review-card" key={review.id}>

            <div className="review-stars">
              ⭐⭐⭐⭐⭐
            </div>

            <h3>{review.name}</h3>

            <p>{review.review}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Reviews;