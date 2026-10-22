import '../../src/types/questions/multiple-select';
import '../../src/types/questions/numeric';
declare module '../../src/types/questions/multiple-select' {
  interface MultipleSelectQuestionExtensions {
    curriculum?: { topicId: string; objectives: string[] };
  }
}
declare module '../../src/types/questions/numeric' {
  interface NumericQuestionExtensions { authorDifficulty?: 'easy' | 'hard' }
}
