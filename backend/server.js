const express = require('express');

const app = express();

const PORT = process.env.port || 8080;

app.listen(PORT, () => console.log(`Backend running on port ${PORT}!`));

const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'connormackay',
  database: 'notes'
});


pool.connect((err, client, release) => {
  if (err) {
    return console.error('error acquiring client', err.stack);
  }
  client.query('SELECT NOW()', (err, result) => {
    release()
    if(err) {
      return console.error('error executing query', err.stack);
    }
    console.log(result.rows);
  });
});

app.get('/', (req, res) => {
  pool.query(`SELECT * FROM notes;`)
  .then(data => {
    res.json(data.rows);
  })
});

app.post('/', (req, res) => {
  pool.query(`INSERT INTO TABLE notes (title, text) VALUES ($1, $2)`, [title, text])
});