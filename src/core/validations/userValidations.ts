import joi from 'joi';
import { UserRegistrationRequest } from '../interfaces/user';
import { validate } from '../helpers/utilities';

const { object, string } = joi.types();

export const validateUserRegistration = (requestData: { [key: string]: any }): UserRegistrationRequest => {
  return validate(
    requestData,
    object.keys({
      username: string.trim().min(3).required(),
      email: string.trim().pattern(new RegExp('^\\S+@\\S+\\.\\S+$')).required(),
      password: string.min(6).required(),
      phone: string.min(6),
      bio: string.min(20).optional().allow('').max(255),
      image: string.min(5).optional().allow('').max(255),
      is_verified: joi.boolean(),
      is_admin: joi.boolean(),
      reputation: joi.number().integer()
    })
  );
};
