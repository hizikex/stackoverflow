import { validate } from '../helpers/utilities';
import { QuestionRequest, QuestionSearchParams } from '../interfaces/questions';
import Joi from 'joi';
import { Errors } from '../constant/errors';
import BadRequestError from '../errors/BadRequestError';

export const validateQuestionCreation = (requestData: {
  [key: string]: any;
}): QuestionRequest => {
  const schema = Joi.object({
    title: Joi.string().trim().min(3).max(50),
    content: Joi.string().trim().min(6).max(500).required(),
    tagList: Joi.array().items(Joi.string().trim().min(3).max(50)),
  });

  const result = schema.validate(requestData);

  if (result.error) {
    const relevantError = new Error('Bad request occurred');
    throw new BadRequestError(
      Errors.BAD_REQUEST,
      relevantError,
      result.error.details[0].message,
    );
  }

  return result.value as QuestionRequest;
};

export const questionListQuerySchema = (requestData: {
  [key: string]: any;
}): QuestionSearchParams => {
  return validate(
    requestData,
    Joi.object({
      author: Joi.string().optional(),
      tagName: Joi.string().optional(),
      limit: Joi.number().min(1).default(10),
      offset: Joi.number().min(0).default(0),
    }),
  );
};

export const deleteQuestionSchema = (requestData: {
  [key: string]: any;
}): number => {
  return validate(
    requestData,
    Joi.object({
      questionId: Joi.number().min(1).required(),
    }),
  );
};
