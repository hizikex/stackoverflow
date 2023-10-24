import ResourceNotFoundError from "../errors/ResourceNotFoundError";
import { AnswerCreationRequest, AnswerCreationResponse } from "../interfaces/answer";
import { Answer } from "../models/answers";
import { Question } from "../models/question";
import { User } from "../models/users";
import { logger } from "../utils/logger";

export const processAnswer = async (user: User, questionId: number, body: AnswerCreationRequest): Promise<AnswerCreationResponse> => {
    if (!user) {
        throw new ResourceNotFoundError('User not found', null)
    }

    const questionExist = await Question.findOne({ where: { id: questionId} });

    if (!questionExist) {
        throw new ResourceNotFoundError('Question not found', null)
    }

    const createAnswer = await Answer.create({
        user_id: user.id,
        question_id: questionId,
        content: body.content
    });

    logger.info('Answer creation successful')
    return {
        message: 'Answer creation successful',
        answer: createAnswer
    }
};
