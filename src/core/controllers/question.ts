import { Question } from '../models/question';
import { logger } from '../utils/logger';
import {
  QuestionCreationResponse,
  QuestionDeletionResponse,
  QuestionRequest,
  QuestionSearchParams,
} from '../interfaces/questions';
import ResourceNotFoundError from '../errors/ResourceNotFoundError';
import { Tag } from '../models/tags';
import { QuestionTag } from '../models/question_tags';
import { User } from '../models/users';
import { Op } from 'sequelize';

export const processQuestionCreation = async (
  body: QuestionRequest,
  Author: User | undefined,
): Promise<QuestionCreationResponse> => {
  if (!Author) {
    const error = new Error('not found');
    const resourceNotFoundError = new ResourceNotFoundError(
      'User not found',
      error,
      {},
    );
    throw resourceNotFoundError;
  }

  const newQuestion = await Question.create({
    author_id: Author.id,
    title: body.title,
    content: body.content,
  });

  await Promise.all(
    body.tagList.map(async (tagName: string) => {
      const [tag] = await Tag.findOrCreate({ where: { name: tagName } });

      await QuestionTag.create({
        question_id: newQuestion.id,
        tag_id: tag.id,
      });
    }),
  );

  const responseData = {
    ...newQuestion.toJSON(),
    tagList: body.tagList,
  };
  logger.info('Question creation successful');
  return { message: 'Question created succesfully', question: responseData };
};

export const processListQuestions = async (
  searchParams: QuestionSearchParams,
): Promise<Question[]> => {
  const whereClause: { [key: string]: any } = {};

  if (searchParams.author) {
    const user = await User.findOne({
      where: { username: searchParams.author },
    });

    if (user) {
      whereClause.author_id = user.id;
    } else {
      return [];
    }
  }

  if (searchParams.tagName) {
    const tag = await Tag.findOne({
      where: { name: searchParams.tagName },
    });

    if (tag) {
      const questions = await QuestionTag.findAll({
        where: { tag_id: tag.id },
        attributes: ['question_id'],
      });
      whereClause.id = { [Op.in]: questions.map((items) => items.question_id) };
    } else {
      return [];
    }
  }

  const questions = await Question.findAll({
    where: whereClause,
    limit: searchParams.limit,
    offset: searchParams.offset,
    attributes: ['id', 'title', 'content'],
    include: [
      {
        model: User,
        as: 'author',
        attributes: ['username'],
      }
    ],
      raw: true
  });

  if (!questions) {
    throw new ResourceNotFoundError('No question found', null);
  }
  logger.info('List question successful');
  return questions ? questions.map((questions) => questions) : [];
};

export const processDeleteQuestion = async (
  questionId: string,
): Promise<QuestionDeletionResponse> => {
  const question = await Question.findOne({ where: { id: questionId } });

  if (!question) {
    throw new ResourceNotFoundError('Question not found', null);
  }

  await QuestionTag.destroy({
    where: { question_id: questionId },
  });

  await Question.destroy({ where: { id: questionId } });

  return { message: 'Question deleted succesfully' };
};

export const countQuestions = async (): Promise<any> => {
  const count = await Question.findAndCountAll();
  return count;
}