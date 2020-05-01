const express = require("express");
const pool = require("./db/config");

const app = express();

app.get("/monsters", (req, res, next) => {
  pool.query("SELECT * FROM monsters ORDER BY id ASC", (err, resp) => {
    if (err) return next(err);
    res.json(resp.rows);
  });
});

app.get("/monsters/:id", (req, res, next) => {
  const { id } = req.params;
  pool.query("SELECT * FROM monsters WHERE id = $1", [id], (err, resp) => {
    if (err) return next(err);
    res.json(resp.rows);
  });
});

app.use((err, req, res, next) => {
  res.json(err);
});

module.exports = app;
