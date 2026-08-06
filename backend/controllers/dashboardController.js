const dashboardModel = require("../models/dashboardModel");

// ===============================
// Get Dashboard Statistics
// ===============================

const getDashboardStats = (req, res) => {

  dashboardModel.getDashboardStats((err, stats) => {

    if (err) {

      console.error("DASHBOARD ERROR:", err);

      return res.status(500).json({
        success: false,
        message: err.message,
      });

    }

    console.log("Dashboard Stats =>", stats);

    res.json({
      success: true,
      data: stats,
    });

  });

};


module.exports = {
  getDashboardStats,
};