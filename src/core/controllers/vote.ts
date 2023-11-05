import NotImplementedError from "../errors/NotImplementedError";
import ResourceNotFoundError from "../errors/ResourceNotFoundError";
import { VoteRequest, VoteResponse } from "../interfaces/vote";
import { Answer } from "../models/answers";
import { User } from "../models/users";
import { Vote } from "../models/votes";

export const processAnswerVote = async (currentUser: User, answerId: number, body: VoteRequest): Promise<VoteResponse> => {
    const answerExist = await Answer.findOne({ where: {id: answerId} });
    if (!answerExist) {
        throw new ResourceNotFoundError('Answer not found', null);
    }

    const voteExist = await Vote.findOne({
        where: {
            user_id: currentUser.id,
            answer_id: answerId
        }
    });

    console.log(voteExist);
    
    if (voteExist ) {
        voteExist.vote_type = body.vote_type;
        await voteExist.save();
        throw new NotImplementedError('Vote already exist', null);
    }
    
    const newVote = await Vote.create({vote_type: body.vote_type});

    return { vote: newVote }
};