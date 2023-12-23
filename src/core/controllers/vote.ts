import ResourceNotFoundError from '../errors/ResourceNotFoundError';
import { VoteResponse } from '../interfaces/vote';
import { Answer } from '../models/answers';
import { User } from '../models/users';
import { Vote } from '../models/votes';

export const processAnswerVote = async (
  answerId: number,
  currentUser: User | undefined,
): Promise<VoteResponse> => {
  const answerExist = await Answer.findOne({ where: { id: answerId } });
  if (!answerExist) {
    throw new ResourceNotFoundError('Answer not found', null);
  }

  const voteExist = await Vote.findOne({
    where: {
      user_id: currentUser!.id,
      answer_id: answerId
    }
  });

  if (!voteExist) {
    await Vote.create({
      user_id: currentUser!.id,
      answer_id: answerId,
    });
  } else {
    if (voteExist.vote_type === 'downvote') {
      voteExist.vote_type = 'upvote';
      await voteExist.save();
    } else {
      voteExist.vote_type = 'downvote';
      await voteExist!.save();
    }
  }

  return { vote: voteExist };
};
