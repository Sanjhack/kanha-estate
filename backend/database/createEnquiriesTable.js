const db = require("../config/database");

const createEnquiriesTable = async () => {

  const sql = `
    CREATE TABLE IF NOT EXISTS enquiries (

      id SERIAL PRIMARY KEY,

      name TEXT NOT NULL,

      phone TEXT NOT NULL,

      email TEXT,

      plot TEXT,

      message TEXT,

      status TEXT DEFAULT 'New',

      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

    )
  `;

  try {

    await db.query(sql);

    console.log("✅ Enquiries table ready");

  } catch (err) {

    console.error(
      "❌ Enquiries table creation failed:",
      err.message
    );

  }

};

module.exports = createEnquiriesTable;