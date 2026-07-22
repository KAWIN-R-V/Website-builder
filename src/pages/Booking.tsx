import { useEffect, useState } from "react";

import "../styles/booking.css";

import { createBooking } from "../api/bookingApi";
import { getAvailableSlots } from "../api/slotApi";

interface Slot {
  _id: string;
  date: string;
  time: string;
  status: string;
}

function Booking() {
  const [slots, setSlots] = useState<Slot[]>([]);
  const [selectedSlot, setSelectedSlot] = useState("");

  const [loadingSlots, setLoadingSlots] = useState(true);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  // ==============================
  // Load Available Slots
  // ==============================

  useEffect(() => {
    loadSlots();
  }, []);

  async function loadSlots() {
    try {
      setLoadingSlots(true);

      const data = await getAvailableSlots();

      setSlots(data.slots);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingSlots(false);
    }
  }

  // ==============================
  // Handle Input Change
  // ==============================

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ==============================
  // Submit Booking
  // ==============================

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedSlot) {
      alert("Please select an appointment slot.");
      return;
    }

    try {
      setLoading(true);

      await createBooking({
        ...formData,
        slotId: selectedSlot,
      });

      alert("Booking Created Successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        budget: "",
        message: "",
      });

      setSelectedSlot("");

      await loadSlots();
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="booking-container">
      <h1>Book a Discovery Call</h1>

      <p>
        Select an available appointment slot and complete the booking form.
      </p>

      <form
        className="booking-form"
        onSubmit={handleSubmit}
      >
        {/* Name */}
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

        {/* Email */}
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

        {/* Phone */}
        <div className="booking-group">
          <label>Phone</label>

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
          />
        </div>

        {/* Company */}
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

        {/* Service */}
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

        {/* Budget */}
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

        {/* Message */}
        <div className="booking-group">
          <label>Project Details</label>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project..."
          />
        </div>

        {/* Available Appointment Slots */}
        <div className="booking-group">
          <label>Available Appointment Slots</label>

          {loadingSlots ? (
            <p>Loading available slots...</p>
          ) : slots.length === 0 ? (
            <p>No appointment slots available.</p>
          ) : (
            <div className="slot-list">
              {slots.map((slot) => (
                <label
                  key={slot._id}
                  className="slot-option"
                >
                  <input
                    type="radio"
                    name="slot"
                    value={slot._id}
                    checked={selectedSlot === slot._id}
                    onChange={() =>
                      setSelectedSlot(slot._id)
                    }
                  />

                  <span className="slot-text">
                      {new Date(slot.date).toLocaleDateString()} • {slot.time}
                  </span>
                </label>
              ))}
            </div>
          )}
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