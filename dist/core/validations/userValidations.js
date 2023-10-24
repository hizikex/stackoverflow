"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUpdate = exports.validateLogin = exports.validateUserRegistration = void 0;
const joi_1 = __importDefault(require("joi"));
const utilities_1 = require("../helpers/utilities");
const { object, string } = joi_1.default.types();
const validateUserRegistration = (requestData) => {
    return (0, utilities_1.validate)(requestData, object.keys({
        username: string.trim().min(3).required(),
        email: string.trim().pattern(new RegExp('^\\S+@\\S+\\.\\S+$')).required(),
        password: string.min(6).required(),
        phone: string.min(6),
        bio: string.min(20).optional().allow('').max(255),
        image: string.min(5).optional().allow('').max(255),
        is_verified: joi_1.default.boolean(),
        is_admin: joi_1.default.boolean(),
        reputation: joi_1.default.number().integer()
    }));
};
exports.validateUserRegistration = validateUserRegistration;
const validateLogin = (requestData) => {
    return (0, utilities_1.validate)(requestData, object.keys({
        email: string.trim().pattern(new RegExp('^\\S+@\\S+\\.\\S+$')).required(),
        password: string.min(6).required()
    }));
};
exports.validateLogin = validateLogin;
const validateUpdate = (requestData) => {
    return (0, utilities_1.validate)(requestData, object.keys({
        phone: string.min(6),
        bio: string.min(20).optional().allow('').max(255),
        image: string.min(5).optional().allow('').max(255)
    }));
};
exports.validateUpdate = validateUpdate;
//# sourceMappingURL=userValidations.js.map