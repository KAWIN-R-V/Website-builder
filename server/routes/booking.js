const express = require("express");

const router = express.Router();

const {
  createBooking,
  getBookings,
  updateBooking,
  deleteBooking,
} = require("../controllers/bookingController");

// Create Booking
router.post("/", createBooking);

// Get All Bookings
router.get("/", getBookings);

// Update Booking
router.put("/:id", updateBooking);

// Delete Booking
router.delete("/:id", deleteBooking);

module.exports = router;