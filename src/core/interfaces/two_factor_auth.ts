export interface TwoFactorAuthenticationResponse {
  username: string;
  is_two_factor_auth_enabled: boolean;
}

export interface TwoFactorAuthTokenResponse {
  token: string;
}

export interface TwoFactorVerificationResponse {
  message: string;
}

export interface MailOptions {
  to: string;
  subject: string;
  html: string
};

export interface SmsOptions {
  from: string;
  to: string;
  body: string;
}
