const http = require('http');

require('dotenv').config({path: 'portfolio/.env'})
console.log(process.env)

var contentful = require('contentful');




const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

const hostname = process.env.HOSTNAME
const port = process.env.PORT

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});