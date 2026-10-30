import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';
import { calendar_SkillGroup_Ids } from './calendar.ids';
import { calendar_Skills_Ids } from './skills/index.ids';

export const calendar_SkillGroup_Data = buildSkillGroupConfig({
  id: calendar_SkillGroup_Ids.calendar,
  name: {
    en: "Calendar",
    lt: "Kalendorius",
    lv: "Kalendārs",
    et: "Kalender",
    be: "Каляндар",
    ka: "კალენდარი",
    kk: "Күнтізбе",
    zh: "日历",
    hi: "कैलेंडर",
    es: "Calendario",
    ar: "التقويم",
    fr: "Calendrier",
    bn: "পঞ্জিকা",
    pt: "Calendário",
    ur: "تقویم",
    id: "Kalender",
    de: "Kalender",
    ja: "カレンダー",
    ko: "달력",
    tr: "Takvim",
    vi: "Lịch",
    ta: "நாட்காட்டி",
    te: "క్యాలెండర్",
    mr: "दिनदर्शिका",
    ms: "Kalendar",
    he: "לוח שנה",
    pl: "Kalendarz",
    uk: "Календар",
  },
  skillIds: calendar_Skills_Ids,
  description: { methodological: "Navigating days, weeks, months, and years while accounting for varying month lengths and leap years." },
});
