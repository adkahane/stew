// SQL connection
var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3036,
  host: "localhost",
  user: "root",
  password: "iamR00t",
  database: "stew_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export for the ORM
module.exports = connection;