// Node Dependency
var mysql = require('mysql');
var connection = mysql.createConnection({
    port: 3306,
    host     : 'localhost',
    user     : 'root',
    password : 'Mysql2016!', // Add your password
    database : 'burgers_db' // Add your database
  });

//Make connection.
connection.connect9function(err) {
	if (err) {
		console.error("error connecting: " + err.stack);
		return;
	}
	console.log("connected as id " + connection.threadId);
};



// Export the Connection
module.exports = connection;