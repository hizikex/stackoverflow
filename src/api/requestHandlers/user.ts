import { RequestHandler } from "express";
import { responseHandler } from "../../core/helpers/utilities";
import * as userController from '../../core/controllers/user'
import { validateLogin, validateUpdate, validateUserRegistration } from "../../core/validations/userValidations";
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

export const loginUser: RequestHandler = async (req, res, next): Promise<any> => {
    try {
        const validateLoginData = validateLogin(req.body);
        const response = await userController.processUserLogin(validateLoginData);

        res.json(responseHandler(response, ResponseMessage.SuccessfulLogin))
    } catch (error) {
        next(error)
    }
};

export const updateUser: RequestHandler = async (req, res, next): Promise<any> => {
    try {
        console.log(res.locals.user.id);
        const validateUpdateData = validateUpdate(req.body);
        const response = await userController.updateUserProfile(res.locals.user, validateUpdateData);
        
        res.json(responseHandler(response, ResponseMessage.UpdateUser))
    } catch (error) {
        next(error)
    }
}
