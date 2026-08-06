const db = require("../config/database");


// ===============================
// Create Enquiry
// ===============================

const createEnquiry = (enquiry, callback) => {

  try {

    const stmt = db.prepare(`
      INSERT INTO enquiries
      (name, phone, email, plot, message)
      VALUES (?, ?, ?, ?, ?)
    `);

    const result = stmt.run(
      enquiry.name,
      enquiry.phone,
      enquiry.email,
      enquiry.plot,
      enquiry.message
    );

    callback(null, result.lastInsertRowid);

  } catch (err) {

    callback(err);

  }

};


// ===============================
// Get All Enquiries
// ===============================

const getAllEnquiries = (callback) => {

  try {

    const rows = db.prepare(`
      SELECT *
      FROM enquiries
      ORDER BY created_at DESC
    `).all();

    callback(null, rows);

  } catch (err) {

    callback(err);

  }

};


// ===============================
// Get Enquiry By ID
// ===============================

const getEnquiryById = (id, callback) => {

  try {

    const row = db.prepare(`
      SELECT *
      FROM enquiries
      WHERE id = ?
    `).get(id);

    callback(null, row);

  } catch (err) {

    callback(err);

  }

};


// ===============================
// Update Enquiry
// ===============================

const updateEnquiry = (id, enquiry, callback) => {

  try {

    db.prepare(`
      UPDATE enquiries
      SET
        name = ?,
        phone = ?,
        email = ?,
        plot = ?,
        message = ?,
        status = ?
      WHERE id = ?
    `).run(
      enquiry.name,
      enquiry.phone,
      enquiry.email,
      enquiry.plot,
      enquiry.message,
      enquiry.status,
      id
    );

    callback(null);

  } catch (err) {

    callback(err);

  }

};


// ===============================
// Update Status
// ===============================

const updateStatus = (id, status, callback) => {

  try {

    db.prepare(`
      UPDATE enquiries
      SET status = ?
      WHERE id = ?
    `).run(
      status,
      id
    );

    callback(null);

  } catch (err) {

    callback(err);

  }

};


// ===============================
// Delete Enquiry
// ===============================

const deleteEnquiry = (id, callback) => {

  try {

    db.prepare(`
      DELETE FROM enquiries
      WHERE id = ?
    `).run(id);

    callback(null);

  } catch (err) {

    callback(err);

  }

};


// ===============================
// Get Enquiries For Dropdown
// ===============================

const getEnquiryDropdown = (callback) => {

  try {

    const rows = db.prepare(`
      SELECT
        id,
        name,
        phone
      FROM enquiries
      ORDER BY name ASC
    `).all();

    callback(null, rows);

  } catch (err) {

    callback(err);

  }

};


// ===============================
// Exports
// ===============================

module.exports = {
  createEnquiry,
  getAllEnquiries,
  getEnquiryById,
  updateEnquiry,
  updateStatus,
  deleteEnquiry,
  getEnquiryDropdown,
};