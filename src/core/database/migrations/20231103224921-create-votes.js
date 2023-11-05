'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('votes', {
      user_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      answer_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      voted: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('votes');
  }
};