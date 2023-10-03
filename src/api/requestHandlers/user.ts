import { RequestHandler } from "express";
import { responseHandler } from "../../core/helpers/utilities";
import * as userController from '../../core/controllers/user'
import { validateUserRegistration } from "../../core/validations/userValidations";
import { ResponseMessage } from "../../core/constant/responses";

export const registerUser: RequestHandler = async (req, res, next): Promise<any> => {
    try {
    const validateUserData = validateUserRegistration(req.body);
        const response = await userController.processUserRegistration(validateUserData);

        res.json(responseHandler(response, ResponseMessage.SuccessfulRegistration))
    } catch (error) {
        next(error)
    }
};
