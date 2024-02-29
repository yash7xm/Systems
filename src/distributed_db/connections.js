const mysql = require("mysql2");
const config = require("./db_config");

const connection1 = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: config.DB1_PASS,
  database: "distributed_db1",
  port: config.DB1_PORT,
});

const connection2 = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: config.DB2_PASS,
  database: "distributed_db2",
  port: config.DB2_PORT,
});

module.exports = {
  connection1: connection1,
  connection2: connection2,
};
