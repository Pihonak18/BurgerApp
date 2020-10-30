// Set up MySQL connection.
const mysql = require("mysql");

let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {

  connection = mysql.createConnection({
    host: "a5s42n4idx9husyc.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "do8bsashedj7y1op",
    password: "opzq4qm64fn6z2fj",
    database: "g0gmnrt8qqfxerf8"
  });
}



connection.connect();

module.exports = connection;
