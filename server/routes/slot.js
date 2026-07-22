const express = require("express");

const router = express.Router();

const {
  createSlot,
  getSlots,
  getAllSlots,
  deleteSlot,
  updateSlotStatus,
} = require("../controllers/slotController");

// ======================================
// Create Slot
// ======================================
router.post("/", createSlot);

// ======================================
// Get Available Slots (Customer)
// Only returns slots whose status is "Available"
// Used on the Booking page
// ======================================
router.get("/", getSlots);

// ======================================
// Get All Slots (Admin Dashboard)
// Returns Available + Booked slots
// Used on the Admin Dashboard
// ======================================
router.get("/all", getAllSlots);

// ======================================
// Update Slot Status
// ======================================
router.put("/:id", updateSlotStatus);

// ======================================
// Delete Slot
// ======================================
router.delete("/:id", deleteSlot);

module.exports = router;