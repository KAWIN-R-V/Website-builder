const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

// Routes
const bookingRoutes = require("./routes/booking");
const adminRoutes = require("./routes/admin");
const slotRoutes = require("./routes/slot");

const app = express();

// ===============================
// Connect MongoDB
// ===============================
connectDB();

// ===============================
// Middleware
// ===============================
app.use(cors());
app.use(express.json());

// ===============================
// Test Route
// ===============================
app.get("/", (req, res) => {
  res.send("🚀 WebBuilder Backend Running");
});

// ===============================
// API Routes
// ===============================
app.use("/api/booking", bookingRoutes);

app.use("/api/admin", adminRoutes);

app.use("/api/slots", slotRoutes);

// ===============================
// Start Server
// ===============================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `✅ Server running on http://localhost:${PORT}`
  );
});