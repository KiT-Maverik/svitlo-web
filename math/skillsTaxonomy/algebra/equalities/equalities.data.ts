import { buildSkillGroupConfig } from '@/utils';
import { equalities_SkillGroup_Ids } from './equalities.ids';
import { equalities_Skills_Ids } from './skills/index.ids';

export const equalities_SkillGroup_Data = buildSkillGroupConfig({
  id: equalities_SkillGroup_Ids.equalities,
  name: {
    en: "Equalities",
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
});
