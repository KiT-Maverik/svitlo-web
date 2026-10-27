import { buildSkillConfig } from '@/utils';
import { duration_Skills_Ids } from './index.ids';

export const convertMinutesSeconds_Skill_Data = buildSkillConfig({
  id: duration_Skills_Ids.convertMinutesSeconds,
  name: {
    en: "Converting minutes and seconds",
    zh: "分钟与秒的换算",
    hi: "मिनटों और सेकंडों का रूपांतरण",
    es: "Convertir minutos y segundos",
    ar: "التحويل بين الدقائق والثواني",
    fr: "Convertir minutes et secondes",
    bn: "মিনিট ও সেকেন্ডের রূপান্তর",
    pt: "Converter minutos e segundos",
    ur: "منٹوں اور سیکنڈوں کی تبدیلی",
    id: "Mengonversi menit dan detik",
    de: "Minuten und Sekunden umrechnen",
    ja: "分と秒を換算する",
    ko: "분과 초 변환하기",
    tr: "Dakika ve saniye dönüşümü yapma",
    vi: "Đổi phút và giây",
    ta: "நிமிடம் மற்றும் நொடிகளை மாற்றுதல்",
    te: "నిమిషాలు, సెకన్లను మార్చడం",
    mr: "मिनिटे आणि सेकंदांचे रूपांतर करणे",
    ms: "Menukar minit dan saat",
    he: "המרה בין דקות לשניות",
    pl: "Przeliczanie minut i sekund",
    uk: "Перетворення хвилин на секунди й навпаки",
  },
});
