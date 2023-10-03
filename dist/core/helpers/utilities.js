"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = exports.responseHandler = void 0;
const errors_1 = require("../constant/errors");
const BadRequestError_1 = __importDefault(require("../errors/BadRequestError"));
const responseHandler = (payload, message = 'success') => {
    return {
        status: true,
        message,
        data: payload || {}
    };
};
exports.responseHandler = responseHandler;
const getErrMessage = (item) => {
    var _a, _b, _c, _d;
    let message;
    switch (item.type) {
        case `${item.type.split('.')[0]}.only`:
            message = `${(_a = item === null || item === void 0 ? void 0 : item.context) === null || _a === void 0 ? void 0 : _a.value} is not a valid option`;
            break;
        case `${item.type.split('.')[0]}.required`:
            message = `${item.path.join('.')} is required`;
            break;
        case 'object.min':
            message = 'This request body should not be empty';
            break;
        case 'string.min':
            message = `${item.path.join('.')} should have at least ${(_b = item === null || item === void 0 ? void 0 : item.context) === null || _b === void 0 ? void 0 : _b.limit} characters!`;
            break;
        case 'string.max':
            message = `${item.path.join('.')} should have at most ${(_c = item === null || item === void 0 ? void 0 : item.context) === null || _c === void 0 ? void 0 : _c.limit} characters!`;
            break;
        case 'string.alphanum':
            message = `${item.path.join('.')} should contain only alphanumeric characters`;
            break;
        case 'string.base':
            message = `${item.path.join('.')} should be a string`;
            break;
        case 'string.length':
            message = `${item.path.join('.')} should only be ${(_d = item === null || item === void 0 ? void 0 : item.context) === null || _d === void 0 ? void 0 : _d.limit} characters, no less, no more`;
            break;
        default:
            break;
    }
    return message;
};
const buildErrorObject = (errors) => {
    const customErrors = {};
    errors.forEach((item) => {
        if (!Object.prototype.hasOwnProperty.call(customErrors, item.path.join('.'))) {
            const customErrorMessage = getErrMessage(item);
            customErrors[item.path.join('.')] = {
                message: item.message.replace(/['"]+/g, ''),
                customErrorMessage
            };
        }
    });
    return customErrors;
};
const validate = (request, schema) => {
    const validation = schema.validate(request, { abortEarly: false });
    const { value, error } = validation;
    if (error) {
        const relevantError = new Error('Bad request occurred');
        throw new BadRequestError_1.default(errors_1.Errors.BAD_REQUEST, relevantError, buildErrorObject(error.details));
    }
    return value;
};
exports.validate = validate;
//# sourceMappingURL=utilities.js.map