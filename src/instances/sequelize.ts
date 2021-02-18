import { Sequelize } from 'sequelize-typescript';

export const sequelize = new Sequelize({
  database: 'autostudiodb',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  username: 'postgres',
  password: 'sokill666',
  storage: ':memory:',
  models: [__dirname + '/models'] // or [Player, Team],
});
