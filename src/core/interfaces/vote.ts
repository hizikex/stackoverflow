export interface VoteAttributes {
  user_id: number;
  answer_id: number;
  vote_type: 'upvote' | 'downvote';
}

export interface VoteRequest {
  user_id: string;
  answer_id: string;
}

export interface VoteResponse {
  vote: any;
}
