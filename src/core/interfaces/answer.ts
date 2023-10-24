export interface AnswerAttributes {
    id: number;
    question_id: string;
    user_id: number;
    content: string;
}

export interface AnswerCreationRequest {
    content: string;
}

export interface AnswerCreationResponse {
    message: string;
    answer: any;
}
