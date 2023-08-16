-- db/migration/V1__Create_Users_Table.sql

CREATE TABLE users
(
    id       SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

INSERT INTO users (username, password)
VALUES ('admin', '$2a$10$ApRa64cEb4EG5yPPCQdp4.1/EVvR3MSev22yj6uJfYxbRXB9po40S');