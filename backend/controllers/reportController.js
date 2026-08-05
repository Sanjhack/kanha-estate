const reportModel = require("../models/reportModel");

// ===================================
// Reports Summary
// ===================================

const getSummary = (req, res) => {

  reportModel.getSummary((err, row) => {

    if (err) {

      console.error(err);

      return res.status(500).json({
        success: false,
        message: "Failed to fetch report summary.",
      });

    }

    res.json({
      success: true,
      data: row,
    });

  });

};

module.exports = {
  getSummary,
};