import { setting } from './core/config/application';
import app from './app';
import { logger } from './core/utils/logger';
import { sequelize } from './core/database/sequelize';

sequelize.sync().then(() => {
  logger.info('Connected to the Database');
});

const startServer = async (): Promise<void> => {
  app.listen(setting.port, () => {
    logger.info(`
        ###############################################################
        ♦️♦️♦️♦️♦️♦️♦️♦️♦️♦️♦️ App listening on port: ${setting.port} ♦️♦️♦️♦️♦️♦️♦️♦️♦️♦️
        ###############################################################
        `);
  });
};

startServer();
