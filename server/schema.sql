-- -- DROP DATABASE hoshi;
-- CREATE DATABASE IF NOT EXISTS hoshi;

-- USE hoshi;

CREATE TABLE IF NOT EXISTS user (
  token VARCHAR(255) PRIMARY KEY,
  latitude REAL,
  longitude REAL,
  city VARCHAR(255),
  lastNotified TIMESTAMP DEFAULT NOW(),
  isAlartSet BIT DEFAULT 1
)
