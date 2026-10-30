import { buildSkillDomainConfig } from '@svitlo/engine/taxonomy';

import { argumentation_SkillGroup_Data, verification_SkillGroup_Data, logic_SkillGroup_Data, representations_SkillGroup_Data } from './index';

export const reasoning_SkillDomain_Data = buildSkillDomainConfig({
  id: '91e2d845-0c04-4a81-b126-8bad16300cad',
  name: {
    en: "Reasoning",
    lt: "Samprotavimas",
    lv: "Spriešana",
    et: "Arutlemine",
    be: "Разважаньне",
    ka: "მსჯელობა",
    kk: "Пайымдау",
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
  groupIds: {
    argumentation: argumentation_SkillGroup_Data.id,
    verification: verification_SkillGroup_Data.id,
    logic: logic_SkillGroup_Data.id,
    representations: representations_SkillGroup_Data.id,
  },
  description: { methodological: "Justifying mathematical statements, finding counterexamples, drawing logical conclusions, checking solutions, and translating between representations." },
});
