import { Practice_Section_Locale } from './sections/practice/practice.types';
import { Theory_Section_Locale } from './sections/theory/theory.types';
import { Quiz_Section_Locale } from './sections/quiz/quiz.types';

export type HowLightMoves_Sections = 'practice' | 'quiz' | 'theory';

export type HowLightMoves_Lesson_Locale = {
  name: string;
  section: {
    practice: Practice_Section_Locale;
    quiz: Quiz_Section_Locale;
    theory: Theory_Section_Locale;
  };
};
