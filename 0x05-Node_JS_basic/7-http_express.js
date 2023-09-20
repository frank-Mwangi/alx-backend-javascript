const express = require('express');
const countStudents = require('./3-read_file_async');

const port = '1245';
const host = 'localhost';

const app = express();
app.get('/', (req, res) => {
  res.status(200).send('Hello Holberton School!');
});
app.get('/students', (req, res) => {
  countStudents(process.argv[2])
    .then((response) => {
      res.status(200).send(`This is the list of our students\n ${response}`);
    })
    .catch((err) => {
      res.status(404).send(err.message);
    });
});
app.listen(port, host, () => {
  console.log(`Server running on ${host}:${port}`);
});
module.exports = app;
