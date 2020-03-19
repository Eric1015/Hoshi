DROP DATABASE hoshi;
CREATE DATABASE hoshi;
USE hoshi;

CREATE TABLE user (
  token VARCHAR(513) PRIMARY KEY,
  latitude REAL,
  longtitude REAL,
  city VARCHAR(255),
)

