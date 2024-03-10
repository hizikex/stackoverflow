export interface QuestionSubscriptionAttributes {
  user_id: number;
  question_id: number;
}

export interface QuestionSubscriptionResponse {
  message: string;
  data: any
}

export interface QuestionSubscriptionRequest {
  question_id: number;
}