const mysql = require("mysql");

// Create a connection to the database
const sqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "hotel_management",
});

sqlConnection.connect((err) => {
  console.log(err);
  if (!err) console.log("Connected Successfully");
  else console.log("Connection Failed!");
});

module.exports = sqlConnection;
