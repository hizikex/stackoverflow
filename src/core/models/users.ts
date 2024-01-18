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
      { omit: 'id' | 'is_verified' | 'is_admin' | 'reputation' | 'otp_enabled' | 'otp_verified' | 'otp_ascii' | 'otp_hex' | 'otp_base32' | 'otp_auth_url' }
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
  declare otp_enabled: boolean;
  declare otp_verified: boolean;
  declare otp_ascii?: string;
  declare otp_hex?: string;
  declare otp_base32?: string;
  declare otp_auth_url?: string;
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
    otp_enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    otp_verified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    otp_ascii: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    otp_hex: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    otp_base32: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    otp_auth_url: {
      type: DataTypes.STRING,
      allowNull: true
    },
  },
  {
    sequelize,
    tableName: 'users',
    underscored: true,
  },
);
