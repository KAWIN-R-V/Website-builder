const express = require("express");

const router = express.Router();

const {
  createAdmin,
  loginAdmin,
} = require("../controllers/adminController");

// Create first admin
router.post("/create", createAdmin);

// Login
router.post("/login", loginAdmin);

module.exports = router;