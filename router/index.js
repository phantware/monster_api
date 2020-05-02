const { Router } = require("express");

const monsters = require("./monster");
const habitats = require("./habitat");
const lives = require("./lives");

const router = Router();

router.use("/monsters", monsters);
router.use("/habitats", habitats);
router.use("/lives", lives);

module.exports = router;
