import { RequestHandler } from "express";
import * as authController from "../../core/controllers/two_factor_auth";
import { ResponseMessage } from "../../core/constant/responses";
import { responseHandler } from "../../core/helpers/utilities";

export const enableTwoFactorAuth: RequestHandler = async (
  req,
  res,
  next
): Promise<void> => {
  try {
    const response = await authController.processEnableOrDisableTwoFactorAuth(
      res.locals.user.id
    );
    res.json(responseHandler(response, ResponseMessage.Enable2FA));
  } catch (error) {
    next(error);
  }
};
