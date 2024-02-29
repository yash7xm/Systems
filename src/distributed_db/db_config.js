require("dotenv").config();

module.exports = {
  SERVER_PORT: process.env.SERVER_PORT,
  DB1_PORT: process.env.DB1_PORT,
  DB2_PORT: process.env.DB2_PORT,
  DB1_PASS: process.env.DB1_PASS,
  DB2_PASS: process.env.DB2_PASS,
};
