const mysql = require('mysql2/promise');
require('dotenv').config();

const password = process.env.password

const connection = mysql.createPool({
  user: 'madruga665',
  password: password,
  host: 'localhost',
  database: 'model_example'
});

module.exports = connection;
