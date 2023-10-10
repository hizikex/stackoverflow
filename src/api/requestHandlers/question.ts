import { RequestHandler } from "express";
import { responseHandler } from "../../core/helpers/utilities";
import * as questionController from "../../core/controllers/question";
import { validateQuestionCreation } from "../../core/validations/question";
import { ResponseMessage } from "../../core/constant/responses";

export const createQuestion: RequestHandler = async (
  req,
  res,
  next
): Promise<void> => {
  try {
    // const validateQuestionData = validateQuestionCreation(req.body);
    const response = await questionController.processQuestionCreation(
      res.locals.user, req.body
    );

    res.json(responseHandler(response, ResponseMessage.QuestionCreation));
  } catch (error) {
    next(error);
  }
};
