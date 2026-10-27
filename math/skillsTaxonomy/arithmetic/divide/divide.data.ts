import { buildSkillGroupConfig } from '@/utils';
import { divide_SkillGroup_Ids } from './divide.ids';
import { divide_Skills_Ids } from './skills/index.ids';

export const divide_SkillGroup_Data = buildSkillGroupConfig({
  id: divide_SkillGroup_Ids.divide,
  name: {
    en: "Division",
    zh: "除法",
    hi: "भाग",
    es: "División",
    ar: "القسمة",
    fr: "Division",
    bn: "ভাগ",
    pt: "Divisão",
    ur: "تقسیم",
    id: "Pembagian",
    de: "Division",
    ja: "除法",
    ko: "나눗셈",
    tr: "Bölme",
    vi: "Phép chia",
    ta: "வகுத்தல்",
    te: "భాగహారం",
    mr: "भागाकार",
    ms: "Pembahagian",
    he: "חילוק",
    pl: "Dzielenie",
    uk: "Ділення",
  },
  skillIds: divide_Skills_Ids,
});
