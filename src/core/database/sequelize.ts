import { Sequelize, Options } from 'sequelize';

const sequelizeConfig: Options =
  require('../config/config')[process.env.NODE_ENV || 'development'];

const { database, username, password, ...otherConfig } = sequelizeConfig;
const modifiedConfig = {
  ...otherConfig,
  defind: {
    underscored: true,
  },
};

const sequelize = new Sequelize(
  database || '',
  username || '',
  password || '',
  modifiedConfig,
);

export { sequelize, Sequelize };
