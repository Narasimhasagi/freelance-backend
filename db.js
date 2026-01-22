const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

// Test connection
pool.query("SELECT 1")
  .then(() => console.log("✅ Supabase PostgreSQL Connected"))
  .catch(err => console.error("❌ DB connection error:", err.message));

module.exports = pool;
