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
}

export interface UserRegistrationRequest {
  username: string;
  email: string;
  password: string;
  phone: string;
  bio?: string;
  image?: string;
  is_verified: boolean;
  is_admin: boolean;
  reputation: number;
}

export interface UserRegistrationResponse {
  message: string;
  user: any;
}
