import knex from 'knex';
import * as knexConfig from '../../../knexfile';

export const dbConnection = knex(knexConfig[process.env.NODE_ENV]);
