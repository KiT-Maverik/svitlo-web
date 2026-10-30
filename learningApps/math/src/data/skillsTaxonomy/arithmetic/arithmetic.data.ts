import { buildSkillDomainConfig } from '@svitlo/engine/taxonomy';
import { arithmetic_SkillDomain_Ids } from './arithmetic.ids';
import { arithmetic_SkillGroups_Ids } from './index.ids';

export const arithmetic_SkillDomain_Data = buildSkillDomainConfig({
  id: arithmetic_SkillDomain_Ids.arithmetic,
  name: {
    en: "Arithmetic",
    "lt": "Aritmetika",
    "lv": "Aritmētika",
    "et": "Aritmeetika",
    "be": "Арытмэтыка",
    "ka": "არითმეტიკა",
    "kk": "Арифметика",
    zh: "算术",
    hi: "अंकगणित",
    es: "Aritmética",
    ar: "الحساب",
    fr: "Arithmétique",
    bn: "পাটিগণিত",
    pt: "Aritmética",
    ur: "حساب",
    id: "Aritmetika",
    de: "Arithmetik",
    ja: "算術",
    ko: "산술",
    tr: "Aritmetik",
    vi: "Số học",
    ta: "எண்கணிதம்",
    te: "అంకగణితం",
    mr: "अंकगणित",
    ms: "Aritmetik",
    he: "חשבון",
    pl: "Arytmetyka",
    uk: "Арифметика",
  },
  groupIds: arithmetic_SkillGroups_Ids,
  description: { methodological: "The meanings and properties of addition, subtraction, multiplication, and division; their relationships; exact and approximate calculation methods; justifications of algorithms; and result verification. The Curriculum determines numerical ranges and degree of formalization." },
});
