const db = require("../config/database");

// ===============================
// Dashboard Statistics
// ===============================

function getDashboardStats(callback) {
  const sql = `
    SELECT
      (SELECT COUNT(*) FROM enquiries) AS totalLeads,

      (SELECT COUNT(*) FROM enquiries
        WHERE status='New') AS newLeads,

      (SELECT COUNT(*) FROM enquiries
        WHERE status='Contacted') AS contactedLeads,

      (SELECT COUNT(*) FROM enquiries
        WHERE status='Booked') AS bookedLeads,

      (SELECT COUNT(*) FROM properties) AS totalProperties,

      (SELECT COUNT(*) FROM properties
        WHERE status='Available') AS availableProperties,

      (SELECT COUNT(*) FROM properties
        WHERE status='Reserved') AS reservedProperties,

      (SELECT COUNT(*) FROM properties
        WHERE status='Sold') AS soldProperties;
  `;

  db.get(sql, [], callback);
}

module.exports = {
  getDashboardStats,
};