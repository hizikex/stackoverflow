import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/sequelize";
import { QuestionSubscriptionAttributes } from "../interfaces/subscription";

export class Subscription
  extends Model<
    InferAttributes<Subscription>,
    InferCreationAttributes<Subscription>
  >
  implements QuestionSubscriptionAttributes
{
  declare user_id: number;
  declare question_id: number;
}

Subscription.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    question_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "subscriptions",
    underscored: true,
  }
);
