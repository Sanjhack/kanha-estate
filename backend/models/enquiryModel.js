const db = require("../config/database");

// ===============================
// Create Enquiry
// ===============================

const createEnquiry = (enquiry, callback) => {

  const sql = `
    INSERT INTO enquiries
    (name, phone, email, plot, message)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.run(
    sql,
    [
      enquiry.name,
      enquiry.phone,
      enquiry.email,
      enquiry.plot,
      enquiry.message,
    ],
    function (err) {
      callback(err, this?.lastID);
    }
  );

};

// ===============================
// Get All Enquiries
// ===============================

const getAllEnquiries = (callback) => {

  db.all(
    `
      SELECT *
      FROM enquiries
      ORDER BY created_at DESC
    `,
    [],
    callback
  );

};

// ===============================
// Get Enquiry By ID
// ===============================

const getEnquiryById = (id, callback) => {

  db.get(
    `
      SELECT *
      FROM enquiries
      WHERE id = ?
    `,
    [id],
    callback
  );

};

// ===============================
// Update Enquiry
// ===============================

const updateEnquiry = (id, enquiry, callback) => {

  db.run(
    `
      UPDATE enquiries
      SET
        name = ?,
        phone = ?,
        email = ?,
        plot = ?,
        message = ?,
        status = ?
      WHERE id = ?
    `,
    [
      enquiry.name,
      enquiry.phone,
      enquiry.email,
      enquiry.plot,
      enquiry.message,
      enquiry.status,
      id,
    ],
    callback
  );

};

// ===============================
// Update Status
// ===============================

const updateStatus = (id, status, callback) => {

  db.run(
    `
      UPDATE enquiries
      SET status = ?
      WHERE id = ?
    `,
    [status, id],
    callback
  );

};

// ===============================
// Delete Enquiry
// ===============================

const deleteEnquiry = (id, callback) => {

  db.run(
    `
      DELETE FROM enquiries
      WHERE id = ?
    `,
    [id],
    callback
  );

};

// ===============================
// Get Enquiries For Dropdown
// ===============================

const getEnquiryDropdown = (callback) => {

  db.all(
    `
      SELECT
        id,
        name,
        phone
      FROM enquiries
      ORDER BY name ASC
    `,
    [],
    callback
  );

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