import ResourceNotFoundError from "../errors/ResourceNotFoundError";
import { VoteRequest } from "../interfaces/vote";
import { Answer } from "../models/answers";
import { User } from "../models/users";
import { Vote } from "../models/votes";

const processAnswerVote = async (currentUser: User, answerId: number, body: VoteRequest) => {
    const answerExist = await Answer.findOne({ where: {id: answerId} });
    if (!answerExist) {
        throw new ResourceNotFoundError('Answer not found', null)
    }

    const voteExist = await Vote.findOne({ where: {user_id: currentUser.id, answer_id: answerId} });
    if (voteExist) {
        voteExist.vote_type = body;
        await voteExist.save();
    }
    
}