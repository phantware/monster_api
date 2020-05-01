const express = require("express");
const pool = require("./db/config");

const app = express();

app.get("/monsters", (req, res,next) => {
  pool.query("SELECT * FROM monster ORDER BY id ASC", (err, resp) => {
    if (err) return next(err);
    res.json(resp.rows);
  });
});

app.use((err, req, res, next) => {
    res.json(err)
});

module.exports = app;
