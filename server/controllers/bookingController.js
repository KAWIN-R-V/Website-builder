const Booking = require("../models/Booking");
const Slot = require("../models/Slot");

const {
  sendBookingConfirmation,
} = require("../utils/email");

// ===============================
// Create Booking
// ===============================
const createBooking = async (req, res) => {
  try {

    const {
      slotId,
      ...bookingData
    } = req.body;

    // Find selected slot
    const slot = await Slot.findById(slotId);

    if (!slot) {
      return res.status(404).json({
        success: false,
        message: "Selected slot not found.",
      });
    }

    if (slot.status === "Booked") {
      return res.status(400).json({
        success: false,
        message: "This slot has already been booked.",
      });
    }

    // Create booking
    const booking = await Booking.create({

      ...bookingData,

      meetingDate: slot.date,

      meetingTime: slot.time,

    });

    // Mark slot as booked
    slot.status = "Booked";

    await slot.save();

    // Send email
    try {

      await sendBookingConfirmation(
        booking
      );

    } catch (emailError) {

      console.error(
        "Email Error:",
        emailError.message
      );

    }

    res.status(201).json({

      success: true,

      message:
        "Booking created successfully!",

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
// Update Booking
// ===============================
const updateBooking = async (req, res) => {
  try {

    const booking =
      await Booking.findByIdAndUpdate(
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

    const booking =
      await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    // Make slot available again

    await Slot.findOneAndUpdate(

      {
        date: booking.meetingDate,
        time: booking.meetingTime,
      },

      {
        status: "Available",
      }

    );

    await booking.deleteOne();

    res.status(200).json({

      success: true,

      message:
        "Booking deleted successfully",

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