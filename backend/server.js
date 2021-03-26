const express = require('express');

const app = express();

const PORT = process.env.port || 8080;
const user = process.env.PGUSER || 'connormackay';
const database = process.env.PGDATABASE || 'notes';
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));



const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: user,
  database: database
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

app.use(express.static(__dirname));

app.get('/notes', (req, res) => {
  pool.query(`SELECT * FROM notes;`)
  .then(data => {
    res.json(data.rows);
  })
});

app.post('/notes', (req, res) => {
  console.log(req.body.note);
  pool.query("INSERT INTO notes(note) VALUES ($1);", [req.body.note])
  .then(res => console.log(res))
  .catch(err => console.log(err));
});

app.delete('/notes', (req, res) => {
  console.log(req.body.note);
  pool.query('DELETE FROM notes WHERE id = $1', [req.body.note.title, req.body.note.text])
  .then(res => console.log(res))
  .catch(err => console.log(err));
});

app.listen(PORT, () => {
    console.log("()---------------------------------()")
    console.log(`Backend running on port ${PORT}!`)
    console.log("()---------------------------------()")
 
});
