'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('question_tags', 'question_tags_question_id');
    await queryInterface.addConstraint('question_tags', ['question_id'], {
      fields: ['question_id'],
      type: 'foreign key',
      name: 'question_tags_question_id',
      references: {
        table: 'questions',
        field: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('question_tags', 'question_tags_question_id');
  },
};
