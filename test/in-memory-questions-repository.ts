import type { QuestionsRepository } from "../src/domain/forum/application/repositories/questions-repository";
import type { Question } from "../src/domain/forum/enterprise/entities/questions";

export class InMemoryQuestionsRepository implements QuestionsRepository {
  public items: Question[] = []

  async create(question: Question) {
    this.items.push(question)
  }
}