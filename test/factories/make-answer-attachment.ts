import { UniqueEntityID } from "../../src/core/entities/unique-entity-id"
import { type AnswerAttachmentProps, AnswerAttachment } from "../../src/domain/forum/enterprise/entities/answer-attachment"

export function makeAnswerAttachment(
  override: Partial<AnswerAttachmentProps> = {},
  id?: UniqueEntityID,
) {
  const answerAttachment = AnswerAttachment.create(
    {
      answerId: new UniqueEntityID(),
      attachmentId: new UniqueEntityID(),
      ...override,
    },
    id,
  )

  return answerAttachment
}