import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const DB_NAME = String(process.env.DB_NAME);
const DB_USER = String(process.env.DB_USER);
const DB_PASSWORD = String(process.env.DB_PASSWORD);
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: 'postgres',
});

export default sequelize;
