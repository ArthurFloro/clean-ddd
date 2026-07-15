import type { QuestionComment } from "../../src/domain/forum/enterprise/entities/question-comment"
import type { QuestionCommentsRepository } from "../../src/domain/forum/enterprise/entities/question-comments-repository"

export class InMemoryQuestionCommentsRepository
  implements QuestionCommentsRepository {
  public items: QuestionComment[] = []

  async create(questionComment: QuestionComment) {
    this.items.push(questionComment)
  }
}