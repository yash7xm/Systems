const express = require("express");

const config = require("./db_config");
const DB_Operations = require("./repository");
const { connection1, connection2 } = require("./connections");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

app.post("/insert", (req, res) => {
  const { key, value, ttl } = req.body;

  if (key[0] == "G") {
    const db_op = new DB_Operations(connection1);
    db_op.insert(key, value, ttl);
  } else if (key[0] == "M") {
    const db_op = new DB_Operations(connection2);
    db_op.insert(key, value, ttl);
  }
  res.sendStatus(200);
});

app.delete("/", (req, res) => {
  const { key } = req.body;

  if (key[0] == "G") {
    const db_op = new DB_Operations(connection1);
    db_op.delete(key);
  } else if (key[0] == "M") {
    const db_op = new DB_Operations(connection2);
    db_op.delete(key);
  }
  res.sendStatus(200);
});

app.get("/", (req, res) => {
  const { key } = req.body;

  if (key[0] == "G") {
    const db_op = new DB_Operations(connection1);
    db_op.get(key);
  } else if (key[0] == "M") {
    const db_op = new DB_Operations(connection2);
    db_op.get(key);
  }
  res.sendStatus(200);
});

app.listen(config.SERVER_PORT, () => {
  console.log(`server running on ${config.SERVER_PORT}`);
});
