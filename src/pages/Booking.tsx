import { useState } from "react";
import "../styles/booking.css";

function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    meetingDate: "",
    meetingTime: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert("✅ Booking Created Successfully!");

        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          budget: "",
          meetingDate: "",
          meetingTime: "",
          message: "",
        });
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Server Error");
    }

    setLoading(false);
  };

  return (
    <div className="booking-container">

      <h1>Book a Discovery Call</h1>

      <p>
        Schedule a meeting to discuss your website requirements.
      </p>

      <form className="booking-form" onSubmit={handleSubmit}>

        <div className="booking-group">
          <label>Name</label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="booking-group">
          <label>Email</label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="booking-group">
          <label>Phone Number</label>

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />
        </div>

        <div className="booking-group">
          <label>Company</label>

          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company Name"
          />
        </div>

        <div className="booking-group">
          <label>Service Required</label>

          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Select Service</option>
            <option value="Business Website">Business Website</option>
            <option value="Portfolio Website">Portfolio Website</option>
            <option value="Restaurant Website">Restaurant Website</option>
            <option value="Hospital Website">Hospital Website</option>
            <option value="E-Commerce Website">E-Commerce Website</option>
          </select>
        </div>

        <div className="booking-group">
          <label>Budget</label>

          <input
            type="text"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            placeholder="Estimated Budget"
          />
        </div>

        <div className="date-time-container">

          <div className="booking-group">
            <label>Select Date</label>

            <input
              className="modern-input"
              type="date"
              name="meetingDate"
              value={formData.meetingDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="booking-group">
            <label>Select Time</label>

            <input
              className="modern-input"
              type="time"
              name="meetingTime"
              value={formData.meetingTime}
              onChange={handleChange}
            />
          </div>

        </div>

        <div className="booking-group">

          <label>Message</label>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project..."
          />

        </div>

        <button
          type="submit"
          className="book-btn"
          disabled={loading}
        >
          {loading ? "Booking..." : "Book Appointment"}
        </button>

      </form>

    </div>
  );
}

export default Booking;