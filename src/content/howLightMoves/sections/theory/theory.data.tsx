import type { LessonSection_Config } from '@types';
import type { MarkdownResource_AllLocales_Config } from '@types';
import { createLocalizedFileLocations, createTextResource } from '@/utils';
import { scene } from '../../resources/scenes';
import { id } from '../../howLightMoves.constants';

const introduction: MarkdownResource_AllLocales_Config = {
  id: '6238256c-30f9-542d-962f-bcd37bcb6cfb',
  blockType: 'markdown',
  allLocales: true,
  fileLocation: createLocalizedFileLocations('/content/howLightMoves/sections/theory/markdown/01', 'md'),
};

const continuation: MarkdownResource_AllLocales_Config = {
  id: '9d56030c-d6fb-43b1-b4ce-e3eb95727320',
  blockType: 'markdown',
  allLocales: true,
  fileLocation: createLocalizedFileLocations('/content/howLightMoves/sections/theory/markdown/02', 'md'),
};

const conclusion: MarkdownResource_AllLocales_Config = {
  id: '4e5667d0-42a2-4050-9730-458503c7c9aa',
  blockType: 'markdown',
  allLocales: true,
  fileLocation: createLocalizedFileLocations('/content/howLightMoves/sections/theory/markdown/03', 'md'),
};

export const theory: LessonSection_Config = {
  id: id.section.theory,
  lessonId: id.lesson,
    name: createTextResource('dcc83b8e-b2ca-54c7-ad81-c32f337c4508', {
      en: 'Theory',
      zh: '理论',
      hi: 'सिद्धांत',
      es: 'Teoría',
      ar: 'النظرية',
      fr: 'Théorie',
      bn: 'তত্ত্ব',
      pt: 'Teoria',
      ur: 'نظریہ',
      id: 'Teori',
      de: 'Theorie',
      ja: '理論',
      ko: '이론',
      tr: 'Teori',
      vi: 'Lý thuyết',
      ta: 'கோட்பாடு',
      te: 'సిద్ధాంతం',
      mr: 'सिद्धांत',
      ms: 'Teori',
      he: 'תיאוריה',
      pl: 'Teoria',
      uk: 'Теорія',
    }),
    skippable: false,
    content: [
      introduction,
      scene.lightRayDiagram,
      continuation,
      scene.lightPropagationSimulation,
      conclusion,
      scene.theoryCheckpoint,
    ],
};
