import joi from 'joi';
import { AnswerCreationRequest } from '../interfaces/answer';
import { validate } from '../helpers/utilities';

const { object, string } = joi.types();

export const validateAnswerCreation = (requestData: { [key: string]: any }): AnswerCreationRequest => {
  return validate(
    requestData,
    object.keys({
        content: string.trim().min(1).max(500).required(),
    })
  );
};
