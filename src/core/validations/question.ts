import joi, { array } from "joi";
import { validate } from "../helpers/utilities";
import { QuestionRequest, QuestionSearchParams } from "../interfaces/questions";
import Joi from "joi";
import { error } from "winston";
import { Errors } from "../constant/errors";
import BadRequestError from "../errors/BadRequestError";

// const { object, string } = joi.types();

// export const validateQuestionCreation = (requestData: {
//   [key: string]: any;
// }): QuestionRequest => {
//   return validate(
//     requestData,
//     object.keys({
//       title: string.trim().min(6).max(50),
//       content: string.trim().min(6).max(500).required(),
//       tagList: array().items(string.trim().min(3).max(50))
//     })
//   );
// };

export const questionListQuerySchema = (requestData: {[key: string]: any}): QuestionSearchParams => {
  return validate(
    requestData,
    Joi.object({
      tagName: Joi.string(),
      limit: Joi.number().default(3),
      offset: Joi.number().default(0)
    })
  );
};

export const validateQuestionCreation = (requestData: {
  [key: string]: any;
}): QuestionRequest => {
  const schema = Joi.object({
    title: Joi.string().trim().min(6).max(50),
    content: Joi.string().trim().min(6).max(500).required(),
    tagList: Joi.array().items(Joi.string().trim().min(3).max(50)),
  });

  const result = schema.validate(requestData);

  if (result.error) {
    const relevantError = new Error('Bad request occurred');
    throw new BadRequestError(Errors.BAD_REQUEST, relevantError, result.error.details[0].message);
  }

  return result.value as QuestionRequest;
};
