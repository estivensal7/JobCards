DROP DATABASE IF EXISTS project3;

CREATE DATABASE project3;

USE project3;

CREATE TABLE users (
	user_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL
);

CREATE TABLE saved_jobs (
	job_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100),
    link VARCHAR(2000),
    company VARCHAR(50),
    user_id int,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE notes (
	notes_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    message TEXT,
    user_id INT,
    job_id INT,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (job_id) REFERENCES saved_jobs(job_id)
);