const kafka = require('kafka-node');
const mysql = require('mysql');
const host = "0.0.0.0";
const mysqlHost = '0.0.0.0';
const root = 'root';
const password = '1234';
const mysqlDatabase = 'mydb';


      
  // const connection = mysql.createConnection({
  //   host: mysqlHost,
  //   user: mysqlUser,
  //   password: mysqlPassword,
  //   database: mysqlDatabase
  // });
  const connection = mysql.createPool({
    connectionLimit : 10,
    host            : mysqlHost,
    user            : 'sadat',
    password        : '1234',
    database        : mysqlDatabase
  });
  
 // test the connection pool
connection.getConnection(function(err, connection) {
  if (err) throw err;
  console.log('Connected as id ' + connection.threadId);
  connection.release();
});
  // rest of your code here
  
  
  
  const express = require('express');
  const app = express();
  
  app.get('/', (req, res) => {
    connection.query('SELECT * FROM users', (error, results) => {
      if (error) {
        console.log('Error fetching data from MySQL:', error);
        res.send('Error fetching data from MySQL.');
      } else {
        console.log('Data fetched from MySQL:', results);
        res.json(results);
      }
    });
  });
  
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Node.js application is listening on port ${port}.`);
  });

//   app.listen(port, host, () => {
//     console.log(`Server listening on http://${host}:${port}`);
//   });
  