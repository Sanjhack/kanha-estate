const db = require("./config/database");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

// ===================================
// Routes
// ===================================

const enquiryRoutes = require("./routes/enquiryRoutes");
const propertyRoutes = require("./routes/propertyRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const siteVisitRoutes = require("./routes/siteVisitRoutes");

// ===================================
// Database Tables
// ===================================

const createSiteVisitsTable = require("./database/createSiteVisitsTable");

const app = express();

// ===================================
// Create Database Tables
// ===================================

createSiteVisitsTable();

// ===================================
// Middleware
// ===================================

app.use(cors());
app.use(express.json());

// ===================================
// API Routes
// ===================================

app.use("/api/enquiries", enquiryRoutes);
app.use("/api/properties", propertyRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/site-visits", siteVisitRoutes);

// ===================================
// Test Route
// ===================================

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "🚀 SS Infra Ventures Backend is Running Successfully",
  });
});

// ===================================
// Health Check
// ===================================

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    status: "OK",
    serverTime: new Date(),
  });
});

// ===================================
// Start Server
// ===================================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("======================================");
  console.log("🚀 SS Infra Ventures Backend Started");
  console.log(`🌐 Server : http://localhost:${PORT}`);
  console.log("======================================");
});