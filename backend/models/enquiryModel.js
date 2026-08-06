const db = require("../config/database");


// ===============================
// Create Enquiry
// ===============================

const createEnquiry = async (enquiry, callback) => {

  try {

    const result = await db.query(
      `
      INSERT INTO enquiries
      (name, phone, email, plot, message)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING id
      `,
      [
        enquiry.name,
        enquiry.phone,
        enquiry.email,
        enquiry.plot,
        enquiry.message,
      ]
    );

    callback(null, result.rows[0].id);

  } catch (err) {

    callback(err);

  }

};


// ===============================
// Get All Enquiries
// ===============================

const getAllEnquiries = async (callback) => {

  try {

    const result = await db.query(
      `
      SELECT *
      FROM enquiries
      ORDER BY created_at DESC
      `
    );

    callback(null, result.rows);

  } catch (err) {

    callback(err);

  }

};


// ===============================
// Get Enquiry By ID
// ===============================

const getEnquiryById = async (id, callback) => {

  try {

    const result = await db.query(
      `
      SELECT *
      FROM enquiries
      WHERE id = $1
      `,
      [id]
    );

    callback(null, result.rows[0]);

  } catch (err) {

    callback(err);

  }

};


// ===============================
// Update Enquiry
// ===============================

const updateEnquiry = async (id, enquiry, callback) => {

  try {

    await db.query(
      `
      UPDATE enquiries
      SET
        name = $1,
        phone = $2,
        email = $3,
        plot = $4,
        message = $5,
        status = $6
      WHERE id = $7
      `,
      [
        enquiry.name,
        enquiry.phone,
        enquiry.email,
        enquiry.plot,
        enquiry.message,
        enquiry.status,
        id,
      ]
    );

    callback(null);

  } catch (err) {

    callback(err);

  }

};


// ===============================
// Update Status
// ===============================

const updateStatus = async (id, status, callback) => {

  try {

    await db.query(
      `
      UPDATE enquiries
      SET status = $1
      WHERE id = $2
      `,
      [
        status,
        id,
      ]
    );

    callback(null);

  } catch (err) {

    callback(err);

  }

};


// ===============================
// Delete Enquiry
// ===============================

const deleteEnquiry = async (id, callback) => {

  try {

    await db.query(
      `
      DELETE FROM enquiries
      WHERE id = $1
      `,
      [id]
    );

    callback(null);

  } catch (err) {

    callback(err);

  }

};


// ===============================
// Get Enquiries For Dropdown
// ===============================

const getEnquiryDropdown = async (callback) => {

  try {

    const result = await db.query(
      `
      SELECT
        id,
        name,
        phone
      FROM enquiries
      ORDER BY name ASC
      `
    );

    callback(null, result.rows);

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