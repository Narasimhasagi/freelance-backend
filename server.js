const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/submit", (req, res) => {
  const { name, email, projecttype, description } = req.body;

  const sql = "INSERT INTO project_requests VALUES (NULL, ?, ?, ?, ?, NOW())";
  db.query(sql, [name, email, projecttype, description], (err) => {
    if (err) {
      res.json({ message: "Error submitting request" });
    } else {
      res.json({ message: "Project request submitted successfully!" });
    }
  });
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
