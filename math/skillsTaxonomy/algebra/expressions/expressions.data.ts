import { buildSkillGroupConfig } from '@/utils';
import { expressions_SkillGroup_Ids } from './expressions.ids';
import { expressions_Skills_Ids } from './skills/index.ids';

export const expressions_SkillGroup_Data = buildSkillGroupConfig({
  id: expressions_SkillGroup_Ids.expressions,
  name: {
    en: "Expressions",
    zh: "数学表达式",
    hi: "व्यंजक",
    es: "Expresiones",
    ar: "التعابير الرياضية",
    fr: "Expressions",
    bn: "রাশিমালা",
    pt: "Expressões",
    ur: "ریاضی عبارتیں",
    id: "Ekspresi matematika",
    de: "Terme",
    ja: "式",
    ko: "수식",
    tr: "İfadeler",
    vi: "Biểu thức",
    ta: "கணிதக் கோவைகள்",
    te: "గణిత వ్యక్తీకరణలు",
    mr: "व्यंजके",
    ms: "Ungkapan matematik",
    he: "ביטויים",
    pl: "Wyrażenia",
    uk: "Вирази",
  },
  skillIds: expressions_Skills_Ids,
});
