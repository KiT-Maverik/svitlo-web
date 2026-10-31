import { Practice_Locale} from "./sections/practice/resources/scenes/Practice/Practice.types";

export type HowLightMoves_Sections = 'practice' | 'quiz' | 'theory';

export type HowLightMoves_Locale = {
  name: string;
  section: {
    practice: {
      name: string;
      task: string;
      scene: {
        practice: Practice_Locale;
      }
    }
    quiz: {
      name: string;
      welcome: string;
    }
    theory: {
      name: string;
      markdown: {
        p1: string;
        p2: string;
        p3: string;
      }
      scene: {
        checkpoint: string;
        lightPropagationSimulation: string;
        lightRayDiagram: string;
      }
    }
  }
}
