export interface AnswerAttributes {
  id: number;
  question_id: number;
  user_id: number;
  content: string;
}

export interface AnswerCreationRequest {
  content: string;
}

export interface AnswerCreationResponse {
  answer: any;
}
