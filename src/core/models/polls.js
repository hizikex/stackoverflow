'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class polls extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  polls.init({
    user_id: DataTypes.INTEGER,
    answer_id: DataTypes.INTEGER,
    voted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'polls',
  });
  return polls;
};