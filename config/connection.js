const mysql = require('mysql');

let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'blonze2d5mrbmcgf.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: 3306,
    user: 'ht02rr3wsciyj7he',
    password: 'n985if9ovbv0xzhq',
    database: 'sh62ekazl622fjw9'
  });
}

connection.connect((err) => {
  if (err) return console.error(`error connecting: ${err.stack}`);
  console.log(`connected as id ${connection.threadId}`);
});

module.exports = connection;