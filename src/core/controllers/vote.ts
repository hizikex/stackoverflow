import ConflictError from "../errors/ConflictError";
import NotImplementedError from "../errors/NotImplementedError";
import ResourceNotFoundError from "../errors/ResourceNotFoundError";
import { VoteRequest, VoteResponse } from "../interfaces/vote";
import { Answer } from "../models/answers";
import { User } from "../models/users";
import { Vote } from "../models/votes";

export const processAnswerVote = async (
  answerId: number,
  body: VoteRequest,
  currentUser: User | undefined
): Promise<VoteResponse> => {
  const answerExist = await Answer.findOne({ where: { id: answerId } });
  if (!answerExist) {
    throw new ResourceNotFoundError("Answer not found", null);
  }

  const voteExist = await Vote.findOne({
    where: {
      user_id: currentUser!.id,
      answer_id: answerId,
    },
  });

  if (voteExist) {
    voteExist.vote_type = body.vote_type;
    await voteExist.save();
    throw new ConflictError("Vote already exist", null);
  }

  const newVote = await Vote.create({
    user_id: currentUser!.id,
    answer_id: answerId,
    vote_type: body.vote_type,
  });

  return { vote: newVote };
};
