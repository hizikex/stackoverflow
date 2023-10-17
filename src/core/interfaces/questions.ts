import { Tag } from "../models/tags";

export interface QuestionAttributes {
    id: number;
    author_id: number;
    title: string;
    content: string;
    tagList: (Tag | string)[]
}

export interface QuestionRequest {
    title: string;
    content: string;
    tagList: (Tag | string)[]
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