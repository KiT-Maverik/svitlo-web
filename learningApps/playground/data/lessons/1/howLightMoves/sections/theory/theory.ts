import type { HowLightMoves_Lesson_Locale } from '@/data/lessons/1/howLightMoves/howLightMoves.types';
import type { StringObjectToLocale } from '../../transformer.types';

type Locale = StringObjectToLocale<Pick<HowLightMoves_Lesson_Locale['section']['theory'], 'name'>>;

export const theory = {
  name: {
    en: 'Theory',
    qm: 'Nazariye',
    lt: 'Teorija',
    lv: 'Teorija',
    et: 'Teooria',
    be: 'Тэорыя',
    ka: 'თეორია',
    kk: 'Теория',
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
  },
} satisfies Locale;
