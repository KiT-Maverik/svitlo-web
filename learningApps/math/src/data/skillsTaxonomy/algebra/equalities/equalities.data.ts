import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';
import { equalities_SkillGroup_Ids } from './equalities.ids';
import { equalities_Skills_Ids } from './skills/index.ids';

export const equalities_SkillGroup_Data = buildSkillGroupConfig({
  id: equalities_SkillGroup_Ids.equalities,
  name: {
    en: "Equalities",
    "lt": "Lygybės",
    "lv": "Vienādības",
    "et": "Võrdused",
    "be": "Роўнасьці",
    "ka": "ტოლობები",
    "kk": "Теңдіктер",
    zh: "等式",
    hi: "समानताएँ",
    es: "Igualdades",
    ar: "المساواة",
    fr: "Égalités",
    bn: "সমতা",
    pt: "Igualdades",
    ur: "مساوات",
    id: "Kesamaan",
    de: "Gleichungen und Gleichheiten",
    ja: "等式",
    ko: "등식",
    tr: "Eşitlikler",
    vi: "Đẳng thức",
    ta: "சமன்பாடுகள்",
    te: "సమానతలు",
    mr: "समानता",
    ms: "Kesamaan",
    he: "שוויונות",
    pl: "Równości",
    uk: "Рівності",
  },
  skillIds: equalities_Skills_Ids,
  description: { methodological: "Equality as equal values of two expressions, the truth of equalities, and completing missing components." },
});
