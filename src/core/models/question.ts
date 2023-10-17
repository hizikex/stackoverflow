import {
  Model,
  DataTypes,
  InferAttributes,
  CreationOptional,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/sequelize";
import { QuestionAttributes } from "../interfaces/questions";
import { User } from "./users";
import { Tag } from "./tags";

export class Question
  extends Model<
    InferAttributes<Question>,
    InferCreationAttributes<Question, { omit: "id" }>
  >
  implements QuestionAttributes
{
  tagList: (string | Tag)[];
  declare id: CreationOptional<number>;
  declare author_id: number;
  declare title: string;
  declare content: string;
}

Question.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    author_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    tableName: "questions",
    underscored: true,
  }
);

Question.belongsTo(User, {
  foreignKey: "author_id",
  as: "users",
});
