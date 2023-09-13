import { setting } from "./core/config/application";
import app from "./app";
import { logger } from "./core/config/utils/logger";

const startServer = async (): Promise<void> => {
  app.listen(setting.port, () => {
    logger.info(`
        ####################################################
        ♦️♦️♦️♦️♦️♦️♦️♦️♦️♦️♦️ App listening on port: ${setting.port} ♦️♦️♦️♦️♦️♦️♦️♦️♦️♦️
        ####################################################
        `);
  });
};

startServer();
