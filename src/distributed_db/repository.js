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
}

module.exports = DB_Operations;
