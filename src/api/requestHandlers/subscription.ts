import { RequestHandler } from "express";
import { responseHandler } from "../../core/helpers/utilities";
import * as subscriptionController from '../../core/controllers/subscription';
import { ResponseMessage } from '../../core/constant/responses';

export const subscribeToQuestion: RequestHandler = async (req, res, next) => {
    try {
        const parsedIntQuestionId = parseInt(req.params.questionId); 
        const response = await subscriptionController.processQuestionSubscription(res.locals.user.id, parsedIntQuestionId);
    
        res.json(responseHandler(response, ResponseMessage.SubscribeToQuestion));
      } catch (error) {
        next(error);
      }
};

export const unsubscribeQuestion: RequestHandler = async (req, res, next) => {
    try {
        const parsedIntQuestionId = parseInt(req.params.questionId); 
        const response = await subscriptionController.processQuestionUnsubscription(res.locals.user.id, parsedIntQuestionId);
    
        res.json(responseHandler(response, ResponseMessage.UnsubscribeQuestion));
      } catch (error) {
        next(error);
      }
};
