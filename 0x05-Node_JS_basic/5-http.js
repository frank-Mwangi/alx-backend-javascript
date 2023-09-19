const http = require('http');
const countStudents = require('./3-read_file_async');

const hostname = '127.0.0.1';
const port = '1245';

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  const { url } = req;
  if (url === '/') {
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2])
      .then((response) => {
        res.end(response);
      })
      .catch((err) => {
        res.statusCode = 404;
        res.end(err.message);
      });
  }
});
app.listen(port, hostname, () => {
  console.log(`Server running at ${hostname}:${port}/`);
});
module.exports = app;
