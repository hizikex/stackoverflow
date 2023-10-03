"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setting = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.setting = {
    port: process.env.APP_PORT,
    secretKey: process.env.ACCESS_TOKEN
};
//# sourceMappingURL=application.js.map