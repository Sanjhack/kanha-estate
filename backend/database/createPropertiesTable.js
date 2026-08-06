const db = require("../config/database");


const createPropertiesTable = async () => {

  const sql = `

    CREATE TABLE IF NOT EXISTS properties (

      id SERIAL PRIMARY KEY,

      project_name TEXT NOT NULL,

      plot_number TEXT,

      plot_size TEXT,

      facing TEXT,

      price NUMERIC DEFAULT 0,

      plc NUMERIC DEFAULT 0,

      status TEXT DEFAULT 'Available',

      description TEXT,

      image TEXT,

      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

    )

  `;


  try {

    await db.query(sql);

    console.log("✅ Properties table ready");

  } catch(err) {

    console.error(
      "❌ Properties table failed:",
      err.message
    );

  }

};


module.exports = createPropertiesTable;