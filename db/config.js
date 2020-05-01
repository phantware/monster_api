const { Pool } = require("pg");
const { user, password, database, host, port } = require("./secrets/db_config");
const pool = new Pool({ user, password, database, host, port });

pool.query("SELECT * FROM monsters", (err, res) => {
  if (err) return console.log(err);
  console.log(res);
});
