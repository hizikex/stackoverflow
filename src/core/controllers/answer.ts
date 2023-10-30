import ConflictError from "../errors/AuthenticationError";
import ResourceNotFoundError from "../errors/ResourceNotFoundError";
import { AnswerCreationRequest, AnswerCreationResponse } from "../interfaces/answer";
import { Answer } from "../models/answers";
import { Question } from "../models/question";
import { User } from "../models/users";
import { logger } from "../utils/logger";

export const processAnswer = async (user: User, questionId: string, body: AnswerCreationRequest): Promise<AnswerCreationResponse> => {
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
        answer: createAnswer
    }
};

export const processAnswerUpdate = async ( currentUser: User, answerId: string, body: AnswerCreationRequest ): Promise<{[key: string]: any}> => {
    if (!currentUser) {
        throw new ResourceNotFoundError('User not found', null)
    }

    const answerExist = await Answer.findOne({ where: {id: answerId} });
    if (!answerExist) {
        throw new ResourceNotFoundError('Answer not found', null)
    }

    if (currentUser.id != answerExist.user_id) {
        throw new ConflictError('Update can only be done by author', null)
    }

    const updatedAnswer = await Answer.update(body, {where: {id: answerId}});

    return updatedAnswer
};
