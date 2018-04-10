const sqlite3 = require('sqlite3').verbose();

//open connection
let db = new sqlite3.Database('Attendone.db', (err) => {
  if(err) {
    console.error(err.message);
  }
  console.log('connected to the database');
});

let sql = `SELECT * FROM Student`;

db.all(sql, [],(err, rows) => {
  if (err) {
    throw err;
  }
  rows.forEach((row) => {
    console.log(row);
  });
});

db.run(`INSERT INTO Student(Name) VALUES(?)`, ['dan'], function(err) {
  if (err) {
    return console.log(err.message);
  }
  console.log('inserted');
});

//close connection
db.close((err) => {
  if(err) {
    return console.error(err.message);
  }
  console.log('close the database connection');
});
