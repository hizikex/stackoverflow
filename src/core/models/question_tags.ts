import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';
import { sequelize } from '../database/sequelize';
import { QuestionTagAttributes } from '../interfaces/question_tag';

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
      references: {
        model: 'questions',
        key: 'id',
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      references: {
        model: 'tags',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    tableName: 'question_tags',
    underscored: true,
  },
);
