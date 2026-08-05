const propertyModel = require("../models/propertyModel");

// ===============================
// Create Property
// ===============================
const createProperty = (req, res) => {
  const {
    project_name,
    plot_number,
    plot_size,
    facing,
    price,
    plc,
    status,
    description,
    image,
  } = req.body;

  if (!project_name || !plot_number || !plot_size || !price) {
    return res.status(400).json({
      success: false,
      message: "Project, Plot Number, Plot Size and Price are required.",
    });
  }

  propertyModel.createProperty(
    {
      project_name,
      plot_number,
      plot_size,
      facing,
      price,
      plc,
      status,
      description,
      image,
    },
    (err, propertyId) => {
      if (err) {
        console.error(err);

        return res.status(500).json({
          success: false,
          message: "Failed to create property.",
        });
      }

      res.status(201).json({
        success: true,
        message: "Property created successfully.",
        propertyId,
      });
    }
  );
};

// ===============================
// Get All Properties
// ===============================
const getAllProperties = (req, res) => {
  propertyModel.getAllProperties((err, rows) => {
    if (err) {
      console.error(err);

      return res.status(500).json({
        success: false,
        message: "Failed to fetch properties.",
      });
    }

    res.json({
      success: true,
      data: rows,
    });
  });
};

// ===============================
// Get Property By ID
// ===============================
const getPropertyById = (req, res) => {
  propertyModel.getPropertyById(req.params.id, (err, row) => {
    if (err) {
      console.error(err);

      return res.status(500).json({
        success: false,
        message: "Failed to fetch property.",
      });
    }

    if (!row) {
      return res.status(404).json({
        success: false,
        message: "Property not found.",
      });
    }

    res.json({
      success: true,
      data: row,
    });
  });
};

// ===============================
// Update Property
// ===============================
const updateProperty = (req, res) => {
  const {
    project_name,
    plot_number,
    plot_size,
    facing,
    price,
    plc,
    status,
    description,
    image,
  } = req.body;

  if (!project_name || !plot_number || !plot_size || !price) {
    return res.status(400).json({
      success: false,
      message: "Project, Plot Number, Plot Size and Price are required.",
    });
  }

  propertyModel.updateProperty(
    req.params.id,
    {
      project_name,
      plot_number,
      plot_size,
      facing,
      price,
      plc,
      status,
      description,
      image,
    },
    (err) => {
      if (err) {
        console.error(err);

        return res.status(500).json({
          success: false,
          message: "Failed to update property.",
        });
      }

      res.json({
        success: true,
        message: "Property updated successfully.",
      });
    }
  );
};

// ===============================
// Delete Property
// ===============================
const deleteProperty = (req, res) => {
  propertyModel.deleteProperty(req.params.id, (err) => {
    if (err) {
      console.error(err);

      return res.status(500).json({
        success: false,
        message: "Failed to delete property.",
      });
    }

    res.json({
      success: true,
      message: "Property deleted successfully.",
    });
  });
};

module.exports = {
  createProperty,
  getAllProperties,
  getPropertyById,
  updateProperty,
  deleteProperty,
};