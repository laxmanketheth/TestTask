// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
import dotenv from 'dotenv';
dotenv.config();

export const development = {
  client: 'postgresql',
  connection: {
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.PORT
  }
};
export const staging = {
  client: 'postgresql',
  connection: {
    database: 'my_db',
    user: 'username',
    password: 'password'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
export const production = {
  client: 'postgresql',
  connection: {
    database: 'my_db',
    user: 'username',
    password: 'password'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};