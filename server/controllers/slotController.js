const Slot = require("../models/Slot");

// ======================================
// Create a New Slot
// ======================================
const createSlot = async (req, res) => {
  try {
    const { date, time } = req.body;

    // Check if slot already exists
    const existingSlot = await Slot.findOne({
      date: new Date(date),
      time,
    });

    if (existingSlot) {
      return res.status(400).json({
        success: false,
        message: "This time slot already exists.",
      });
    }

    const slot = await Slot.create({
      date,
      time,
      status: "Available",
    });

    res.status(201).json({
      success: true,
      message: "Slot created successfully.",
      slot,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ======================================
// Get Available Slots (Customer)
// ======================================
const getSlots = async (req, res) => {
  try {

    const slots = await Slot.find({
      status: "Available",
    }).sort({
      date: 1,
      time: 1,
    });

    res.status(200).json({
      success: true,
      count: slots.length,
      slots,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};
// ======================================
// Get All Valid Slots (Admin)
// ======================================
const getAllSlots = async (req, res) => {
  try {

    const now = new Date();

    // Remove expired slots automatically
    await Slot.deleteMany({
      $expr: {
        $lt: [
          {
            $dateFromString: {
              dateString: {
                $concat: [
                  {
                    $dateToString: {
                      format: "%Y-%m-%d",
                      date: "$date",
                    },
                  },
                  "T",
                  "$time",
                  ":00",
                ],
              },
            },
          },
          now,
        ],
      },
    });

    // Get remaining slots
    const slots = await Slot.find().sort({
      date: 1,
      time: 1,
    });

    res.status(200).json({
      success: true,
      count: slots.length,
      slots,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ======================================
// Delete Slot
// ======================================
const deleteSlot = async (req, res) => {
  try {

    const slot = await Slot.findById(req.params.id);

    if (!slot) {
      return res.status(404).json({
        success: false,
        message: "Slot not found.",
      });
    }

    await slot.deleteOne();

    res.status(200).json({
      success: true,
      message: "Slot deleted successfully.",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ======================================
// Update Slot Status
// ======================================
const updateSlotStatus = async (req, res) => {
  try {

    const slot = await Slot.findByIdAndUpdate(
      req.params.id,
      {
        status: req.body.status,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!slot) {
      return res.status(404).json({
        success: false,
        message: "Slot not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Slot updated successfully.",
      slot,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

module.exports = {
  createSlot,
  getSlots,
  getAllSlots,
  deleteSlot,
  updateSlotStatus,
};