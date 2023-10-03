"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DomainError_1 = __importDefault(require("./DomainError"));
const errors_1 = require("../constant/errors");
class NotImplementedError extends DomainError_1.default {
    constructor(message = errors_1.Errors.NOT_IMPLEMENTED, error, data = null, success = false) {
        super(message, error, data, success);
        this.error_name = 'not_implemented';
        this.httpCode = 501;
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.default = NotImplementedError;
//# sourceMappingURL=NotImplementedError.js.map