import { buildSkillDomainConfig } from '@svitlo/engine/taxonomy';
import { time_SkillDomain_Ids } from './time.ids';
import { time_SkillGroups_Ids } from './index.ids';

export const time_SkillDomain_Data = buildSkillDomainConfig({
  id: time_SkillDomain_Ids.time,
  name: {
    en: "Time",
    lt: "Laikas",
    lv: "Laiks",
    et: "Aeg",
    be: "Час",
    ka: "დრო",
    kk: "Уақыт",
    zh: "时间",
    hi: "समय",
    es: "Tiempo",
    ar: "الوقت",
    fr: "Temps",
    bn: "সময়",
    pt: "Tempo",
    ur: "وقت",
    id: "Waktu",
    de: "Zeit",
    ja: "時間",
    ko: "시간",
    tr: "Zaman",
    vi: "Thời gian",
    ta: "நேரம்",
    te: "సమయం",
    mr: "वेळ",
    ms: "Masa",
    he: "זמן",
    pl: "Czas",
    uk: "Час",
  },
  groupIds: time_SkillGroups_Ids,
  description: { methodological: "Calendar cycles, ways to represent instants, and calculations of event durations, distinguishing a date, a clock reading, and an elapsed interval." },
});
