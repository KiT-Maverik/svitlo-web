import { buildSkillGroupConfig } from '@/utils';
import { duration_SkillGroup_Ids } from './duration.ids';
import { duration_Skills_Ids } from './skills/index.ids';

export const duration_SkillGroup_Data = buildSkillGroupConfig({
  id: duration_SkillGroup_Ids.duration,
  name: {
    en: "Duration",
    "lt": "Trukmė",
    "lv": "Ilgums",
    "et": "Kestus",
    "be": "Працягласьць",
    "ka": "ხანგრძლივობა",
    "kk": "Ұзақтық",
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
  skillIds: duration_Skills_Ids,
});
