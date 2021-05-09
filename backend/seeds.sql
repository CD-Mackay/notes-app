DROP TABLE notes CASCADE;

CREATE TABLE notes (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(255),
  category VARCHAR(255),
  note jsonb
);


