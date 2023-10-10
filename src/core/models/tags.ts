import {
    Model,
    DataTypes,
    InferAttributes,
    CreationOptional,
    InferCreationAttributes,
  } from "sequelize";
  import { sequelize } from "../database/sequelize";
import { TagAttributes } from "../interfaces/tag";  
import { Question } from "./questions";

  export class Tag
    extends Model<
      InferAttributes<Tag>,
      InferCreationAttributes<Tag, { omit: "id" }>
    >
    implements TagAttributes
  {
    static map(arg0: (tag: { id: any; }) => Promise<import("./question_tags").QuestionTag>): any {
        throw new Error("Method not implemented.");
    }
    declare id: CreationOptional<number>;
    declare name: string;
  }
  
  Tag.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      tableName: "tags",
      underscored: true,
    }
  );

