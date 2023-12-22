import {
  Model,
  DataTypes,
  InferAttributes,
  CreationOptional,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/sequelize";
import { User } from "./users";
import { Question } from "./question";
import { AnswerAttributes } from "../interfaces/answer";

export class Answer
  extends Model<
    InferAttributes<Answer>,
    InferCreationAttributes<Answer, { omit: "id" }>
  >
  implements AnswerAttributes
{
  declare id: CreationOptional<number>;
  declare user_id: number;
  declare question_id: number;
  declare content: string;
}

Answer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
        key: 'id',
      },
    },
    question_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Question',
        key: 'id',
      },
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    tableName: "answers",
    underscored: true,
  }
);

Answer.belongsTo(User, {
  foreignKey: "user_id",
  as: "user",
});

Answer.belongsTo(Question, {
  foreignKey: "id",
  as: "question",
});
