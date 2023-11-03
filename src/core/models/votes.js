'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class votes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  votes.init({
    user_id: DataTypes.INTEGER,
    answer_id: DataTypes.INTEGER,
    voteType: DataTypes.ENUM('upvote', 'downvote')
  }, {
    sequelize,
    modelName: 'votes',
  });
  return votes;
};