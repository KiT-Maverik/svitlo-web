import { buildSkillDomainConfig } from '@svitlo/engine/taxonomy';
import { reasoning_SkillDomain_Ids } from './reasoning.ids';
import { reasoning_SkillGroups_Ids } from './index.ids';

export const reasoning_SkillDomain_Data = buildSkillDomainConfig({
  id: reasoning_SkillDomain_Ids.reasoning,
  name: {
    en: "Reasoning",
    "lt": "Samprotavimas",
    "lv": "Spriešana",
    "et": "Arutlemine",
    "be": "Разважаньне",
    "ka": "მსჯელობა",
    "kk": "Пайымдау",
    zh: "推理",
    hi: "तर्क",
    es: "Razonamiento",
    ar: "الاستدلال",
    fr: "Raisonnement",
    bn: "যুক্তি",
    pt: "Raciocínio",
    ur: "استدلال",
    id: "Penalaran",
    de: "Schlussfolgern",
    ja: "推論",
    ko: "추론",
    tr: "Akıl yürütme",
    vi: "Lập luận",
    ta: "பகுத்தறிதல்",
    te: "తార్కిక ఆలోచన",
    mr: "तर्कविचार",
    ms: "Penaakulan",
    he: "הסקת מסקנות",
    pl: "Rozumowanie",
    uk: "Міркування",
  },
  groupIds: reasoning_SkillGroups_Ids,
});
