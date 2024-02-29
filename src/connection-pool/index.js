const express = require("express");
const mysql = require("mysql2");

const config = require("./config");

const app = express();

const PORT = config.SERVER_PORT;

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: config.DB1_PASS,
  database: "distributed_db1",
  connectionLimit: 10,
});

console.log(performance.now())
pool.getConnection((error, connection) => {
  if (error) {
    console.error("Error connecting to MySQL database:", error);
  } else {
    console.log("Connected to MySQL database!");
    connection.release();
  }
});
console.log(performance.now())

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});

