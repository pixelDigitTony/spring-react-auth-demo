-- db/migration/V1__Create_Users_Table.sql

CREATE TABLE users
(
    id       SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

INSERT INTO users (username, password)
VALUES ('admin', '123456');