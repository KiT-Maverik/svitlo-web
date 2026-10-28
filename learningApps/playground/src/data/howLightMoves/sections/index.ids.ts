import { practice_Section_Ids } from './practice/practice.ids';
import { quiz_Section_Ids } from './quiz/quiz.ids';
import { theory_Section_Ids } from './theory/theory.ids';

export const howLightMoves_Sections_Ids = {
  theory: theory_Section_Ids.theory,
  practice: practice_Section_Ids.practice,
  quiz: quiz_Section_Ids.quiz,
} as const;
