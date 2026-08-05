const db = require("./config/database");
const express = require("express");
const cors = require("cors");
const enquiryRoutes = require("./routes/enquiryRoutes");
const propertyRoutes = require("./routes/propertyRoutes");
require("dotenv").config();

const app = express();

// ===============================
// Middleware
// ===============================
app.use(cors());
app.use(express.json());
app.use("/api/enquiries", enquiryRoutes);
app.use("/api/properties", propertyRoutes);

// ===============================
// Test Route
// ===============================
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "🚀 SS Infra Ventures Backend is Running Successfully",
  });
});

// ===============================
// Health Check
// ===============================
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    status: "OK",
    serverTime: new Date(),
  });
});

// ===============================
// Server
// ===============================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("======================================");
  console.log("🚀 SS Infra Ventures Backend Started");
  console.log(`🌐 Server : http://localhost:${PORT}`);
  console.log("======================================");
});