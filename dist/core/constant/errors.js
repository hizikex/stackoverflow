"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Errors = void 0;
var Errors;
(function (Errors) {
    Errors["NOT_AUTHENTICATED"] = "REQUEST NOT AUTHENTICATED";
    Errors["NOT_AUTHORIZED"] = "REQUEST NOT AUTHORIZED";
    Errors["BAD_REQUEST"] = "INVALID REQUEST DATA";
    Errors["CONFLICT"] = "REQUEST COULD NOT BE COMPLETED DUE TO CONFLICT";
    Errors["NOT_IMPLEMENTED"] = "FUNCTIONALITY NOT SUPPORTED";
    Errors["SERVER_ERROR"] = "INTERNAL SERVER ERROR";
    Errors["VALIDATION"] = "DATA PROVIDED IS INVALID";
    Errors["RESOURCE_NOT_FOUND"] = "RESOURCE NOT FOUND";
    Errors["INVALID_AUTHORIZATION_TOKEN"] = "INVALID AUTHORIZATION TOKEN";
    Errors["SERVICE_UNAVAILABLE"] = "SERVICE UNAVAILABLE";
})(Errors || (exports.Errors = Errors = {}));
//# sourceMappingURL=errors.js.map