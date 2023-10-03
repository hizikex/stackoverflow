"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DomainError_1 = __importDefault(require("./DomainError"));
const errors_1 = require("../constant/errors");
class ConflictError extends DomainError_1.default {
    constructor(message = errors_1.Errors.SERVER_ERROR, error, data = null, success = false) {
        super(message, error, data, success);
        this.error_name = 'server_error';
        this.httpCode = 500;
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.default = ConflictError;
//# sourceMappingURL=InternalServerError.js.map