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
