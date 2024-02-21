import speakeasy from 'speakeasy';
import { Request, Response, NextFunction } from 'express';
import { User } from '../../core/models/users';
import AuthenticationError from '../../core/errors/AuthenticationError';

export const twoFactorAuthentication = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await User.findOne({where: {id: res.locals.user.id}});
        if (!user || user.is_two_factor_auth_enabled) {
            new AuthenticationError('Two-factor authentication is not enabled.', error)
        }
    } catch (error) {
        next(error)
    }
}