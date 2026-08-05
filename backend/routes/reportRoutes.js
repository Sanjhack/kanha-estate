const express = require("express");
const router = express.Router();

const {
  getSummary,
} = require("../controllers/reportController");

// ===================================
// Reports Summary
// ===================================

router.get("/summary", getSummary);

module.exports = router;