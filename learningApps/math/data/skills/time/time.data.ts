import { buildSkillDomainConfig } from '@svitlo/engine/taxonomy';
import { calendar_SkillGroup_Data } from './calendar/calendar.data';
import { clock_SkillGroup_Data } from './clock/clock.data';
import { duration_SkillGroup_Data } from './duration/duration.data';

export const time_SkillDomain_Data = buildSkillDomainConfig({
  id: 'be33de46-a3d9-4535-8eee-cf1c3c304827',
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
  groupIds: {
    calendar: calendar_SkillGroup_Data.id,
    clock: clock_SkillGroup_Data.id,
    duration: duration_SkillGroup_Data.id,
  },
  description: { methodological: "Calendar cycles, ways to represent instants, and calculations of event durations, distinguishing a date, a clock reading, and an elapsed interval." },
});
