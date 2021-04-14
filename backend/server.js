const express = require('express');

const app = express();

const PORT = process.env.port || 8080;
const user = process.env.PGUSER || 'connormackay';
const database = process.env.PGDATABASE || 'notes';
const bodyParser = require('body-parser');

app.use(bodyParser.json());
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
  console.log(req.body);
  pool.query('DELETE FROM notes WHERE id = $1', [req.body.id])
  .then(res => console.log(res.command))
  .catch(err => console.log(err));
});

app.put('/notes/:noteID', (req, res) => {
  let noteID = req.params.noteID;

  pool.query('UPDATES notes SET note = $1 where note_id = $2', [ req.body, noteID])
  .then(res => console.log(res.command))
  .catch(err => console.log(err));
});

app.listen(PORT, () => {
  setTimeout(() => {
    console.log("3!!!");
  }, 400)
  setTimeout(() => {
    console.log("2!!");
  }, 800)
  setTimeout(() => {
    console.log("1!");
  }, 1200)
  setTimeout(() => {
    console.log(`Backend running on port ${PORT}!`)
  }, 2000)
  setTimeout(() => {
    console.log("Is it really though? ¯\_(ツ)_/¯")
  }, 8000)

    
});
