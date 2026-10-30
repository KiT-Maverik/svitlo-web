import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';
import { length_SkillGroup_Ids } from './length.ids';
import { length_Skills_Ids } from './skills/index.ids';

export const length_SkillGroup_Data = buildSkillGroupConfig({
  id: length_SkillGroup_Ids.length,
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
  skillIds: length_Skills_Ids,
  description: { methodological: "Direct and instrument-based comparison of lengths, metric units of differing magnitudes, and operations on homogeneous length quantities." },
});
