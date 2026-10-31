import { Practice_Section_Locale } from './sections/practice/practice.types';
import {Theory_Section_Locale} from "./sections/theory/theory.types";

export type HowLightMoves_Sections = 'practice' | 'quiz' | 'theory';

export type HowLightMoves_Locale = {
  name: string;
  section: {
    practice: Practice_Section_Locale
    quiz: {
      name: string;
      welcome: string;
    }
    theory: Theory_Section_Locale
  }
}
