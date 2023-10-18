import {
  Model,
  DataTypes,
  InferAttributes,
  CreationOptional,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/sequelize";
import { TagAttributes } from "../interfaces/tag";

export class Tag
  extends Model<
    InferAttributes<Tag>,
    InferCreationAttributes<Tag>
  >
  implements TagAttributes
{
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
    },
  },
  {
    sequelize,
    tableName: "tags",
    underscored: true,
  }
);
