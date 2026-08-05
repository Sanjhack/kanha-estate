const db = require("../config/database");

// ===============================
// Dashboard Statistics
// ===============================

function getDashboardStats(callback) {

  const sql = `
    SELECT

      /* ==========================
         LEADS
      ========================== */

      (SELECT COUNT(*) FROM enquiries) AS totalLeads,

      (SELECT COUNT(*) FROM enquiries
        WHERE status='New') AS newLeads,

      (SELECT COUNT(*) FROM enquiries
        WHERE status='Contacted') AS contactedLeads,

      (SELECT COUNT(*) FROM enquiries
        WHERE status='Booked') AS bookedLeads,

      /* ==========================
         PROPERTIES
      ========================== */

      (SELECT COUNT(*) FROM properties) AS totalProperties,

      (SELECT COUNT(*) FROM properties
        WHERE status='Available') AS availableProperties,

      (SELECT COUNT(*) FROM properties
        WHERE status='Reserved') AS reservedProperties,

      (SELECT COUNT(*) FROM properties
        WHERE status='Sold') AS soldProperties,

      /* ==========================
         SITE VISITS
      ========================== */

      (SELECT COUNT(*) FROM site_visits) AS totalSiteVisits,

      (SELECT COUNT(*) FROM site_visits
        WHERE status='Scheduled') AS scheduledVisits,

      (SELECT COUNT(*) FROM site_visits
        WHERE status='Completed') AS completedVisits,

      (SELECT COUNT(*) FROM site_visits
        WHERE status='Cancelled') AS cancelledVisits,

      /* ==========================
         FOLLOW UPS
      ========================== */

      (SELECT COUNT(*) FROM follow_ups) AS totalFollowUps,

      (SELECT COUNT(*) FROM follow_ups
        WHERE status='Pending') AS pendingFollowUps,

      (SELECT COUNT(*) FROM follow_ups
        WHERE status='Completed') AS completedFollowUps,

      (SELECT COUNT(*) FROM follow_ups
        WHERE status='Missed') AS missedFollowUps;
  `;

  db.get(sql, [], callback);

}

module.exports = {
  getDashboardStats,
};