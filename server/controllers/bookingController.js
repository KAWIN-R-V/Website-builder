const Booking = require("../models/Booking");
const {
  sendBookingConfirmation,
} = require("../utils/email");

// ===============================
// Create Booking
// ===============================
const createBooking = async (req, res) => {
  try {
    const booking = await Booking.create(req.body);

    try {
      await sendBookingConfirmation(booking);
    } catch (emailError) {
      console.error("Email Error:", emailError.message);
    }

    res.status(201).json({
      success: true,
      message: "Booking created successfully!",
      booking,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ===============================
// Get All Bookings
// ===============================
const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: bookings.length,
      bookings,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ===============================
// Update Booking Status
// ===============================
const updateBooking = async (req, res) => {
  try {

    console.log("Request Body:", req.body);

    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    res.status(200).json({
      success: true,
      booking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ===============================
// Delete Booking
// ===============================
const deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    await booking.deleteOne();

    res.status(200).json({
      success: true,
      message: "Booking deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createBooking,
  getBookings,
  updateBooking,
  deleteBooking,
};