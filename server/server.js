const express = require('express');
const app = express();
const mysql = require('mysql');
const dotenv = require('dotenv');
app.use(express.json());

dotenv.config();

const con = mysql.createConnection({
	host: process.env.DB_HOST,
	// host: '0.0.0.0',
	user: process.env.DB_USERNAME,
	// user: 'root'
	password: process.env.DB_PASSWORD
	// password: '12345678'
});

const PORT = 4000;
app.listen(PORT, () => {
	console.log(`Server started on http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
	res.send('Hey WORLD!');
});

app.get('/db', (req, res) => {
	con.query(`SHOW DATABASE`, (error, results, fields) => {
		if (error) console.error(error);
		console.log(results);
	});
});

app.post('/new/table/:tableName', (req, res) => {
	let { tableName } = req.params;

	con.query(
		`CREATE TABLE ${tableName} (
    id INT PRIMARY KEY AUTO_INCREMENT,
    msg VARCHAR(255) default "Hey hey hey"
  )`,
		(error, results, fields) => {
			if (error) console.error(error);
			console.log(results);
		}
	);
});
