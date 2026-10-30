import { buildSkillDomainConfig } from '@svitlo/engine/taxonomy';
import { counting_SkillDomain_Ids } from './counting.ids';
import { counting_SkillGroups_Ids } from './index.ids';

export const counting_SkillDomain_Data = buildSkillDomainConfig({
  id: counting_SkillDomain_Ids.counting,
  name: {
    en: "Counting",
    "lt": "Skaičiavimas",
    "lv": "Skaitīšana",
    "et": "Loendamine",
    "be": "Лічэньне",
    "ka": "დათვლა",
    "kk": "Санау",
    zh: "计数",
    hi: "गिनती",
    es: "Conteo",
    ar: "العد",
    fr: "Dénombrement",
    bn: "গণনা",
    pt: "Contagem",
    ur: "گنتی",
    id: "Menghitung",
    de: "Zählen",
    ja: "数えること",
    ko: "수 세기",
    tr: "Sayma",
    vi: "Đếm",
    ta: "எண்ணுதல்",
    te: "లెక్కింపు",
    mr: "मोजणी",
    ms: "Membilang",
    he: "ספירה",
    pl: "Liczenie",
    uk: "Лічба",
  },
  groupIds: counting_SkillGroups_Ids,
  description: { methodological: "The concept of quantity develops through one-to-one correspondence between objects and number words, movement along the natural-number sequence, ordinal positions, and grouping objects for counting." },
});
