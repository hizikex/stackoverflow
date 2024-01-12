import ResourceNotFoundError from '../errors/ResourceNotFoundError';
import { UpdateUserProfile, ProfileResponse } from '../interfaces/user';
import { User } from '../models/users';
import { redisClient } from '../utils/redis';

export const updateUserProfile = async (
  currentUser: User | undefined,
  body: UpdateUserProfile,
): Promise<{ [key: string]: any }> => {
  if (!currentUser) {
    const error = new Error('not found');
    const resourceNotFoundError = new ResourceNotFoundError(
      'User not found',
      error,
      {},
    );
    throw resourceNotFoundError;
  }

  const updateUser = await User.update(body, { where: { id: currentUser.id } });

  return updateUser;
};

export const getUserProfile = async (
  username: string,
): Promise<ProfileResponse> => {
  const cachedData = await redisClient.get(`user:${username}`);

  if (cachedData) {
    return JSON.parse(cachedData);
  }
  const user = await User.findOne({ where: { username: username } });
  if (!user) throw new ResourceNotFoundError('User not found', null);

  const result: ProfileResponse = {
    email: user.email,
    phone: user.phone,
    bio: user.bio,
    image: user.image,
  };

  await redisClient.set(`user:${username}`, JSON.stringify(result), 'EX', 30);
  return result;
};
