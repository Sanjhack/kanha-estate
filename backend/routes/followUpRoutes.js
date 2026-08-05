const express = require("express");
const router = express.Router();

const {
  getAllFollowUps,
  getFollowUpById,
  createFollowUp,
  updateFollowUp,
  deleteFollowUp,
} = require("../controllers/followUpController");

// ===================================
// Get All Follow Ups
// ===================================

router.get("/", getAllFollowUps);

// ===================================
// Get Follow Up By ID
// ===================================

router.get("/:id", getFollowUpById);

// ===================================
// Create Follow Up
// ===================================

router.post("/", createFollowUp);

// ===================================
// Update Follow Up
// ===================================

router.put("/:id", updateFollowUp);

// ===================================
// Delete Follow Up
// ===================================

router.delete("/:id", deleteFollowUp);

module.exports = router;