const dashboardModel = require("../models/dashboardModel");

// ===============================
// Get Dashboard Statistics
// ===============================

const getDashboardStats = (req, res) => {
  dashboardModel.getDashboardStats((err, stats) => {
    if (err) {
      console.error(err);

      return res.status(500).json({
        success: false,
        message: "Failed to fetch dashboard statistics.",
      });
    }

    res.json({
      success: true,
      data: stats,
    });
  });
};

module.exports = {
  getDashboardStats,
};