const express = require("express");
const router = express.Router();

const {
  createEnquiry,
  getAllEnquiries,
  getEnquiryById,
  updateEnquiry,
  deleteEnquiry,
  getEnquiryDropdown,
} = require("../controllers/enquiryController");

// ===============================
// Create Enquiry
// ===============================
router.post("/", createEnquiry);

// ===============================
// Get All Enquiries
// ===============================
router.get("/", getAllEnquiries);

// ===============================
// Enquiry Dropdown
// ===============================
router.get("/dropdown", getEnquiryDropdown);

// ===============================
// Get Single Enquiry
// ===============================
router.get("/:id", getEnquiryById);

// ===============================
// Update Complete Enquiry
// ===============================
router.put("/:id", updateEnquiry);

// ===============================
// Delete Enquiry
// ===============================
router.delete("/:id", deleteEnquiry);

module.exports = router;