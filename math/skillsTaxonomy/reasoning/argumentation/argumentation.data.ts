import { buildSkillGroupConfig } from '@/utils';
import { argumentation_SkillGroup_Ids } from './argumentation.ids';
import { argumentation_Skills_Ids } from './skills/index.ids';

export const argumentation_SkillGroup_Data = buildSkillGroupConfig({
  id: argumentation_SkillGroup_Ids.argumentation,
  name: {
    en: "Mathematical argumentation",
    zh: "数学论证",
    hi: "गणितीय तर्क-वितर्क",
    es: "Argumentación matemática",
    ar: "التبرير الرياضي",
    fr: "Argumentation mathématique",
    bn: "গাণিতিক যুক্তি উপস্থাপন",
    pt: "Argumentação matemática",
    ur: "ریاضی استدلال",
    id: "Argumentasi matematika",
    de: "Mathematisches Begründen",
    ja: "数学的な根拠づけ",
    ko: "수학적 논증",
    tr: "Matematiksel gerekçelendirme",
    vi: "Lập luận toán học",
    ta: "கணித வாதம்",
    te: "గణిత వాదన",
    mr: "गणितीय युक्तिवाद",
    ms: "Penghujahan matematik",
    he: "הנמקה מתמטית",
    pl: "Argumentacja matematyczna",
    uk: "Математична аргументація",
  },
  skillIds: argumentation_Skills_Ids,
});
