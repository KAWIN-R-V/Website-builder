import { useState } from "react";
import "../styles/planWebsite.css";

import {
  FaUser,
  FaBuilding,
  FaCogs,
  FaMoneyBillWave,
  FaStickyNote,
} from "react-icons/fa";

function PlanWebsite() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [business, setBusiness] = useState("");
  const [websiteType, setWebsiteType] = useState("Restaurant");
  const [pages, setPages] = useState("5 Pages");

  const [budget, setBudget] = useState("₹10,000 - ₹20,000");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !name.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !business.trim()
    ) {
      alert("Please fill all the required fields.");
      return;
    }

    const selectedFeatures = Array.from(
      document.querySelectorAll(
        'input[name="feature"]:checked'
      )
    ).map((item) => (item as HTMLInputElement).value);

    const formData = {
      name,
      email,
      phone,
      business,
      websiteType,
      pages,
      budget,
      features: selectedFeatures,
      notes,
    };

    console.log(formData);

    alert("Website request submitted successfully!");

    // Reset Form
    setName("");
    setEmail("");
    setPhone("");
    setBusiness("");
    setWebsiteType("Restaurant");
    setPages("5 Pages");
    setBudget("₹10,000 - ₹20,000");
    setNotes("");

    document
      .querySelectorAll('input[name="feature"]')
      .forEach((item) => {
        (item as HTMLInputElement).checked = false;
      });
  };

  return (
    <div className="plan-container">
      <h1>Plan My Website</h1>

      <p className="page-description">
        Tell us about your project and we'll recommend the best solution.
      </p>

      <form onSubmit={handleSubmit}>
        {/* Personal Information */}

        <div className="form-section">
          <h2>
            <FaUser />
            Personal Information
          </h2>

          <div className="form-group">
            <label>Full Name *</label>

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Email *</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Phone Number *</label>

            <input
              type="tel"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>

        {/* Business Information */}

        <div className="form-section">
          <h2>
            <FaBuilding />
            Business Information
          </h2>

          <div className="form-group">
            <label>Business Name *</label>

            <input
              type="text"
              placeholder="Business name"
              value={business}
              onChange={(e) => setBusiness(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Website Type</label>

            <select
              value={websiteType}
              onChange={(e) => setWebsiteType(e.target.value)}
            >
              <option>Restaurant</option>
              <option>Hospital</option>
              <option>School</option>
              <option>Portfolio</option>
              <option>E-Commerce</option>
              <option>Real Estate</option>
            </select>
          </div>

          <div className="form-group">
            <label>Number of Pages</label>

            <select
              value={pages}
              onChange={(e) => setPages(e.target.value)}
            >
              <option>5 Pages</option>
              <option>10 Pages</option>
              <option>15 Pages</option>
              <option>20+ Pages</option>
            </select>
          </div>
        </div>

        {/* Features */}

        <div className="form-section">
          <h2>
            <FaCogs />
            Required Features
          </h2>

          <div className="features-grid">
            <label className="feature-item">
              <input
                type="checkbox"
                name="feature"
                value="Contact Form"
              />
              <span>📞 Contact Form</span>
            </label>

            <label className="feature-item">
              <input
                type="checkbox"
                name="feature"
                value="WhatsApp Chat"
              />
              <span>💬 WhatsApp Chat</span>
            </label>

            <label className="feature-item">
              <input
                type="checkbox"
                name="feature"
                value="Booking System"
              />
              <span>📅 Booking System</span>
            </label>

            <label className="feature-item">
              <input
                type="checkbox"
                name="feature"
                value="Blog"
              />
              <span>📝 Blog</span>
            </label>

            <label className="feature-item">
              <input
                type="checkbox"
                name="feature"
                value="Online Store"
              />
              <span>🛒 Online Store</span>
            </label>

            <label className="feature-item">
              <input
                type="checkbox"
                name="feature"
                value="Login System"
              />
              <span>🔒 Login System</span>
            </label>
          </div>
        </div>

        {/* Budget */}

        <div className="form-section">
          <h2>
            <FaMoneyBillWave />
            Budget
          </h2>

          <div className="form-group">
            <label>Estimated Budget</label>

            <select
              className="budget-select"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            >
              <option>₹10,000 - ₹20,000</option>
              <option>₹20,000 - ₹50,000</option>
              <option>₹50,000 - ₹1,00,000</option>
              <option>Above ₹1,00,000</option>
            </select>
          </div>
        </div>

        {/* Notes */}

        <div className="form-section">
          <h2>
            <FaStickyNote />
            Additional Notes
          </h2>

          <div className="form-group">
            <textarea
              className="notes-box"
              placeholder="Tell us more about your project..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>
        </div>

        <button className="submit-btn" type="submit">
          Submit Website Request
        </button>
      </form>
    </div>
  );
}

export default PlanWebsite;