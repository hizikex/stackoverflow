export enum VoteType {
  upvote = 'upvote',
  downvote = 'downvote',
}

export interface VoteAttributes {
  user_id: number;
  answer_id: number;
  vote_type: VoteType;
}

export interface VoteRequest {
  user_id: string;
  answer_id: string;
}

export interface VoteResponse {
  vote: any;
}
