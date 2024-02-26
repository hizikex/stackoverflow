import speakeasy from 'speakeasy';
import BadRequestError from "../errors/BadRequestError";
import ResourceNotFoundError from "../errors/ResourceNotFoundError";
import { TwoFactorAuthTokenResponse, TwoFactorAuthenticationResponse, TwoFactorVerificationResponse } from "../interfaces/two_factor_auth";
import { User } from "../models/users";

export const processEnableOrDisableTwoFactorAuth = async (
  userId: number
): Promise<TwoFactorAuthenticationResponse> => {
  const user = await User.findOne({ where: { id: userId } });
  if (!user) {
    throw new ResourceNotFoundError("User not found", null);
  }

  user.is_two_factor_auth_enabled = user.is_two_factor_auth_enabled === true ? false :true;
  await user.save();

  return {
    username: user.username,
    is_two_factor_auth_enabled: user.is_two_factor_auth_enabled,
  };
};

export const processTwoFactorAuthToken = async (userId: number): Promise<TwoFactorAuthTokenResponse> => {
  const user = await User.findOne({where: {id: userId }});
  if (!user) {
    throw new ResourceNotFoundError("User not found", null);
  }

  const { base32: secret } = speakeasy.generateSecret({ length: 6 });
  const token = speakeasy.totp({
    secret: secret,
    encoding: 'base32'
  });

  user.two_factor_auth_secret = secret;
  await user.save();

  return { token: token }
};

export const processTwoFactorVerification = async (userId: number, token: string): Promise<TwoFactorVerificationResponse> => {
  const user = await User.findOne({where: {id: userId}});
  if (!user) {
    throw new ResourceNotFoundError("User not found", null);
  }

  const validateToken = speakeasy.totp.verify({
    secret: user.two_factor_auth_secret,
    encoding: 'base32',
    token: token,
  });

  if (!validateToken) {
    const error = new Error();
    throw new BadRequestError('Invalid two-factor authentication token.', error);
  }

  user.is_two_factor_auth_verified = true;
  await user.save();

  return {
    message: 'Two-factor authentication verified successfully.'
  }
};
