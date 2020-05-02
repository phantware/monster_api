const { Router } = require("express");
const pool = require("../db/config");
const router = Router();

router.get("/", (req, res, next) => {
  pool.query("SELECT * FROM lives", (err, resp) => {
    if (err) return next(err);
    res.json(resp.rows);
  });
});

router.get("/condition", (req, res, next) => {
  pool.query("SELECT * FROM lives JOIN habitats ON habitats.name = lives.habitat", (err, resp) => {
    if (err) return next(err);
    res.json(resp.rows);
  });
});

module.exports = router;
