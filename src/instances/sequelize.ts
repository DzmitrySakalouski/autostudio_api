import { Sequelize } from 'sequelize-typescript';

export const sequelize = new Sequelize(process.env.DATABASE_URL, {
  database: 'd5c59fhi9pib4t',
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  username: 'ssitzwrjwtuidn',
  password: 'd20983e9001d8440f051ef20fdbcfdc0abe689664fee7d293a10d22ef33323b0',
  storage: ':memory:',
  models: [__dirname + '/models'] // or [Player, Team],
});
