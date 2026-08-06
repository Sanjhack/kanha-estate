const Database = require("better-sqlite3");
const path = require("path");

const dbPath = path.join(
  __dirname,
  "../database/enquiries.db"
);

const db = new Database(dbPath);

console.log("✅ SQLite Connected Successfully");


// ===============================
// Create Enquiries Table
// ===============================

db.exec(`
  CREATE TABLE IF NOT EXISTS enquiries (

    id INTEGER PRIMARY KEY AUTOINCREMENT,

    name TEXT NOT NULL,

    phone TEXT NOT NULL,

    email TEXT,

    plot TEXT,

    message TEXT,

    status TEXT DEFAULT 'New',

    created_at DATETIME DEFAULT CURRENT_TIMESTAMP

  )
`);


module.exports = db;