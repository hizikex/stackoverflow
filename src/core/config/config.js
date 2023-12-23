require('dotenv').config();

const databaseConfig = {
  database: process.env.MYSQL_DATABASE || 'stackoverflow',
  username: process.env.MYSQL_USERNAME || 'root',
  password: process.env.MYSQL_PASSWORD || 'password',
  host: process.env.MYSQL_HOST || '127.0.0.1',
  dialect: 'mysql',
  dialectOptions: {
    bigNumberStrings: true,
  },
};

module.exports = {
  development: {
    ...databaseConfig,
  },
  test: {
    ...databaseConfig,
  },
  staging: {
    ...databaseConfig,
  },
  production: {
    ...databaseConfig,
    logging: false,
  },
};
