import type { QuestionComment } from "./question-comment";

export interface QuestionCommentsRepository {
  create(questionComment: QuestionComment): Promise<void>
}