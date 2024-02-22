import speakeasy from "speakeasy";
import { Request, Response, NextFunction } from "express";
import { User } from "../../core/models/users";
import AuthenticationError from "../../core/errors/AuthenticationError";
import { logger } from "../../core/utils/logger";

export const twoFactorAuthentication = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await User.findOne({ where: { id: res.locals.user.id } });
    if (!user || user.is_two_factor_auth_enabled) {
      const error = new Error("not_authenticated");
      new AuthenticationError(
        "Two factor authentication is not enabled.",
        error
      );
      throw AuthenticationError;
    }

    if (!user.is_two_factor_auth_verified) {
      const error = new Error("not_authenticated");
      new AuthenticationError(
        "Two factor authentication is not verified.",
        error
      );
      throw AuthenticationError;
    }

    const validateToken = speakeasy.totp.verify({
      secret: user.two_factor_auth_secret,
      encoding: "base32",
      token: req.body.token,
    });

    if (!validateToken) {
      const error = new Error("not_authenticated");
      new AuthenticationError(
        "invalid two factor authentication token.",
        error
      );
      throw AuthenticationError;
    }

    next();
  } catch (error) {
    logger.error("Error in 2FA middleware");
    next(error);
  }
};
