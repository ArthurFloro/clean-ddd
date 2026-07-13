import { UniqueEntityID } from "../../../../core/entities/unique-entity-id";
import { Answer } from "../../enterprise/entities/answer";
import type { AnswersRepository } from "../repositories/answers-repository";

interface AnswerQuestionUseCaseRequest {
    instructorId: string
    questionId: string
    content: string
}

export class AnswerQuestionUseCase {
    constructor(private aswersRepository: AnswersRepository) { }

    async execute({ instructorId, questionId, content }: AnswerQuestionUseCaseRequest) {
        const answer = Answer.create({
            content,
            questionId: new UniqueEntityID(instructorId),
            authorId: new UniqueEntityID(questionId)
        })

        await this.aswersRepository.create(answer)

        return answer
    }
}