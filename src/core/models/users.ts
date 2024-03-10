import {
  Model,
  DataTypes,
  InferAttributes,
  CreationOptional,
  InferCreationAttributes,
} from 'sequelize';
import { sequelize } from '../database/sequelize';
import { UserAttributes } from '../interfaces/user';

export class User
  extends Model<
    InferAttributes<User>,
    InferCreationAttributes<
      User,
      { omit: 'id' | 'is_verified' | 'is_admin' | 'reputation' | 'is_two_factor_auth_enabled' | 'is_two_factor_auth_verified' | 'preferred_two_fa_method' | 'secret_token' }
    >
  >
  implements UserAttributes
{
  declare id: CreationOptional<number>;
  declare username: string;
  declare email: string;
  declare password: string;
  declare phone: string;
  declare bio?: string;
  declare image?: string;
  declare is_verified: boolean;
  declare is_admin: boolean;
  declare reputation: number;
  declare is_two_factor_auth_enabled: boolean;
  declare is_two_factor_auth_verified: boolean;
  declare preferred_two_fa_method: 'email' | 'sms';
  declare secret_token: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bio: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    is_verified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    is_admin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    reputation: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    is_two_factor_auth_enabled: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    is_two_factor_auth_verified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    preferred_two_fa_method: {
      type: DataTypes.ENUM('email', 'sms'),
      allowNull: false,
      defaultValue: 'email'
    },
    secret_token: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {
    sequelize,
    tableName: 'users',
    underscored: true,
  },
);
