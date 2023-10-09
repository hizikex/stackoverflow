import ResourceNotFoundError from "../errors/ResourceNotFoundError";
import { UpdateUserProfile, ProfileResponse } from "../interfaces/user";
import { User } from "../models/users";

export const updateUserProfile = async ( currentUser: User | undefined, body: UpdateUserProfile ): Promise<any> => {
    if ( !currentUser ) {
        const error = new Error('not found')
        const resourceNotFoundError = new ResourceNotFoundError("User not found", error, {})
        throw resourceNotFoundError
    }

    const updateUser = await User.update(body, {where: {id: currentUser.id}});

    return updateUser;
};

export const getUserProfile = async (username: string, currentUser: User | undefined): Promise<ProfileResponse> => {
    const user = await User.findOne({  where: {username: username}});
    if ( !user ) throw new ResourceNotFoundError('User not found', null);

    const result: ProfileResponse = {
        email: user.email,
        phone: user.phone,
        bio: user.bio,
        image: user.image
    }

    return result;
};
