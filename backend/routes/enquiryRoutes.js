const express = require("express");
const router = express.Router();

const {
  createEnquiry,
  getAllEnquiries,
  getEnquiryById,
  updateStatus,
  deleteEnquiry,
} = require("../controllers/enquiryController");

// Create Enquiry
router.post("/", createEnquiry);

// Get All Enquiries
router.get("/", getAllEnquiries);

// Get Single Enquiry
router.get("/:id", getEnquiryById);

// Update Enquiry Status
router.put("/:id", updateStatus);

// Delete Enquiry
router.delete("/:id", deleteEnquiry);

module.exports = router;