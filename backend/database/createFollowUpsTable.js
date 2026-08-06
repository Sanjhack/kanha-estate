const db = require("../config/database");

const createFollowUpsTable = async () => {

  const sql = `
    CREATE TABLE IF NOT EXISTS follow_ups (

      id SERIAL PRIMARY KEY,

      lead_id INTEGER NOT NULL,

      followup_date TEXT NOT NULL,

      followup_time TEXT NOT NULL,

      followup_type TEXT NOT NULL,

      priority TEXT DEFAULT 'Medium',

      status TEXT DEFAULT 'Pending',

      sales_person TEXT,

      notes TEXT,

      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

    )
  `;

  try {

    await db.query(sql);

    console.log("✅ Follow Ups table ready");

  } catch (err) {

    console.error(
      "❌ Follow Ups table failed:",
      err.message
    );

  }

};

module.exports = createFollowUpsTable;