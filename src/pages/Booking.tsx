import "../styles/booking.css";

function Booking() {
  return (
    <div className="booking-container">

      <h1>Book a Discovery Call</h1>

      <p>
        Schedule a meeting to discuss your website requirements.
      </p>

      <form className="booking-form">

        <div className="booking-group">

          <label>Name</label>

          <input
            type="text"
            placeholder="Enter your name"
          />

        </div>

        <div className="booking-group">

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
          />

        </div>

        <div className="booking-group">

          <label>Phone Number</label>

          <input
            type="tel"
            placeholder="Enter your phone number"
          />

        </div>

        <div className="date-time-container">

          <div className="booking-group">

            <label>📅 Select Date</label>

            <input
              className="modern-input"
              type="date"
            />

          </div>

          <div className="booking-group">

            <label>🕒 Select Time</label>

            <input
              className="modern-input"
              type="time"
            />

          </div>

        </div>

        <div className="booking-group">

          <label>Message</label>

          <textarea
            placeholder="Tell us about your project..."
          />

        </div>

        <button className="book-btn">

            Book Appointment

        </button>

      </form>

    </div>
  );
}

export default Booking;