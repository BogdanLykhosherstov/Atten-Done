const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

const SELECT_ALL = 'SELECT * FROM student';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Atten-done',
  database: 'atten-done'
});

connection.connect(err => {
  if(err) {
    return err;
  }
});

console.log(connection);

app.use(cors());

app.get('/', (req, res) => {
  res.send('hello from the server')
});

app.get('/student/add', (req, res) => {
  const {ID, Age, Name, Password, Username} = req.query;
  //console.log(ID, Age, Name, Password, Username);
  const INSERT = 'INSERT INTO student (ID, Age, Name, Password, Username) VALUES(${ID}, ${Age}, `${Name}`, `${Password}`, `${Username}`)';
  connection.query(INSERT, (err, results) => {
    if(err) {
      return res.send(err)
    }
    else {
      return res.send('suc added student')
    }
  });
  res.send('adding student');
})

app.get('/student', (req, res) => {
  connection.query(SELECT_ALL, (err, results) => {
    if(err) {
      return res.send(err)
    }
    else {
      return res.json({
        data: results
      })
    }
  });
});

app.listen(4000, () => {
  console.log('database listening on 4000');
})
