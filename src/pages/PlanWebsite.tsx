import "../styles/planWebsite.css";

function PlanWebsite() {

    return (

        <div className="plan-container">

            <h1>Plan My Website</h1>

            <p>
                Tell us about your project.
            </p>

            {/* Personal Information */}

            <div className="form-section">

                <h2>Personal Information</h2>

                <div className="form-group">

                    <label>Name</label>

                    <input
                        type="text"
                        placeholder="Enter your name"
                    />

                </div>

                <div className="form-group">

                    <label>Email</label>

                    <input
                        type="email"
                        placeholder="Enter your email"
                    />

                </div>

                <div className="form-group">

                    <label>Phone Number</label>

                    <input
                        type="tel"
                        placeholder="Enter your phone number"
                    />

                </div>

            </div>

            {/* Business Information */}

            <div className="form-section">

                <h2>Business Information</h2>

                <div className="form-group">

                    <label>Business Name</label>

                    <input
                        type="text"
                    />

                </div>

                <div className="form-group">

                    <label>Website Type</label>

                    <select>

                        <option>Restaurant</option>

                        <option>Hospital</option>

                        <option>Portfolio</option>

                        <option>School</option>

                        <option>E-Commerce</option>

                    </select>

                </div>

                <div className="form-group">

                    <label>Number of Pages</label>

                    <select>

                        <option>5 Pages</option>

                        <option>10 Pages</option>

                        <option>15 Pages</option>

                        <option>20+ Pages</option>

                    </select>

                </div>

            </div>

            {/* Features */}

            <div className="form-section">

                <h2>Required Features</h2>

                <label>

                    <input type="checkbox"/>

                    Contact Form

                </label>

                <br/>

                <label>

                    <input type="checkbox"/>

                    WhatsApp Chat

                </label>

                <br/>

                <label>

                    <input type="checkbox"/>

                    Booking System

                </label>

                <br/>

                <label>

                    <input type="checkbox"/>

                    Blog

                </label>

                <br/>

                <label>

                    <input type="checkbox"/>

                    Online Store

                </label>

            </div>

            {/* Budget */}

            <div className="form-section">

                <h2>Budget</h2>

                <select>

                    <option>₹10,000 - ₹20,000</option>

                    <option>₹20,000 - ₹50,000</option>

                    <option>₹50,000+</option>

                </select>

            </div>

            {/* Notes */}

            <div className="form-section">

                <h2>Additional Notes</h2>

                <textarea
                    placeholder="Tell us more about your project..."
                />

            </div>

            <button className="submit-btn">

                Submit Request

            </button>

        </div>

    );

}

export default PlanWebsite;