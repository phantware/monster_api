const { Router } = require("express");
const pool = require("../db/config");
const router = Router();

router.get("/", (req, res, next) => {
  pool.query("SELECT * FROM habitats ORDER BY id ASC", (err, resp) => {
    if (err) return next(err);
    res.json(resp.rows);
  });
});

router.post("/", (req, res, next) => {
  const { name, climate, temperature } = req.body;

  pool.query(
    "INSERT INTO habitats ( name, climate, temperature ) VALUES ($1,$2,$3)",
    [name, climate, temperature],
    (err, resp) => {
      if (err) return next(err);
      res.redirect("/habitats");
    }
  );
});

module.exports = router;
