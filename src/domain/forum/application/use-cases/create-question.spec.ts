import { expect, test } from "vitest";
import type { Question } from "../../enterprise/entities/questions";
import type { QuestionsRepository } from "../repositories/questions-repository";
import { CreateQuestionUseCase } from "./create-question";


const fakeQuestionsRepository: QuestionsRepository = {
  create: async (question: Question) => { }
}

test('create a question', async () => {
  const createQuestion = new CreateQuestionUseCase(fakeQuestionsRepository)

  const { question } = await createQuestion.execute({
    authorId: '1',
    title: 'Nova pergunta',
    content: 'Conteúdo da pergunta'
  })

  expect(question.id).toBeTruthy()
})