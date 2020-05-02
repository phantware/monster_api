const express = require("express");
const routes = require("./router");

const app = express();

app.use(express.json());
app.use("/", routes);

app.use((err, req, res, next) => {
  res.json(err);
});

module.exports = app;
