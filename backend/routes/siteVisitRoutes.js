const express = require("express");
const router = express.Router();

const {
  getAllSiteVisits,
  getSiteVisitById,
  createSiteVisit,
  updateSiteVisit,
  deleteSiteVisit,
} = require("../controllers/siteVisitController");

// ===================================
// Get All Site Visits
// ===================================

router.get("/", getAllSiteVisits);

// ===================================
// Get Site Visit By ID
// ===================================

router.get("/:id", getSiteVisitById);

// ===================================
// Create Site Visit
// ===================================

router.post("/", createSiteVisit);

// ===================================
// Update Site Visit
// ===================================

router.put("/:id", updateSiteVisit);

// ===================================
// Delete Site Visit
// ===================================

router.delete("/:id", deleteSiteVisit);

module.exports = router;