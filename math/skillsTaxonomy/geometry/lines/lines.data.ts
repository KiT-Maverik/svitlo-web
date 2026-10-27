import { buildSkillGroupConfig } from '@/utils';
import { lines_SkillGroup_Ids } from './lines.ids';
import { lines_Skills_Ids } from './skills/index.ids';

export const lines_SkillGroup_Data = buildSkillGroupConfig({
  id: lines_SkillGroup_Ids.lines,
  name: {
    en: "Lines",
    zh: "线",
    hi: "रेखाएँ",
    es: "Líneas",
    ar: "الخطوط",
    fr: "Lignes",
    bn: "রেখা",
    pt: "Linhas",
    ur: "خطوط",
    id: "Garis",
    de: "Linien",
    ja: "線",
    ko: "선",
    tr: "Çizgiler",
    vi: "Đường",
    ta: "கோடுகள்",
    te: "రేఖలు",
    mr: "रेषा",
    ms: "Garisan",
    he: "קווים",
    pl: "Linie",
    uk: "Лінії",
  },
  skillIds: lines_Skills_Ids,
});
