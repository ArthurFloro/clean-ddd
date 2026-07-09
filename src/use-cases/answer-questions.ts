import { Answer } from "../domain/entities/answer";
import type { AnswersRepository } from "../domain/repositories/answers-repository";

interface AnswerQuestionUseCaseRequest {
    instructorId: string
    questionId: string
    content: string
}

export class AnswerQuestionUseCase {
    constructor(private aswersRepository: AnswersRepository) { }

    async execute({ instructorId, questionId, content }: AnswerQuestionUseCaseRequest) {
        const answer = new Answer({
            content,
            questionId,
            authorId: instructorId
        })

        await this.aswersRepository.create(answer)

        return answer
    }
}