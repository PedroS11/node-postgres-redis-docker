#Starter kit with NodeJs, PostgreSQL and Redis in Docker containers

##Usage
> git clone https://github.com/PedroS11/node-postgres-redis-docker

> cd node-postgres-redis-docker

> docker-compose build 

> docker-compose up



## Example

There is some paths using the previous resources

GET /patient performs a query to the database

POST /redis stores a key in a Redis session

GET / Returns the the previous key

It has Eslint included with a command to fix the issues

## Recreate the database
> docker-compose run database bash
> rm -rf /var/lib/postgres/data

> exit

An error will prompt, just ignore it.

Run again 
> docker-compose up

and the database will be recreated
