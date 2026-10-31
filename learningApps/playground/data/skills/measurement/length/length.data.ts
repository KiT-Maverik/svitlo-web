import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { compareLength_Skill_Data, nonstandardLength_Skill_Data } from './skills';

export const length_SkillGroup_Data = buildSkillGroupConfig({
  id: 'fd424287-b12e-47a3-92e7-931819d5e3df',
  name: {
    en: "Length",
    lt: "Ilgis",
    lv: "Garums",
    et: "Pikkus",
    be: "Даўжыня",
    ka: "სიგრძე",
    kk: "Ұзындық",
    zh: "长度",
    hi: "लंबाई",
    es: "Longitud",
    ar: "الطول",
    fr: "Longueur",
    bn: "দৈর্ঘ্য",
    pt: "Comprimento",
    ur: "لمبائی",
    id: "Panjang",
    de: "Länge",
    ja: "長さ",
    ko: "길이",
    tr: "Uzunluk",
    vi: "Độ dài",
    ta: "நீளம்",
    te: "పొడవు",
    mr: "लांबी",
    ms: "Panjang",
    he: "אורך",
    pl: "Długość",
    uk: "Довжина"
  },
  skillIds: {
    compareLength: compareLength_Skill_Data.id,
    nonstandardLength: nonstandardLength_Skill_Data.id,
  },
  description: { methodological: "Direct and instrument-based comparison of lengths, metric units of differing magnitudes, and operations on homogeneous length quantities." },
});
