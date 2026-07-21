const express = require("express");

const router = express.Router();

const {
  createBooking,
  getBookings,
  updateBooking,
  deleteBooking,
} = require("../controllers/bookingController");

const protect = require("../middleware/authMiddleware");

// Public Route
router.post("/", createBooking);

// Protected Routes
router.get("/", protect, getBookings);

router.put("/:id", protect, updateBooking);

router.delete("/:id", protect, deleteBooking);

module.exports = router;