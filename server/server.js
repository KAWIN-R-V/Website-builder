const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const bookingRoutes = require("./routes/booking");

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("🚀 WebBuilder Backend Running");
});

// Routes
app.use("/api/booking", bookingRoutes);

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});