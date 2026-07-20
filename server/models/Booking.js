const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    company: {
      type: String,
      default: "",
    },

    service: {
      type: String,
      required: true,
    },

    budget: {
      type: String,
      default: "",
    },

    meetingDate: {
      type: Date,
      required: true,
    },

    meetingTime: {
      type: String,
      default: "",
    },

    message: {
      type: String,
      default: "",
    },

    // ✅ ADD THIS
    status: {
      type: String,
      enum: ["Pending", "Confirmed", "Completed"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Booking", bookingSchema);