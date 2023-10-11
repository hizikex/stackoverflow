import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/sequelize";
import { QuestionTagAttributes } from "../interfaces/question_tag";
import { Question } from "./question";
import { Tag } from "./tags";

export class QuestionTag
  extends Model<
    InferAttributes<QuestionTag>,
    InferCreationAttributes<QuestionTag>
  >
  implements QuestionTagAttributes
{
  declare question_id: number;
  declare tag_id: number;
}

QuestionTag.init(
  {
    question_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    tag_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "question_tags",
    underscored: true,
  }
);

QuestionTag.belongsTo(Question, {
  foreignKey: "question_id",
  as: "question",
});

QuestionTag.belongsTo(Tag, {
  foreignKey: 'tag_id',
  as: 'tag',
});
