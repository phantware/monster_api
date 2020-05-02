const express = require("express");
const monsters = require("./router/monster");
const app = express();

app.use(express.json());
app.use("/monsters", monsters);

app.use((err, req, res, next) => {
  res.json(err);
});

module.exports = app;
