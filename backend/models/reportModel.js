const db = require("../config/database");

// ===================================
// Reports Summary
// ===================================

const getSummary = (callback) => {

  const sql = `
    SELECT

      (SELECT COUNT(*) FROM enquiries) AS totalLeads,

      (SELECT COUNT(*) FROM properties) AS totalProperties,

      (SELECT COUNT(*) FROM site_visits) AS totalSiteVisits,

      (SELECT COUNT(*) FROM follow_ups) AS totalFollowUps

  `;

  db.get(sql, [], callback);

};

module.exports = {
  getSummary,
};