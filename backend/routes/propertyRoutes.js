const express = require("express");
const router = express.Router();

const {
  createProperty,
  getAllProperties,
  getPropertyById,
  updateProperty,
  deleteProperty,
  getPropertyDropdown,
} = require("../controllers/propertyController");

// ===============================
// Create Property
// ===============================
router.post("/", createProperty);

// ===============================
// Get All Properties
// ===============================
router.get("/", getAllProperties);

// ===============================
// Property Dropdown
// ===============================
router.get("/dropdown", getPropertyDropdown);

// ===============================
// Get Single Property
// ===============================
router.get("/:id", getPropertyById);

// ===============================
// Update Property
// ===============================
router.put("/:id", updateProperty);

// ===============================
// Delete Property
// ===============================
router.delete("/:id", deleteProperty);

module.exports = router;