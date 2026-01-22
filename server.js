const pool = require("./db");

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
