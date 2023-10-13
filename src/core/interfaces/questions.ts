export interface QuestionAttributes {
    id: number;
    author_id: number;
    title: string;
    content: string;
}

export interface QuestionRequest {
    tagList: any;
    title: string;
    content: string;
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