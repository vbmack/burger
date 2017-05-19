// Node Dependency
var mysql = require('mysql');
var connection = mysql.createConnection({
    port: 3306,
    host     : 'localhost',
    user     : 'root',
    password : 'Mysql2016!', // Add your password
    database : 'burgers_db' // Add your database
  });





// Export the Connection
module.exports = connection;