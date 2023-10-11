import { Question } from "../models/question";
import AuthorizationError from "../errors/AuthorizationError";
import { logger } from "../utils/logger";
import {
  QuestionCreationResponse,
  QuestionRequest,
} from "../interfaces/questions";
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

  const newQuestion = await Question.create({
    author_id: Author.id,
    title: body.title,
    content: body.content,
  });

    const tags =await Promise.all(
      body.tagList.map((tagName: any) =>
        Tag.create({
          name: tagName,
        })
      )
    );

  await Promise.all(
    tags.map((tag: { id: any }) =>
      QuestionTag.create({
        question_id: newQuestion.id,
        tag_id: tag.id,
      })
    )
  );

  const responseData = {
    ...newQuestion.toJSON(),
    tagList: body.tagList,
  };

  return { message: "Question created succesfully", question: responseData };
};
