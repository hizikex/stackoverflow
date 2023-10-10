import { Question } from "../models/questions";
import AuthorizationError from "../errors/AuthorizationError";
import { logger } from "../utils/logger";
import {
  QuestionCreationResponse,
  QuestionRequest,
} from "../interfaces/question";
import ResourceNotFoundError from "../errors/ResourceNotFoundError";
import { Tag } from "../models/tags";
import { QuestionTag } from "../models/question_tags";

export const processQuestionCreation = async (
  body: QuestionRequest,
  Author: Question | undefined
): Promise<QuestionCreationResponse> => {
  if (!Author) {
    const error = new Error("not found");
    const resourceNotFoundError = new ResourceNotFoundError(
      "User not found",
      error,
      {}
    );
    throw resourceNotFoundError;
  }

  let tags: Tag[] = [];

  const newQuestion = await Question.create({
    author_id: Author.id,
    title: body.title,
    content: body.content,
  });

  if (body.tagList) {
    await Promise.all(
      body.tagList.map((tagName: any) =>
        Tag.create({
          name: tagName,
        })
      )
    );
  }

  await Promise.all(
    tags.map((tag: { id: any; }) =>
      QuestionTag.create({
        question_id: newQuestion.id,
        tag_id: tag.id,
      })
    )
  );

  const responseData = {
    ...newQuestion.toJSON(),
    tagList: body.tagList
  }

  return {message: 'Question created succesfully', question: responseData};
};
