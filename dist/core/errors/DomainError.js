"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DomainError extends Error {
    constructor(message, error, data, success = false) {
        super(message);
        this.error_name = 'domain_error';
        this.httpCode = 500;
        this.internal = error;
        this.data = data;
        this.success = success;
    }
    getStatus() {
        return this.success;
    }
    getInternalError() {
        return this.internal;
    }
    getHttpCode() {
        return this.httpCode;
    }
    getData() {
        return this.data;
    }
    getName() {
        return this.error_name;
    }
}
exports.default = DomainError;
//# sourceMappingURL=DomainError.js.map