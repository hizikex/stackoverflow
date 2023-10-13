import { RequestHandler } from "express";
import { responseHandler } from "../../core/helpers/utilities";
import * as profileController from "../../core/controllers/profile";
import { validateUpdate } from "../../core/validations/userValidations";
import { ResponseMessage } from "../../core/constant/responses";
export const updateUser: RequestHandler = async (
  req,
  res,
  next
): Promise<void> => {
  try {
    const validateUpdateData = validateUpdate(req.body);
    const response = await profileController.updateUserProfile(
      res.locals.user,
      validateUpdateData
    );

    res.json(responseHandler(response, ResponseMessage.UpdateUser));
  } catch (error) {
    next(error);
  }
};

export const userProfile: RequestHandler = async (
  req,
  res,
  next
): Promise<void> => {
  try {
    const response = await profileController.getUserProfile(
      req.params.username,
      res.locals.user
    );

    res.json(responseHandler(response, ResponseMessage.UserProfile));
  } catch (error) {
    next(error);
  }
};
