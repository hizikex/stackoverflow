export interface UserAttributes {
  id: number;
  username: string;
  email: string;
  password: string;
  phone: string;
  bio?: string;
  image?: string;
  is_verified: boolean;
  is_admin: boolean;
  reputation: number;
  is_two_factor_auth_enabled: Boolean;
  is_two_factor_auth_verified: Boolean;
  two_factor_auth_secret: string;
}

export interface UserRegistrationRequest {
  username: string;
  email: string;
  password: string;
  phone: string;
  bio?: string;
  image?: string;
}

export interface UserRegistrationResponse {
  message: string;
  user: any;
}

export interface UserLoginRequest {
  email: string;
  password: string;
}

export interface UserLoginResponse {
  email: string;
  phone: string;
  token: string;
  bio?: string;
  image?: string;
  is_two_factor_auth_enabled: Boolean;
}

export interface UpdateUserProfile {
  phone?: string;
  bio?: string;
  image?: string;
}

export interface GetUserProfileData {
  username: string;
}

export interface ProfileResponse {
  email: string;
  phone: string;
  bio?: string;
  image?: string;
  otp_enabled: boolean;
}

export interface LogoutUser {
  token: string;
}
