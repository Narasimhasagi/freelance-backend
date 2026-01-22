const { Pool } = require("pg");

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 5432,
  ssl: { rejectUnauthorized: false }
});

// Test connection (DO NOT crash server)
pool.query("SELECT 1")
  .then(() => console.log("✅ Supabase PostgreSQL Connected"))
  .catch(err => console.error("❌ DB connection error:", err.message));

module.exports = pool;
