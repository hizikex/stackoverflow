import Joi from 'joi';
import { validate } from '../helpers/utilities';
import { searchQueryParams } from '../interfaces/search';

export const validateQuestionAnswerQuery = (requestData: {
  [key: string]: any;
}): searchQueryParams => {
  return validate(
    requestData,
    Joi.object({
      title: Joi.string().optional(),
      content: Joi.string().optional(),
      limit: Joi.number().min(1).default(10),
      offset: Joi.number().min(0).default(0),
    }),
  );
};
