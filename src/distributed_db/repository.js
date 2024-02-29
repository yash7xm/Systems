class DB_Operations {
  constructor(db) {
    this.db = db;
  }

  insert(key, value, ttl) {
    const sql = "REPLACE INTO `KV` (`key`, value, ttl) VALUES (?, ?, ?)";
    const params = [key, value, ttl];

    this.db.query(sql, params, (error, results, fields) => {
      if (error) throw error;
      console.log(results);
    });
  }

  delete(key) {
    const sql = "UPDATE KV SET ttl = NULL WHERE `key` = ? AND ttl > NOW()";
    const params = [key];

    this.db.query(sql, params, (error, results, fields) => {
      if (error) throw error;
      console.log(results);
    });
  }

  deleteExpired() {
    const sql = "DELETE FROM KV WHERE ttl <= NOW()";

    this.db.query(sql, (error, results) => {
      if (error) throw error;
      console.log(results);
    });
  }

  get(key) {
    const sql = "SELECT * FROM KV WHERE `key` = ? AND ttl > NOW()";
    const params = [key];

    this.db.query(sql, params, (error, results) => {
      if (error) throw error;
      console.log(results);
    });
  }
}

module.exports = DB_Operations;
