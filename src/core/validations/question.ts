import joi, { number } from 'joi';
import { validate } from '../helpers/utilities';
import { QuestionRequest } from '../interfaces/question';

const { object, string } = joi.types();

export const validateQuestionCreation = (requestData: { [key: string]: any }): QuestionRequest => {
  return validate(
    requestData,
    object.keys({
        author_id: number().required(),
        title: string.trim().min(6).max(50),
        content: string.trim().min(6).max(500).required(),
    })
  );
};
