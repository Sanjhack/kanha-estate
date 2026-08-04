const enquiryModel = require("../models/enquiryModel");

// ===============================
// Create Enquiry
// ===============================
const createEnquiry = (req, res) => {
  const { name, phone, email, plot, message } = req.body;

  if (!name || !phone) {
    return res.status(400).json({
      success: false,
      message: "Name and Phone are required.",
    });
  }

  enquiryModel.createEnquiry(
    {
      name,
      phone,
      email,
      plot,
      message,
    },
    (err, enquiryId) => {
      if (err) {
        console.error(err);

        return res.status(500).json({
          success: false,
          message: "Failed to save enquiry.",
        });
      }

      res.status(201).json({
        success: true,
        message: "Enquiry submitted successfully.",
        enquiryId,
      });
    }
  );
};

// ===============================
// Get All Enquiries
// ===============================
const getAllEnquiries = (req, res) => {
  enquiryModel.getAllEnquiries((err, rows) => {
    if (err) {
      console.error(err);

      return res.status(500).json({
        success: false,
        message: "Failed to fetch enquiries.",
      });
    }

    res.json({
      success: true,
      data: rows,
    });
  });
};

// ===============================
// Get Single Enquiry
// ===============================
const getEnquiryById = (req, res) => {
  enquiryModel.getEnquiryById(req.params.id, (err, row) => {
    if (err) {
      console.error(err);

      return res.status(500).json({
        success: false,
        message: "Failed to fetch enquiry.",
      });
    }

    if (!row) {
      return res.status(404).json({
        success: false,
        message: "Enquiry not found.",
      });
    }

    res.json({
      success: true,
      data: row,
    });
  });
};

// ===============================
// Update Status
// ===============================
const updateStatus = (req, res) => {
  console.log("========== UPDATE REQUEST ==========");
  console.log("Method :", req.method);
  console.log("Headers:", req.headers);
  console.log("Body   :", req.body);
  console.log("====================================");

  if (!req.body) {
    return res.status(400).json({
      success: false,
      message: "Request body is missing.",
    });
  }

  const { status } = req.body;

  enquiryModel.updateStatus(req.params.id, status, (err) => {
    if (err) {
      console.error(err);

      return res.status(500).json({
        success: false,
        message: "Failed to update enquiry.",
      });
    }

    res.json({
      success: true,
      message: "Enquiry updated successfully.",
    });
  });
};

// ===============================
// Delete Enquiry
// ===============================
const deleteEnquiry = (req, res) => {
  enquiryModel.deleteEnquiry(req.params.id, (err) => {
    if (err) {
      console.error(err);

      return res.status(500).json({
        success: false,
        message: "Failed to delete enquiry.",
      });
    }

    res.json({
      success: true,
      message: "Enquiry deleted successfully.",
    });
  });
};

module.exports = {
  createEnquiry,
  getAllEnquiries,
  getEnquiryById,
  updateStatus,
  deleteEnquiry,
};