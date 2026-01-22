const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// submit route
app.post("/submit", async (req, res) => {
  const { name, email, projectType, description } = req.body;

  try {
    await pool.query(
      "INSERT INTO project_requests (name, email, projecttype, description) VALUES ($1,$2,$3,$4)",
      [name, email, projectType, description]
    );

    res.json({ message: "Submitted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Database error" });
  }
});

// port (Render uses process.env.PORT)
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
