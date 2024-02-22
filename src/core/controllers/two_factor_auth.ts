import ResourceNotFoundError from "../errors/ResourceNotFoundError";
import { TwoFactorAuthenticationResponse } from "../interfaces/two_factor_auth";
import { User } from "../models/users";

export const processEnableOrDisableTwoFactorAuth = async (
    userId: number,
  ): Promise<TwoFactorAuthenticationResponse> => {
    const user = await User.findOne({ where: { id: userId } });
    if (!user) {
      throw new ResourceNotFoundError('User not found', null);
    }

    if (!user.is_two_factor_auth_enabled === true) {
      user.is_two_factor_auth_enabled = false;
      await user.save();
    }

    user.is_two_factor_auth_enabled = true;
    await user.save();
  
    return {
        username: user.username,
        is_two_factor_auth_enabled: user.is_two_factor_auth_enabled
    };
  };