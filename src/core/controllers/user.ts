import {
  UserLoginRequest,
  UserLoginResponse,
  UserRegistrationRequest,
  UserRegistrationResponse,
} from '../interfaces/user';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../models/users';
import AuthorizationError from '../errors/AuthorizationError';
import { setting } from '../config/application';
import { logger } from '../utils/logger';

export const processUserRegistration = async (
  body: UserRegistrationRequest,
): Promise<UserRegistrationResponse> => {
  const userExist = await User.findOne({ where: { email: body.email } });

  if (userExist) {
    throw new Error('User with this email already exist');
  }

  const saltPassword = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync(body.password, saltPassword);

  const newUser = await User.create({
    username: body.username,
    email: body.email,
    password: hashPassword,
    phone: body.phone,
    bio: body.bio,
    image: body.image,
  });

  logger.info('User registration successful');
  return { message: 'User registration successful', user: newUser };
};

export const processUserLogin = async (
  body: UserLoginRequest,
): Promise<UserLoginResponse> => {
  const userExist = await User.findOne({ where: { email: body.email } });

  if (!userExist) {
    throw new AuthorizationError('Email or password incorrect', null);
  }

  const userPassword: string = userExist.password;
  const isPassword = await bcrypt.compare(body.password, userPassword);

  if (!isPassword) {
    throw new AuthorizationError('Wrong password', null);
  }

  const generateToken = jwt.sign(
    {
      user: {
        id: userExist.id,
        username: userExist.username,
      },
    },
    setting.secretKey,
    { expiresIn: '12h' },
  );

  logger.info('Login successful');

  const result: UserLoginResponse = {
    email: userExist.email,
    phone: userExist.phone,
    token: generateToken,
    bio: userExist.bio,
    image: userExist.image,
  };

  return result;
};
