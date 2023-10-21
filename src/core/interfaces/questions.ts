export interface QuestionAttributes {
    id: number;
    author_id: number;
    title: string;
    content: string;
}

export interface QuestionRequest {
    title: string;
    content: string;
    tagList: string[];
}

export interface QuestionCreationResponse {
  message: string;
  question: any;
}

export interface QuestionSearchParams {
  tagName?: string;
  author?: string;
  limit: number;
  offset: number;
}

export interface QuestionDeletionResponse {
  message: string;
}
