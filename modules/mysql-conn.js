const mysql = require('mysql2');
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'minju',
	password: 'jmjujmju',
	database: 'minju'
});

module.exports = { mysql, connection };