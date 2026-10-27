import { buildSkillConfig } from '@/utils';
import { steps_Skills_Ids } from './index.ids';

export const countBy10_Skill_Data = buildSkillConfig({
  id: steps_Skills_Ids.countBy10,
  name: {
    en: "Counting in steps of 10",
    zh: "每次按10递增计数",
    hi: "10-10 के अंतर से गिनना",
    es: "Contar de 10 en 10",
    ar: "العد بقفزات مقدارها 10",
    fr: "Compter de 10 en 10",
    bn: "10 করে গণনা",
    pt: "Contar de 10 em 10",
    ur: "10 10 کے وقفے سے گننا",
    id: "Membilang dengan kelipatan 10",
    de: "In 10er-Schritten zählen",
    ja: "10ずつ数える",
    ko: "10씩 건너뛰며 세기",
    tr: "10'er 10'er ritmik sayma",
    vi: "Đếm cách 10 đơn vị",
    ta: "10 வீதம் எண்ணுதல்",
    te: "10 చొప్పున లెక్కించడం",
    mr: "10 च्या टप्प्यांनी मोजणे",
    ms: "Membilang secara 10-10",
    he: "ספירה בקפיצות של 10",
    pl: "Liczenie co 10",
    uk: "Лічба з кроком 10",
  },
});
