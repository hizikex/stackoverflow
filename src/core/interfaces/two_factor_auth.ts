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
  email: string;
  subject: string;
  text: string
};

export interface SmsOptions {
  from: string;
  to: string;
  body: string;
}
