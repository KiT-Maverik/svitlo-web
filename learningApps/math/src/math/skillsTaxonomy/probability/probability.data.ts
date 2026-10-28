import { buildSkillDomainConfig } from '@svitlo/engine/taxonomy';
import { probability_SkillDomain_Ids } from './probability.ids';
import { probability_SkillGroups_Ids } from './index.ids';

export const probability_SkillDomain_Data = buildSkillDomainConfig({
  id: probability_SkillDomain_Ids.probability,
  name: {
    en: "Probability",
    "lt": "Tikimybė",
    "lv": "Varbūtība",
    "et": "Tõenäosus",
    "be": "Імавернасьць",
    "ka": "ალბათობა",
    "kk": "Ықтималдық",
    zh: "概率",
    hi: "प्रायिकता",
    es: "Probabilidad",
    ar: "الاحتمال",
    fr: "Probabilités",
    bn: "সম্ভাবনা",
    pt: "Probabilidade",
    ur: "احتمال",
    id: "Peluang",
    de: "Wahrscheinlichkeit",
    ja: "確率",
    ko: "확률",
    tr: "Olasılık",
    vi: "Xác suất",
    ta: "நிகழ்தகவு",
    te: "సంభావ్యత",
    mr: "संभाव्यता",
    ms: "Kebarangkalian",
    he: "הסתברות",
    pl: "Prawdopodobieństwo",
    uk: "Ймовірність",
  },
  groupIds: probability_SkillGroups_Ids,
});
