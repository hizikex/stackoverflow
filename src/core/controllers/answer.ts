import AuthorizationError from '../errors/AuthorizationError';
import ResourceNotFoundError from '../errors/ResourceNotFoundError';
import {
  AnswerCreationRequest,
  AnswerCreationResponse,
} from '../interfaces/answer';
import { Answer } from '../models/answers';
import { Question } from '../models/question';
import { User } from '../models/users';
import { logger } from '../utils/logger';

export const processAnswer = async (
  user: User,
  questionId: number,
  body: AnswerCreationRequest,
): Promise<AnswerCreationResponse> => {
  if (!user) {
    throw new ResourceNotFoundError('User not found', null);
  }

  const questionExist = await Question.findOne({ where: { id: questionId } });

  if (!questionExist) {
    throw new ResourceNotFoundError('Question not found', null);
  }

  const createAnswer = await Answer.create({
    user_id: user.id,
    question_id: questionId,
    content: body.content,
  });

  logger.info('Answer creation successful');
  return {
    answer: createAnswer,
  };
};

export const processAnswerUpdate = async (
  currentUser: User,
  answerId: string,
  body: AnswerCreationRequest,
): Promise<{ [key: string]: any }> => {
  if (!currentUser) {
    throw new ResourceNotFoundError('User not found', null);
  }

  const answerExist = await Answer.findOne({ where: { id: answerId } });
  if (!answerExist) {
    throw new ResourceNotFoundError('Answer not found', null);
  }

  if (currentUser.id !== answerExist.user_id) {
    throw new AuthorizationError('Update can only be done by author', null);
  }

  const updatedAnswer = await Answer.update(body, { where: { id: answerId } });

  return updatedAnswer;
};

export const processGetAnswers = async (
  questionId: string,
): Promise<Answer[]> => {
  const questionExist = await Question.findOne({ where: { id: questionId } });
  if (!questionExist) {
    throw new ResourceNotFoundError('Question not found', null);
  }

  const getAnswersToQuestion = await Answer.findAll({
    where: { question_id: questionId },
    attributes: ['id', 'user_id', 'content'],
    include: [
      {
        model: Question,
        as: 'question',
        attributes: ['content'],
      },
    ],
  });

  return getAnswersToQuestion;
};

export const processDeleteAnswer = async (
  currentUser: User,
  answerId: string,
) => {
  if (!currentUser) {
    throw new ResourceNotFoundError('User not found', null);
  }

  const answerExist = await Answer.findOne({ where: { id: answerId } });
  if (!answerExist) {
    throw new ResourceNotFoundError('Answer not found', null);
  }

  if (currentUser.id !== answerExist.user_id) {
    throw new AuthorizationError('Only authors can delete answer', null);
  }

  await Answer.destroy({ where: { id: answerId } });

  return {
    message: 'Answer deleted successfully',
  };
};
