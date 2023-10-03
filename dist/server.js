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
const application_1 = require("./core/config/application");
const app_1 = __importDefault(require("./app"));
const logger_1 = require("./core/utils/logger");
const sequelize_1 = require("./core/database/sequelize");
sequelize_1.sequelize.sync().then(() => {
    logger_1.logger.info('Connected to the Database');
});
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    app_1.default.listen(application_1.setting.port, () => {
        logger_1.logger.info(`
        ####################################################
        ♦️♦️♦️♦️♦️♦️♦️♦️♦️♦️♦️ App listening on port: ${application_1.setting.port} ♦️♦️♦️♦️♦️♦️♦️♦️♦️♦️
        ####################################################
        `);
    });
});
startServer();
//# sourceMappingURL=server.js.map