const express = require("express");

const config = require("./db_config");
const { connection1, connection2 } = require("./connections");

const app = express();

connection1.connect((error) => {
  if (error) {
    console.error("Error connecting to MySQL database:", error);
  } else {
    console.log("Connected to MySQL database! (1)");
  }
});

connection2.connect((error) => {
  if (error) {
    console.error("Error connecting to MySQL database:", error);
  } else {
    console.log("Connected to MySQL database! (2)");
  }
});

// connection1.query(
//   "CREATE TABLE KV (`key` VARCHAR(16), value VARCHAR(255), ttl INT)",
//   (error, results, fields) => {
//     if (error) throw error;
//     console.log(results);
//   }
// );

// connection2.query(
//   "CREATE TABLE KV (`key` VARCHAR(16), value VARCHAR(255), ttl INT)",
//   (error, results, fields) => {
//     if (error) throw error;
//     console.log(results);
//   }
// );

app.listen(config.SERVER_PORT, () => {
  console.log(`server running on ${config.SERVER_PORT}`);
});
