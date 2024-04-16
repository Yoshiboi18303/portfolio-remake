const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "..", "dist")));

app.get("/", (req, res) => {
  // Send our HTML page
  res.sendFile(path.join(__dirname, "..", "..", "dist", "index.html"));
});

app.listen(3000, () => console.log("Listening at http://localhost:3000"));
