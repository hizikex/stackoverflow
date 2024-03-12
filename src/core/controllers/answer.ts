import AuthorizationError from '../errors/AuthorizationError';
import ConflictError from '../errors/ConflictError';
import ResourceNotFoundError from '../errors/ResourceNotFoundError';
import {
  AnswerCreationRequest,
  AnswerCreationResponse,
} from '../interfaces/answer';
import { MailOptions } from '../interfaces/two_factor_auth';
import { Answer } from '../models/answers';
import { Question } from '../models/question';
import { Subscription } from '../models/subscriptions';
import { User } from '../models/users';
import { logger } from '../utils/logger';
import { sendMail } from '../utils/nodemailer';

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

  const subscriptions = await Subscription.findAll({ where: { question_id: questionId } });

  for (const subscription of subscriptions) {
    const user = await User.findOne({ where: {id: subscription.user_id} });

    if (!user) {
      throw new ResourceNotFoundError('User not found', null);
    }

    const options: MailOptions = {
      to: user.email,
      subject: "New Answer to Your Subscribed Question",
      html: `
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                background-color: #f0f0f0;
                margin: 0;
                padding: 0;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
              }
              h2 {
                color: #333333;
                margin-top: 0;
              }
              p {
                color: #666666;
                font-size: 16px;
              }
              .answer {
                font-size: 18px;
                color: #007bff;
                font-family: 'Times New Roman', Times, serif;
                margin-top: 10px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <h2>New Answer to Your Subscribed Question</h2>
              <p>A new answer has been provided to the question with ID: ${questionExist.id} you subscribed to. You can view the answer by following the link below:</p>
              <p class="answer">[Insert Link to the Answer here]</p>
            </div>
          </body>
        </html>
      `
    };
    try {
      await sendMail(options);
    } catch (error) {
      logger.error("Mail not sent");
      throw new ConflictError("Mail not sent", null);
    }
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
