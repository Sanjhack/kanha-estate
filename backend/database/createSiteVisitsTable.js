const db = require("../config/database");

const createSiteVisitsTable = () => {

  try {

    const sql = `
      CREATE TABLE IF NOT EXISTS site_visits (

        id INTEGER PRIMARY KEY AUTOINCREMENT,

        lead_id INTEGER NOT NULL,

        property_id INTEGER NOT NULL,

        visit_date TEXT NOT NULL,

        visit_time TEXT NOT NULL,

        sales_person TEXT,

        status TEXT DEFAULT 'Scheduled',

        remarks TEXT,

        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,

        FOREIGN KEY (lead_id)
          REFERENCES enquiries(id),

        FOREIGN KEY (property_id)
          REFERENCES properties(id)

      )
    `;


    db.exec(sql);

    console.log("✅ Site Visits table ready");


  } catch (err) {

    console.error(
      "❌ Site Visits table creation failed:",
      err.message
    );

  }

};


module.exports = createSiteVisitsTable;