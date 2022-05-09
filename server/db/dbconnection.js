const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config();

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  database: process.env.DATABASE,
  port: process.env.DB_PORT,
  multipleStatements: true
})

connection.connect((err) => {
  if(err){
    console.log(err.message);
  }
  else{
    console.log("connect to DB");
  }
})

module.exports = connection;