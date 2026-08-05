const followUpModel = require("../models/followUpModel");

// ===================================
// Get All Follow Ups
// ===================================

const getAllFollowUps = (req, res) => {

  followUpModel.getAllFollowUps((err, rows) => {

    if (err) {

      console.error(err);

      return res.status(500).json({
        success: false,
        message: "Failed to fetch follow ups.",
      });

    }

    res.json({
      success: true,
      data: rows,
    });

  });

};

// ===================================
// Get Follow Up By ID
// ===================================

const getFollowUpById = (req, res) => {

  const { id } = req.params;

  followUpModel.getFollowUpById(id, (err, row) => {

    if (err) {

      console.error(err);

      return res.status(500).json({
        success: false,
        message: "Failed to fetch follow up.",
      });

    }

    if (!row) {

      return res.status(404).json({
        success: false,
        message: "Follow up not found.",
      });

    }

    res.json({
      success: true,
      data: row,
    });

  });

};

// ===================================
// Create Follow Up
// ===================================

const createFollowUp = (req, res) => {

  followUpModel.createFollowUp(req.body, function (err) {

    if (err) {

      console.error(err);

      return res.status(500).json({
        success: false,
        message: "Failed to create follow up.",
      });

    }

    res.status(201).json({
      success: true,
      message: "Follow Up Created Successfully",
      id: this.lastID,
    });

  });

};

// ===================================
// Update Follow Up
// ===================================

const updateFollowUp = (req, res) => {

  const { id } = req.params;

  followUpModel.updateFollowUp(
    id,
    req.body,
    function (err) {

      if (err) {

        console.error(err);

        return res.status(500).json({
          success: false,
          message: "Failed to update follow up.",
        });

      }

      res.json({
        success: true,
        message: "Follow Up Updated Successfully",
      });

    }
  );

};

// ===================================
// Delete Follow Up
// ===================================

const deleteFollowUp = (req, res) => {

  const { id } = req.params;

  followUpModel.deleteFollowUp(id, function (err) {

    if (err) {

      console.error(err);

      return res.status(500).json({
        success: false,
        message: "Failed to delete follow up.",
      });

    }

    res.json({
      success: true,
      message: "Follow Up Deleted Successfully",
    });

  });

};

module.exports = {

  getAllFollowUps,
  getFollowUpById,
  createFollowUp,
  updateFollowUp,
  deleteFollowUp,

};