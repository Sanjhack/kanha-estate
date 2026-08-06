const express = require("express");
const cors = require("cors");
require("dotenv").config();

const reportRoutes = require("./routes/reportRoutes");
const createPropertiesTable = require("./database/createPropertiesTable");

// ===================================
// Routes
// ===================================

const enquiryRoutes = require("./routes/enquiryRoutes");
const propertyRoutes = require("./routes/propertyRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const siteVisitRoutes = require("./routes/siteVisitRoutes");
const followUpRoutes = require("./routes/followUpRoutes");


// ===================================
// Database Connection
// ===================================

require("./config/database");


// ===================================
// Database Tables
// ===================================

const createEnquiriesTable = require("./database/createEnquiriesTable");
const createSiteVisitsTable = require("./database/createSiteVisitsTable");
const createFollowUpsTable = require("./database/createFollowUpsTable");


// ===================================
// App Setup
// ===================================

const app = express();


// ===================================
// Create Database Tables
// ===================================

createEnquiriesTable();
createPropertiesTable();
createSiteVisitsTable();
createFollowUpsTable();


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
app.use("/api/follow-ups", followUpRoutes);
app.use("/api/reports", reportRoutes);


// ===================================
// Test Route
// ===================================

app.get("/", (req, res) => {

  res.json({
    success: true,
    message: "🚀 KANHA ESTATE Backend is Running Successfully",
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
  console.log("🚀 KANHA ESTATE Backend Started");
  console.log(`🌐 Server : http://localhost:${PORT}`);
  console.log("======================================");

});