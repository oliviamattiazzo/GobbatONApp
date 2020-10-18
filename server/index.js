var http = require('http');
const mysql = require('mysql');
require('dotenv').config();

var server = http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World\n');
}).listen(3000);

console.log('Server running at localhost:3000');

const connection = mysql.createConnection({
    host: process.env.HOST_DB, 
    port: process.env.PORT_DB,
    user: process.env.USERNAME_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.NAME_DB
});

connection.connect(function(err) {
    if (err) return console.log(err);
    console.log('Conectou!');
});