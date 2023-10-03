"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DomainError_1 = __importDefault(require("./DomainError"));
const errors_1 = require("../constant/errors");
class RequestValidationError extends DomainError_1.default {
    constructor(message = errors_1.Errors.RESOURCE_NOT_FOUND, error, data = null, success = false) {
        super(message, error, data, success);
        this.error_name = 'validation_error';
        this.httpCode = 404;
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.default = RequestValidationError;
//# sourceMappingURL=ResourceNotFoundError.js.map