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

    res.json(responseHandler(response, ResponseMessage.EnableOrDisableTwoFa));
  } catch (error) {
    next(error);
  }
};

export const sendTwoFactorAuthToken: RequestHandler = async (req, res, next): Promise<void> => {
    try {
        const response = await authController.processTwoFactorAuthToken(
            res.locals.user.id
        );

        res.json(responseHandler(response, ResponseMessage.SendTwoFaToken));
      } catch (error) {
        next(error);
      }
};

export const verifyTwoFactorAuth: RequestHandler = async (req, res, next) => {
    try {
    const { user } = res.locals;
        const response = await authController.processTwoFactorVerification(
          user.id, req.body.token
        );

        res.json(responseHandler(response, ResponseMessage.VerifyTwoFa));
      } catch (error) {
        next(error);
      }
};
