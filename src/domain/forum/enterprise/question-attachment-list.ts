import type { QuestionAttachment } from "./entities/question-attachment";
import { WatchedList } from "./entities/watched-list";


export class QuestionAttachmentList extends WatchedList<QuestionAttachment> {
  compareItems(a: QuestionAttachment, b: QuestionAttachment): boolean {
    return a.attachmentId === b.attachmentId
  }
}