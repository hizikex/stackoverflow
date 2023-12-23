import { RequestHandler } from 'express';
import { responseHandler } from '../../core/helpers/utilities';
import * as searchController from '../../core/controllers/search';
import { ResponseMessage } from '../../core/constant/responses';
import { validateQuestionAnswerQuery } from '../../core/validations/search';

export const searchQuestionOrAnswer: RequestHandler = async (
  req,
  res,
  next,
): Promise<void> => {
  try {
    const validateSearchInput = validateQuestionAnswerQuery(req.query);
    const response =
      await searchController.processQuestionAnswerSearch(validateSearchInput);

    if (response.questions.length || response.answers.length < 1) {
      res.json(responseHandler(response, ResponseMessage.ZeroSearch));
    }

    res.json(responseHandler(response, ResponseMessage.Search));
  } catch (error) {
    next(error);
  }
};
