import { beforeEach, describe, expect, it } from "vitest"
import { InMemoryQuestionsRepository } from "../../../../../test/in-memory-questions-repository"
import { Question } from "../../enterprise/entities/questions"
import { UniqueEntityID } from "../../../../core/entities/unique-entity-id"
import { GetQuestionBySlugUseCase } from "./get-question-by-slug"
import { Slug } from "../../../value-objects/slug"


let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let sut: GetQuestionBySlugUseCase

describe('Get Question By Slug', () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository()
    sut = new GetQuestionBySlugUseCase(inMemoryQuestionsRepository)
  })

  it('should be able to get a question by slug', async () => {
    const newQuestion = Question.create({
      authorId: new UniqueEntityID(),
      title: 'Example Question',
      slug: Slug.create('example-question'),
      content: 'Example content',
    })

    await inMemoryQuestionsRepository.create(newQuestion)

    const { question } = await sut.execute({
      slug: 'example-question',
    })

    expect(question.id).toBeTruthy()
    expect(question.title).toEqual(newQuestion.title)
  })
})