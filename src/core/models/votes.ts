import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';
import { sequelize } from '../database/sequelize';
import { User } from './users';
import { VoteAttributes, VoteType } from '../interfaces/vote';
import { Answer } from './answers';

export class Vote
  extends Model<
    InferAttributes<Vote>,
    InferCreationAttributes<Vote, { omit: 'vote_type' }>
  >
  implements VoteAttributes
{
  declare user_id: number;

  declare answer_id: number;

  declare vote_type: 'upvote' | 'downvote';
}

Vote.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    answer_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    vote_type: {
      type: DataTypes.ENUM('upvote', 'downvote'),
      allowNull: false,
      defaultValue: 'downvote',
    },
  },
  {
    sequelize,
    tableName: 'votes',
    underscored: true,
    freezeTableName: true,
  },
);

Vote.belongsTo(User, {
  foreignKey: 'user_id',
  as: 'user',
});

Vote.belongsTo(Answer, {
  foreignKey: 'answer_id',
  as: 'answer',
});
