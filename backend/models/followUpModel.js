const db = require("../config/database");

// ===================================
// Get All Follow Ups
// ===================================

const getAllFollowUps = (callback) => {

  const sql = `
    SELECT
      f.*,
      e.name AS customer_name,
      e.phone
    FROM follow_ups f
    LEFT JOIN enquiries e
      ON f.lead_id = e.id
    ORDER BY
      f.followup_date ASC,
      f.followup_time ASC
  `;

  db.all(sql, [], callback);

};

// ===================================
// Get Follow Up By ID
// ===================================

const getFollowUpById = (id, callback) => {

  db.get(
    `
      SELECT *
      FROM follow_ups
      WHERE id = ?
    `,
    [id],
    callback
  );

};

// ===================================
// Create Follow Up
// ===================================

const createFollowUp = (data, callback) => {

  const {
    lead_id,
    followup_date,
    followup_time,
    followup_type,
    priority,
    status,
    sales_person,
    notes,
  } = data;

  db.run(
    `
      INSERT INTO follow_ups
      (
        lead_id,
        followup_date,
        followup_time,
        followup_type,
        priority,
        status,
        sales_person,
        notes
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `,
    [
      lead_id,
      followup_date,
      followup_time,
      followup_type,
      priority,
      status,
      sales_person,
      notes,
    ],
    callback
  );

};

// ===================================
// Update Follow Up
// ===================================

const updateFollowUp = (id, data, callback) => {

  const {
    lead_id,
    followup_date,
    followup_time,
    followup_type,
    priority,
    status,
    sales_person,
    notes,
  } = data;

  db.run(
    `
      UPDATE follow_ups
      SET
        lead_id = ?,
        followup_date = ?,
        followup_time = ?,
        followup_type = ?,
        priority = ?,
        status = ?,
        sales_person = ?,
        notes = ?
      WHERE id = ?
    `,
    [
      lead_id,
      followup_date,
      followup_time,
      followup_type,
      priority,
      status,
      sales_person,
      notes,
      id,
    ],
    callback
  );

};

// ===================================
// Delete Follow Up
// ===================================

const deleteFollowUp = (id, callback) => {

  db.run(
    `
      DELETE FROM follow_ups
      WHERE id = ?
    `,
    [id],
    callback
  );

};

module.exports = {

  getAllFollowUps,
  getFollowUpById,
  createFollowUp,
  updateFollowUp,
  deleteFollowUp,

};