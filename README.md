# Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick --api-only
```

or manually clone the repo and then run `npm install`.

### .Env

Create file .env. 
Copy  all of file '.env.example' and paste in .env
and add values in environment variables to connect to database.
```
DB_USER=
DB_PASSWORD=
DB_DATABASE=
```
### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

### Seeder

Run the following command to run startup seed.

```js
adonis seed
```
