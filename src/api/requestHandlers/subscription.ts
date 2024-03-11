import { RequestHandler } from "express";
import { responseHandler } from "../../core/helpers/utilities";
import * as subscriptionController from '../../core/controllers/subscription';
import { ResponseMessage } from '../../core/constant/responses';

export const subscribeToQuestion: RequestHandler = async (req, res, next) => {
    try {
        const parsedIntQuestionId = parseInt(req.params.questionId); 
        const response = await subscriptionController.processQuestionSubscription(res.locals.user.id, parsedIntQuestionId);
    
        res.json(responseHandler(response, ResponseMessage.GetTag));
      } catch (error) {
        next(error);
      }
};
