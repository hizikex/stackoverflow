import { Op } from 'sequelize';
import { searchQueryParams } from '../interfaces/search';
import { Question } from '../models/question';
import { Answer } from '../models/answers';

export const processQuestionAnswerSearch = async (
  searchQuery: searchQueryParams,
): Promise<{ questions: Question[]; answers: Answer[] }> => {
  const questions = await Question.findAll({
    where: {
      [Op.or]: [
        { title: { [Op.like]: `%${searchQuery}%` } },
        { content: { [Op.like]: `%${searchQuery}%` } },
      ],
    },
  });

  const answers = await Answer.findAll({
    where: {
      content: { [Op.like]: `%${searchQuery}%` },
    },
    include: [
      {
        model: Question,
        as: 'question',
        attributes: ['content'],
      },
    ],
  });

  return { questions, answers };
};
