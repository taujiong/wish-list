import { Sequelize } from 'sequelize';

const dbUser = process.env.DB_USER ?? 'developer'; // fallback for presentation
const dbPassword = process.env.DB_PWD ?? 'Pas5w0rd*';

export const db = new Sequelize('Wish', dbUser, dbPassword, {
  host: 'localhost',
  dialect: 'postgres',
});
