import { RequestHandler } from "express";
import { responseHandler } from "../../core/helpers/utilities";
import * as questionController from "../../core/controllers/question";
import { questionListQuerySchema, validateQuestionCreation } from "../../core/validations/question";
import { ResponseMessage } from "../../core/constant/responses";

export const createQuestion: RequestHandler = async (
  req,
  res,
  next
): Promise<void> => {
  try {
    const validateQuestionData = validateQuestionCreation(req.body);
    const response = await questionController.processQuestionCreation(
      validateQuestionData, res.locals.user
    );

    res.json(responseHandler(response, ResponseMessage.QuestionCreation));
  } catch (error) {
    next(error);
  }
};

export const ListQuestions: RequestHandler = async (req, res, next): Promise<void> => {
  const validQuestionList = questionListQuerySchema(req.query);

  const response = await questionController.processListQuestions(validQuestionList);

  res.json(responseHandler(response, ResponseMessage.ListQuestions))
};