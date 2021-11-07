import { makeExecutableSchema } from '@graphql-tools/schema';
import { ApolloServer } from 'apollo-server-express';
import dotenv from 'dotenv';
import express from 'express';
import fs from 'fs';
import path from 'path';
import { Query } from './graphql';
import { dbConnection } from './infrastructure/knex/dbConnection';
dotenv.config();

const PORT = process.env.PORT || 1933;
const pgAdminPORT = process.env.PGADMIN_PORT || 5050;

const schema = makeExecutableSchema({
  typeDefs: fs.readFileSync(
    path.join(__dirname, './graphql/schema.graphql'),
    'utf-8',
  ),
  resolvers: {
    Query,
  },
});

async function createApolloServer(): Promise<void> {
  try {
    await dbConnection.select('SELECT 1');

    const app = express();

    const server = new ApolloServer({
      schema,
    });

    await server.start();

    server.applyMiddleware({ app });

    app.listen(PORT, () => {
      console.log(`
          🚀 Server ready
          PgAdmin : http://localhost:${pgAdminPORT}/
          GraphqlServer : http://localhost:${PORT}/graphql
        `);
    });
  } catch (err) {
    console.log(err);
  }
}

createApolloServer();
