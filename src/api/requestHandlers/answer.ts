import { RequestHandler } from 'express';
import { responseHandler } from '../../core/helpers/utilities';
import * as answerController from '../../core/controllers/answer';
import { ResponseMessage } from '../../core/constant/responses';
import { validateAnswerCreation } from '../../core/validations/answer';

export const createAnswer: RequestHandler = async (
  req,
  res,
  next,
): Promise<void> => {
  try {
    const questionId = parseInt(req.params.questionId);
    const validatedAnswerData = validateAnswerCreation(req.body);
    const response = await answerController.processAnswer(
      res.locals.user,
      questionId,
      validatedAnswerData,
    );

    res.json(responseHandler(response, ResponseMessage.CreateAnswer));
  } catch (error) {
    next(error);
  }
};

export const getAnswer: RequestHandler = async (
  req,
  res,
  next,
): Promise<void> => {
  try {
    const answerId = parseInt(req.params.answerId);
    const response = await answerController.processGetAnswer(answerId);

    res.json(responseHandler(response, ResponseMessage.GetAnswer));
  } catch (error) {
    next(error);
  }
};

export const updateAnswer: RequestHandler = async (
  req,
  res,
  next,
): Promise<void> => {
  try {
    const validatedAnswerData = validateAnswerCreation(req.body);
    const response = await answerController.processAnswerUpdate(
      res.locals.user,
      req.params.answerId,
      validatedAnswerData,
    );

    res.json(responseHandler(response, ResponseMessage.UpdateAnswer));
  } catch (error) {
    next(error);
  }
};

export const getQuestionAnswers: RequestHandler = async (
  req,
  res,
  next,
): Promise<void> => {
  try {
    const response = await answerController.processGetQuestionAnswers(
      req.params.questionId,
    );

    res.json(responseHandler(response, ResponseMessage.GetAnswer));
  } catch (error) {
    next(error);
  }
};

export const deleteAnswer: RequestHandler = async (
  req,
  res,
  next,
): Promise<void> => {
  try {
    const response = await answerController.processDeleteAnswer(
      res.locals.user,
      req.params.answerId,
    );

    res.json(responseHandler(response, ResponseMessage.DeleteAnswer));
  } catch (error) {
    next(error);
  }
};
