const { Pool } = require("pg");
const { user, password, database, host, port } = require("./secrets/db_config");
const pool = new Pool({ user, password, database, host, port });

module.exports = pool;
