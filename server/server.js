const express = require("express");
const cors = require("cors");
require("dotenv").config();

const bookingRoutes = require("./routes/booking");

const app = express();

app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
    res.send("🚀 WebBuilder Backend is Running...");
});

// Booking Route
app.use("/api/booking", bookingRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});