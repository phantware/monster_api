const { Router } = require("express");
const pool = require("../db/config");
const router = Router();

router.get("/", (req, res, next) => {
  pool.query("SELECT * FROM monsters ORDER BY id ASC", (err, resp) => {
    if (err) return next(err);
    return res.json(resp.rows);
  });
});

router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  pool.query("SELECT * FROM monsters WHERE id = $1", [id], (err, resp) => {
    if (err) return next(err);
    return res.json(resp.rows);
  });
});

router.post("/", (req, res, next) => {
  const { name, personality } = req.body;
  pool.query(
    "INSERT INTO monsters (name, personality) VALUES ($1,$2)",
    [name, personality],
    (err, resp) => {
      if (err) return next(err);
      return res.redirect("/monsters");
    }
  );
});

router.put("/:id", (req, res, next) => {
  const { id } = req.params;

  const { name, personality } = req.body;
  const keys = ["name", "personality"];
  const fields = [];

  keys.forEach((key) => {
    if (req.body[key]) fields.push(key);
  });

  fields.forEach((field, index) => {
    pool.query(
      `UPDATE monsters SET ${field}=($1) WHERE id=($2)  RETURNING *`,
      [req.body[field], id],
      (err, resp) => {
        if (err) return next(err);

        if (index === fields.length - 1) res.redirect("/monsters");
      }
    );
  });
});

module.exports = router;
