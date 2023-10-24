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
exports.processUserLogin = exports.processUserRegistration = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const users_1 = require("../models/users");
const AuthorizationError_1 = __importDefault(require("../errors/AuthorizationError"));
const application_1 = require("../config/application");
const logger_1 = require("../utils/logger");
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
        image: body.image
    });
    logger_1.logger.info('User registration successful');
    return { message: 'User registration successful', user: newUser };
});
exports.processUserRegistration = processUserRegistration;
const processUserLogin = (body) => __awaiter(void 0, void 0, void 0, function* () {
    const userExist = yield users_1.User.findOne({ where: { email: body.email } });
    if (!userExist) {
        throw new AuthorizationError_1.default("Email or password incorrect", null);
    }
    const userPassword = userExist.password;
    const isPassword = yield bcrypt_1.default.compare(body.password, userPassword);
    if (!isPassword) {
        throw new AuthorizationError_1.default("Wrong password", null);
    }
    const generateToken = jsonwebtoken_1.default.sign({
        user: {
            id: userExist.id,
            username: userExist.username
        }
    }, application_1.setting.secretKey, { expiresIn: '12h' });
    logger_1.logger.info('Login successful');
    const result = {
        email: userExist.email,
        phone: userExist.phone,
        token: generateToken,
        bio: userExist.bio,
        image: userExist.image
    };
    return result;
});
exports.processUserLogin = processUserLogin;
//# sourceMappingURL=user.js.map