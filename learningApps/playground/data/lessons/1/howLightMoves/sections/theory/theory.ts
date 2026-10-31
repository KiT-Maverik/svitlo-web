import type { HowLightMoves_Lesson_Locale } from '@/data/lessons/1/howLightMoves/howLightMoves.types';

import type { StringObjectToLocale } from '../../transformer.types';
import { checkpoint } from './scenes/checkpoint';
import lightPropagationSimulation from './scenes/lightPropagationSimulation';
import { lightRayDiagram } from './scenes/lightRayDiagram';
import { getMarkdownLocale } from '../../generators/getMarkdownLocale';

type Locale = StringObjectToLocale<HowLightMoves_Lesson_Locale['section']['theory']>;

export const theory: Locale = {
  name: {
    ar: 'النظرية',
    be: 'Тэорыя',
    bn: 'তত্ত্ব',
    de: 'Theorie',
    en: 'Theory',
    es: 'Teoría',
    et: 'Teooria',
    fr: 'Théorie',
    he: 'תיאוריה',
    hi: 'सिद्धांत',
    id: 'Teori',
    ja: '理論',
    ka: 'თეორია',
    kk: 'Теория',
    ko: '이론',
    lt: 'Teorija',
    lv: 'Teorija',
    mr: 'सिद्धांत',
    ms: 'Teori',
    pl: 'Teoria',
    pt: 'Teoria',
    qm: 'Nazariye',
    ta: 'கோட்பாடு',
    te: 'సిద్ధాంతం',
    tr: 'Teori',
    uk: 'Теорія',
    ur: 'نظریہ',
    vi: 'Lý thuyết',
    zh: '理论',
  },
  markdown: {
    p1: getMarkdownLocale('./markdown/p1'),
    p2: getMarkdownLocale('./markdown/p2'),
    p3: getMarkdownLocale('./markdown/p3'),
  },
  scene: {
    checkpoint,
    lightRayDiagram,
    lightPropagationSimulation,
  },
};
