const db = require("../config/database");

const createSiteVisitsTable = async () => {

  const sql = `
    CREATE TABLE IF NOT EXISTS site_visits (

      id SERIAL PRIMARY KEY,

      lead_id INTEGER NOT NULL,

      property_id INTEGER NOT NULL,

      visit_date TEXT NOT NULL,

      visit_time TEXT NOT NULL,

      sales_person TEXT,

      status TEXT DEFAULT 'Scheduled',

      remarks TEXT,

      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

    )
  `;

  try {

    await db.query(sql);

    console.log("✅ Site Visits table ready");

  } catch(err) {

    console.error(
      "❌ Site Visits table failed:",
      err.message
    );

  }

};

module.exports = createSiteVisitsTable;