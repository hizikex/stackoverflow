import { UserRegistrationRequest, UserRegistrationResponse } from "../interfaces/user";
import bcrypt from 'bcrypt';
import { User } from "../models/users";

export const processUserRegistration = async ( body: UserRegistrationRequest ): Promise<UserRegistrationResponse> => {
    const userExist = await User.findOne({ where: {email: body.email} });

    if ( userExist ) {
        throw new Error( 'User with this email already exist' );
    }

    const saltPassword = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(body.password, saltPassword);

    const newUser = await User.create({
        username: body.username,
        email: body.email,
        password: hashPassword,
        phone: body.phone,
        bio: body.bio,
        image: body.image 
    });

    return {message: 'User registration successful', user: newUser}
}
