import { buildSkillConfig } from '@/utils';
import { clock_Skills_Ids } from './index.ids';

export const read24HourClock_Skill_Data = buildSkillConfig({
  id: clock_Skills_Ids.read24HourClock,
  name: {
    en: "Reading 24-hour time",
    zh: "读取24小时制时间",
    hi: "24 घंटे की पद्धति में समय पढ़ना",
    es: "Leer la hora en formato de 24 horas",
    ar: "قراءة الوقت بنظام 24 ساعة",
    fr: "Lire l'heure au format 24 heures",
    bn: "২৪ ঘণ্টা পদ্ধতিতে সময় পড়া",
    pt: "Ler as horas no formato de 24 horas",
    ur: "24 گھنٹے کے نظام میں وقت پڑھنا",
    id: "Membaca waktu dalam format 24 jam",
    de: "Uhrzeit im 24-Stunden-Format ablesen",
    ja: "24時間表記の時刻を読む",
    ko: "24시간제로 시간 읽기",
    tr: "24 saat biçiminde saati okuma",
    vi: "Đọc giờ theo định dạng 24 giờ",
    ta: "24 மணி நேர முறையில் நேரத்தை வாசித்தல்",
    te: "24 గంటల పద్ధతిలో సమయం చదవడం",
    mr: "२४ तासांच्या पद्धतीने वेळ वाचणे",
    ms: "Membaca waktu dalam format 24 jam",
    he: "קריאת שעה בפורמט של 24 שעות",
    pl: "Odczytywanie czasu w formacie 24-godzinnym",
    uk: "Зчитування часу у 24-годинному форматі",
  },
});
