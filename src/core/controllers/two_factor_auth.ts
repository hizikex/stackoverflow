import speakeasy from "speakeasy";
import BadRequestError from "../errors/BadRequestError";
import ResourceNotFoundError from "../errors/ResourceNotFoundError";
import {
  TwoFactorAuthTokenResponse,
  TwoFactorAuthenticationResponse,
  TwoFactorVerificationResponse,
} from "../interfaces/two_factor_auth";
import { User } from "../models/users";
import { sendTwoFactorTokenByEmail } from "../utils/nodemailer";
import { sendSMS } from "../utils/twilio";

export const processEnableOrDisableTwoFactorAuth = async (
  userId: number
): Promise<TwoFactorAuthenticationResponse> => {
  const user = await User.findOne({ where: { id: userId } });
  if (!user) {
    throw new ResourceNotFoundError("User not found", null);
  }

  user.is_two_factor_auth_enabled =
    user.is_two_factor_auth_enabled === true ? false : true;
  await user.save();

  return {
    username: user.username,
    is_two_factor_auth_enabled: user.is_two_factor_auth_enabled,
  };
};

export const processSendTwoFactorAuthToken = async (
  userId: number
): Promise<TwoFactorAuthTokenResponse> => {
  const user = await User.findOne({ where: { id: userId } });
  if (!user) {
    throw new ResourceNotFoundError("User not found", null);
  }

  if (user.is_two_factor_auth_enabled === false) {
    const error = new Error();
    throw new BadRequestError(
      "User two factor authentication is disable",
      error
    );
  }

  const { base32: secret } = speakeasy.generateSecret({ length: 6 });
  const token = speakeasy.totp({
    secret: secret,
    encoding: "base32",
  });

  if (user.preferred_two_fa_method === "email") {
    sendTwoFactorTokenByEmail({
      email: user.email,
      subject: "Verify with token",
      html: `${token}`,
    });
  } else {
    sendSMS(
      '+2347088729737',
      user.phone,
      `Your 2FA token is: ${token}`
    );
  }

  user.secret_token = secret;
  await user.save();
  return { token: token };
};

export const processTwoFactorVerification = async (
  userId: number,
  token: string
): Promise<TwoFactorVerificationResponse> => {
  const user = await User.findOne({ where: { id: userId } });
  if (!user) {
    throw new ResourceNotFoundError("User not found", null);
  }

  const secret = user.secret_token;
  if (!secret) {
    throw new BadRequestError("User's secret token is not set.", null);
  }

  const validateToken = speakeasy.totp.verify({
    secret: user.secret_token,
    encoding: "base32",
    token: token,
    window: 2
  });

  if (!validateToken) {
    const error = new Error();
    throw new BadRequestError(
      "Invalid two-factor authentication token.",
      error
    );
  }

  user.is_two_factor_auth_verified = true;
  await user.save();

  return {
    message: "Two-factor authentication verified successfully.",
  };
};
