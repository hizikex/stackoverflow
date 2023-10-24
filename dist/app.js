"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const errors_1 = require("./core/constant/errors");
const Route_1 = require("./api/Route");
const handleError_1 = require("./api/middleware/handleError");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use((0, morgan_1.default)('date[web] :method :url :status :response-time ms - :res[content-length]'));
app.use('/', (0, Route_1.routes)());
app.use((req, res, _next) => {
    res.status(404).send({
        status: false,
        error: 'not found',
        message: errors_1.Errors.RESOURCE_NOT_FOUND,
        data: {},
        path: req.url
    });
});
app.use(handleError_1.handleErrors);
exports.default = app;
//# sourceMappingURL=app.js.map