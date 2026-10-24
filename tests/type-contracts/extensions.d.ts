import '../../src/types/questions/select-multiple-answers';
import '../../src/types/questions/answer-with-number';
declare module '../../src/types/questions/select-multiple-answers' {
  interface SelectMultipleAnswersQuestionExtensions {
    curriculum?: { topicId: string; objectives: string[] };
  }
}
declare module '../../src/types/questions/answer-with-number' {
  interface AnswerWithNumberQuestionExtensions { authorDifficulty?: 'easy' | 'hard' }
}
