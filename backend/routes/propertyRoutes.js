const express = require("express");
const router = express.Router();

const {
  createProperty,
  getAllProperties,
  getPropertyById,
  updateProperty,
  deleteProperty,
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