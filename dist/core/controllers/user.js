"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.processUserRegistration = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const users_1 = require("../models/users");
const processUserRegistration = (body) => __awaiter(void 0, void 0, void 0, function* () {
    const userExist = yield users_1.User.findOne({ where: { email: body.email } });
    if (userExist) {
        throw new Error('User with this email already exist');
    }
    const saltPassword = bcrypt_1.default.genSaltSync(10);
    const hashPassword = bcrypt_1.default.hashSync(body.password, saltPassword);
    const newUser = yield users_1.User.create({
        username: body.username,
        email: body.email,
        password: hashPassword,
        phone: body.phone,
        bio: body.bio,
        image: body.image,
        is_verified: body.is_verified,
        is_admin: body.is_admin,
        reputation: body.reputation
    });
    return { message: 'User registration successful', user: newUser };
});
exports.processUserRegistration = processUserRegistration;
//# sourceMappingURL=user.js.map