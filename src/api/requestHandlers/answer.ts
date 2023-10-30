import { RequestHandler } from "express";
import { responseHandler } from "../../core/helpers/utilities";
import * as answerController from "../../core/controllers/answer";
import { ResponseMessage } from "../../core/constant/responses";
import { validateAnswerCreation } from "../../core/validations/answer";

export const createAnswer: RequestHandler = async (
  req,
  res,
  next
): Promise<void> => {
  try {
    const validatedAnswerData = await validateAnswerCreation(req.body);
    const response = await answerController.processAnswer(
      res.locals.user,
      req.params.questionId,
      validatedAnswerData
    );

    res.json(responseHandler(response, ResponseMessage.CreateAnswer));
  } catch (error) {
    next(error);
  }
};

export const updateAnswer: RequestHandler = async (
  req,
  res,
  next
): Promise<void> => {
  try {
    const validatedAnswerData = await validateAnswerCreation(req.body);
    const response = await answerController.processAnswerUpdate(
      res.locals.user,
      req.params.questionId,
      validatedAnswerData
    );

    res.json(responseHandler(response, ResponseMessage.CreateAnswer));
  } catch (error) {
    next(error);
  }
};
