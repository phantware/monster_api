CREATE TABLE monsters
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    personality VARCHAR(50)
);

CREATE TABLE habitats
(
    id serial PRIMARY KEY,
    name VARCHAR(50),
    climate VARCHAR(50),
    temperature INT
);

CREATE TABLE lives
(
    monster VARCHAR(50),
    habitat VARCHAR(50)
);

INSERT INTO monsters
    (name, personality)
VALUES
    ('Fluffy', 'aggressive'),
    ('Noodles', 'impatient'),
    ('Rusty', 'passionate');

INSERT INTO habitats
    (name, climate, temperature)
VALUES
    ('desert', 'dry', 100),
    ('forest', 'haunted', 70),
    ('mountain', 'icy', 30);

INSERT INTO lives
    (monster, habitat)
VALUES
    ('Fluffy', 'desert'),
    ('Noodles', 'forest'),
    ('Rusty', 'mountain')