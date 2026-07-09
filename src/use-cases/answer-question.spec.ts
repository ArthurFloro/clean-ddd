import { expect, test } from "vitest";
import { AnswerQuestionUseCase } from "./answer-questions";
import type { AnswersRepository } from "../domain/repositories/answers-repository";
import type { Answer } from "../domain/entities/answer";

const fakeAnswerRepository: AnswersRepository = {
    create: async (answer: Answer) => {
        return
    }
}

test('create an answer', async () => {
    const answerQuestion = new AnswerQuestionUseCase(fakeAnswerRepository)

    const answer = await answerQuestion.execute({
        questionId: '1',
        instructorId: '1',
        content: 'Nova resposta'
    })

    expect(answer.content).toEqual('Nova resposta')
})