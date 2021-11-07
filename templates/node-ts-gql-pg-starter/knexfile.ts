import dotenv from 'dotenv';
dotenv.config({ path: './.env' });

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.POSTGRES_HOST || '127.0.0.1',
      port: process.env.POSTGRES_PORT || 5432,
      database: process.env.POSTGRES_DB || 'node-gql-starter',
      user: process.env.POSTGRES_USER || 'root',
      password: process.env.POSTGRES_PASSWORD || 'root',
    },
    migrations: {
      tableName: 'migrations',
    },
  },
  test: {
    client: 'pg',
    connection: {
      host: process.env.POSTGRES_HOST || '127.0.0.1',
      port: process.env.POSTGRES_PORT || 5432,
      database: 'node-gql-starter-test',
      user: process.env.POSTGRES_USER || 'root',
      password: process.env.POSTGRES_PASSWORD || 'root',
    },
    migrations: {
      tableName: 'migrations',
      directory: './src/infrastructure/knex/migrations',
    },
  },
};
