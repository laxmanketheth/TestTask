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
    host: process.env.DEV_DATABASE_HOST,
    port: process.env.PORT
  }
};

export const production = {
  client: 'postgresql',
  connection: {
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.PROD_DATABASE_HOST,
    port: process.env.PORT
  }
};