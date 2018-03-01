// SQL connection
var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 8080,
  host: "localhost",
  user: "root",
  password: "iamR00t",
  database: "stew_db"
});

connection.connect(function() {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export for the ORM
module.exports = connection;