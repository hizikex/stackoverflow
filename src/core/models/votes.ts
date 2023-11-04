import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/sequelize";
import { User } from "./users";
import { VoteAttributes, VoteType } from "../interfaces/vote";
import { Answer } from "./answers";

export class Vote
  extends Model<
    InferAttributes<Vote>,
    InferCreationAttributes<Vote>
  >
  implements VoteAttributes
{

  declare user_id: number;
  declare answer_id: number;
  declare vote_type: VoteType;
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
    },
  },
  {
    sequelize,
    tableName: "votes",
    underscored: true,
  }
);

Vote.belongsTo(User, {
  foreignKey: "id",
  as: "user",
});

Vote.belongsTo(Answer, {
  foreignKey: "id",
  as: "answer",
});
