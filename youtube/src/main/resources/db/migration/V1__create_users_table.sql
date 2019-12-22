CREATE TABLE users (
  id int(11) PRIMARY KEY AUTO_INCREMENT,
  name varchar(40) NOT NULL UNIQUE,
  password char(60) NOT NULL
)