import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { convertHoursMinutes_Skill_Data, convertMinutesSeconds_Skill_Data, eventDuration_Skill_Data, findStartOrEnd_Skill_Data } from './skills';

export const duration_SkillGroup_Data = buildSkillGroupConfig({
  id: '7bd683f2-1db4-4242-b223-733aa66481f7',
  name: {
    en: "Duration",
    lt: "Trukmė",
    lv: "Ilgums",
    et: "Kestus",
    be: "Працягласьць",
    ka: "ხანგრძლივობა",
    kk: "Ұзақтық",
    zh: "持续时间",
    hi: "समयावधि",
    es: "Duración",
    ar: "المدة الزمنية",
    fr: "Durée",
    bn: "সময়কাল",
    pt: "Duração",
    ur: "دورانیہ",
    id: "Durasi",
    de: "Zeitdauer",
    ja: "時間の長さ",
    ko: "시간의 길이",
    tr: "Süre",
    vi: "Khoảng thời gian",
    ta: "கால அளவு",
    te: "వ్యవధి",
    mr: "कालावधी",
    ms: "Tempoh masa",
    he: "משך זמן",
    pl: "Czas trwania",
    uk: "Тривалість",
  },
  skillIds: {
    convertHoursMinutes: convertHoursMinutes_Skill_Data.id,
    convertMinutesSeconds: convertMinutesSeconds_Skill_Data.id,
    eventDuration: eventDuration_Skill_Data.id,
    findStartOrEnd: findStartOrEnd_Skill_Data.id,
  },
  description: { methodological: "Relationships among seconds, minutes, and hours, and deriving a time interval or instant from other known time information." },
});
