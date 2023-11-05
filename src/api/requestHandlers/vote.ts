import { RequestHandler } from "express";
import { responseHandler } from "../../core/helpers/utilities";
import * as voteController from "../../core/controllers/vote";
import { ResponseMessage } from "../../core/constant/responses";

export const vote: RequestHandler = async (req, res, next): Promise<void> => {
  try {
    const response = await voteController.processAnswerVote(res.locals.user, req.params.answerId, req.body);

    res.json(responseHandler(response, ResponseMessage.Vote));
  } catch (error) {
    next(error);
  }
};