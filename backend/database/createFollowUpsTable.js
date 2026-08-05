const db = require("../config/database");

function createFollowUpsTable() {
  const sql = `
    CREATE TABLE IF NOT EXISTS follow_ups (
      id INTEGER PRIMARY KEY AUTOINCREMENT,

      lead_id INTEGER NOT NULL,

      followup_date TEXT NOT NULL,
      followup_time TEXT NOT NULL,

      followup_type TEXT NOT NULL,

      priority TEXT DEFAULT 'Medium',

      status TEXT DEFAULT 'Pending',

      sales_person TEXT,

      notes TEXT,

      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,

      FOREIGN KEY (lead_id)
      REFERENCES enquiries(id)
      ON DELETE CASCADE
    );
  `;

  db.run(sql, (err) => {

    if (err) {

      console.error("❌ Error creating Follow Ups table:", err);

    } else {

      console.log("✅ Follow Ups table ready");

    }

  });
}

module.exports = createFollowUpsTable;