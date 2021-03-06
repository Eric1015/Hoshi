const express = require('express');
const app = express();
const mysql = require('mysql');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
dotenv.config();

const version = 'v1';

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

app.post(`/api/${version}/user`, (req, res) => {
	const { token } = req.body;
	const q = `INSERT INTO user (token) VALUES ("${token}")`;
	con.query(q, (error, result) => {
		if (error) console.log('User exists');
		console.log(result);
	});
});

app.get(`/api/${version}/users`, (req, res) => {
	const q = `SELECT * FROM user`;
	con.query(q, (error, results) => {
		if (error) return res.json(error);
		res.json(results);
	});
});

// updates users geolocation
app.put(`/api/${version}/user/location`, (req, res) => {
	const { token, longitude, latitude } = req.body;
	const q = `UPDATE user SET latitude=${latitude}, longitude=${longitude} WHERE token="${token}"`;
	con.query(q, (error, results) => {
		if (error) return res.json(error);
		res.status(200).json(results);
	});
});

app.get('/db', (req, res) => {
	con.query(`SHOW DATABASES`, (error, results) => {
		if (error) return res.json(error);
		res.status(200).json(results);
	});
});

app.get(`/api/${version}/table/new/user`, (req, res) => {
	const q = `CREATE TABLE IF NOT EXISTS user (
		token VARCHAR(255) PRIMARY KEY,
		latitude REAL,
		longitude REAL,
		city VARCHAR(255),
		lastNotified TIMESTAMP DEFAULT NOW(),
		isAlartSet BIT DEFAULT 1
	)`;
	con.query(q, (error, results) => {
		if (error) return res.json(error);
		res.json(results);
	});
});

app.get('/delete/table/user', (req, res) => {
	const q = `DROP TABLE user`;
	con.query(q, (error, results) => {
		if (error) return res.json(error);
		res.json(results);
	});
});
