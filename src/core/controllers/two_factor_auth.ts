import speakeasy from "speakeasy";
import BadRequestError from "../errors/BadRequestError";
import ResourceNotFoundError from "../errors/ResourceNotFoundError";
import {
  TwoFactorAuthTokenResponse,
  TwoFactorAuthenticationResponse,
  TwoFactorVerificationResponse,
} from "../interfaces/two_factor_auth";
import { User } from "../models/users";
import { sendMail, MailOptions } from "../utils/nodemailer";
import { sendSMS } from "../utils/twilio";
import { logger } from "../utils/logger";
import ConflictError from "../errors/ConflictError";

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
    const options: MailOptions = {
      to: user.email,
      subject: "Verify with token",
      html: `
      <html>
  <head>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f0f0f0;
        margin: 0;
        padding: 0;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        background-color: #ffffff;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
      }
      h2 {
        color: #333333;
        margin-top: 0;
      }
      p {
        color: #666666;
        font-size: 16px;
      }
      .token {
        font-size: 24px;
        font-weight: bold;
        color: #007bff;
        font-family: 'Times New Roman', Times, serif;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h2>Two-Factor Authentication Token</h2>
      <p>Your two-factor token is: <span class="token">${token}</span></p>
    </div>
  </body>
</html>
`,
    };
    try {
      await sendMail(options);
    } catch (error) {
      logger.error("Mail not sent");
      throw new ConflictError("Mail not sent", null);
    }
  } else {
    sendSMS("+2347088729737", user.phone, `Your 2FA token is: ${token}`);
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
    window: 2,
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
