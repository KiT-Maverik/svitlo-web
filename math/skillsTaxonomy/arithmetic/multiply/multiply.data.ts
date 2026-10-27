import { buildSkillGroupConfig } from '@/utils';
import { multiply_SkillGroup_Ids } from './multiply.ids';
import { multiply_Skills_Ids } from './skills/index.ids';

export const multiply_SkillGroup_Data = buildSkillGroupConfig({
  id: multiply_SkillGroup_Ids.multiply,
  name: {
    en: "Multiplication",
    zh: "乘法",
    hi: "गुणा",
    es: "Multiplicación",
    ar: "الضرب",
    fr: "Multiplication",
    bn: "গুণ",
    pt: "Multiplicação",
    ur: "ضرب",
    id: "Perkalian",
    de: "Multiplikation",
    ja: "乗法",
    ko: "곱셈",
    tr: "Çarpma",
    vi: "Phép nhân",
    ta: "பெருக்கல்",
    te: "గుణకారం",
    mr: "गुणाकार",
    ms: "Pendaraban",
    he: "כפל",
    pl: "Mnożenie",
    uk: "Множення",
  },
  skillIds: multiply_Skills_Ids,
});
