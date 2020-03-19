const express = require('express');
const app = express();
const mysql = require('mysql');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
dotenv.config();
const con = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME
});
const PORT = 4000;
app.listen(process.env.PORT || PORT, () => {
	console.log(`Server started on http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
	res.send('Hey WORLD!');
});

app.post('/api/user/location/', (req, res) => {
	const { uuid, location } = req.body;
});

app.get('/db', (req, res) => {
	con.query(`SHOW DATABASES`, (error, results) => {
		if (error) return console.error(error);
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
