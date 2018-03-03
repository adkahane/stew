// SQL connection
var mysql = require("mysql");

if(process.env.JAWSDB_URL) {
  // Heroku deployment
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
  var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "iamR00t",
    database: "stew_db"
  });
}

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export for the ORM
module.exports = connection;