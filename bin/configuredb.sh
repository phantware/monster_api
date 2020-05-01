# the below code tell the operatingf system that this is a bash script for it to properly execute the program that we write

#!/bin/bash

export PGPASSWORD='jamiu'

database="monsters_db"

echo "Configuring database: $database"

dropdb -U jamiu monsters_db
createdb -U jamiu monsters_db

psql -U jamiu monsters_db < ./bin/sql/monsters.sql


echo "$database configured"