const express = require("express");
const path = require("path");
require("dotenv").config();
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware for parsing JSON and URL-encoded data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Static assets for production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist/index.html"));
  });
}

// Custom error handling middleware
app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  console.error("Stack trace:", err.stack);
  res.status(500).send("Internal Server Error");
});

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
