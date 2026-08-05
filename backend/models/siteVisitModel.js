const db = require("../config/database");

// ===================================
// Get All Site Visits
// ===================================

const getAllSiteVisits = (callback) => {
  const sql = `
    SELECT
      sv.*,
      e.name AS customer_name,
      e.phone,
      p.plot_number,
      p.project_name
    FROM site_visits sv
    LEFT JOIN enquiries e
      ON sv.lead_id = e.id
    LEFT JOIN properties p
      ON sv.property_id = p.id
    ORDER BY sv.visit_date DESC, sv.visit_time DESC
  `;

  db.all(sql, [], callback);
};

// ===================================
// Get Site Visit By ID
// ===================================

const getSiteVisitById = (id, callback) => {
  const sql = `
    SELECT *
    FROM site_visits
    WHERE id = ?
  `;

  db.get(sql, [id], callback);
};

// ===================================
// Create Site Visit
// ===================================

const createSiteVisit = (data, callback) => {

  const {
    lead_id,
    property_id,
    visit_date,
    visit_time,
    sales_person,
    status,
    remarks,
  } = data;

  const sql = `
    INSERT INTO site_visits
    (
      lead_id,
      property_id,
      visit_date,
      visit_time,
      sales_person,
      status,
      remarks
    )
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  db.run(
    sql,
    [
      lead_id,
      property_id,
      visit_date,
      visit_time,
      sales_person,
      status,
      remarks,
    ],
    callback
  );
};

// ===================================
// Update Site Visit
// ===================================

const updateSiteVisit = (id, data, callback) => {

  const {
    lead_id,
    property_id,
    visit_date,
    visit_time,
    sales_person,
    status,
    remarks,
  } = data;

  const sql = `
    UPDATE site_visits
    SET
      lead_id=?,
      property_id=?,
      visit_date=?,
      visit_time=?,
      sales_person=?,
      status=?,
      remarks=?
    WHERE id=?
  `;

  db.run(
    sql,
    [
      lead_id,
      property_id,
      visit_date,
      visit_time,
      sales_person,
      status,
      remarks,
      id,
    ],
    callback
  );
};

// ===================================
// Delete Site Visit
// ===================================

const deleteSiteVisit = (id, callback) => {

  db.run(
    "DELETE FROM site_visits WHERE id=?",
    [id],
    callback
  );

};

module.exports = {

  getAllSiteVisits,
  getSiteVisitById,
  createSiteVisit,
  updateSiteVisit,
  deleteSiteVisit,

};