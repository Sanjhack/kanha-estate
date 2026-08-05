const db = require("../config/database");

// ===============================
// Create Property
// ===============================
const createProperty = (property, callback) => {
  const sql = `
    INSERT INTO properties
    (
      project_name,
      plot_number,
      plot_size,
      facing,
      price,
      plc,
      status,
      description,
      image
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.run(
    sql,
    [
      property.project_name,
      property.plot_number,
      property.plot_size,
      property.facing,
      property.price,
      property.plc,
      property.status,
      property.description,
      property.image,
    ],
    function (err) {
      callback(err, this?.lastID);
    }
  );
};

// ===============================
// Get All Properties
// ===============================
const getAllProperties = (callback) => {
  db.all(
    `
      SELECT *
      FROM properties
      ORDER BY created_at DESC
    `,
    [],
    callback
  );
};

// ===============================
// Get Property By ID
// ===============================
const getPropertyById = (id, callback) => {
  db.get(
    `
      SELECT *
      FROM properties
      WHERE id = ?
    `,
    [id],
    callback
  );
};

// ===============================
// Update Property
// ===============================
const updateProperty = (id, property, callback) => {
  db.run(
    `
      UPDATE properties
      SET
        project_name = ?,
        plot_number = ?,
        plot_size = ?,
        facing = ?,
        price = ?,
        plc = ?,
        status = ?,
        description = ?,
        image = ?
      WHERE id = ?
    `,
    [
      property.project_name,
      property.plot_number,
      property.plot_size,
      property.facing,
      property.price,
      property.plc,
      property.status,
      property.description,
      property.image,
      id,
    ],
    callback
  );
};

// ===============================
// Delete Property
// ===============================
const deleteProperty = (id, callback) => {
  db.run(
    `
      DELETE FROM properties
      WHERE id = ?
    `,
    [id],
    callback
  );
};

module.exports = {
  createProperty,
  getAllProperties,
  getPropertyById,
  updateProperty,
  deleteProperty,
};