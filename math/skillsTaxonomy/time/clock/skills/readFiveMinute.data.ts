import { buildSkillConfig } from '@/utils';
import { clock_Skills_Ids } from './index.ids';

export const readFiveMinute_Skill_Data = buildSkillConfig({
  id: clock_Skills_Ids.readFiveMinute,
  name: {
    en: "Reading time to five minutes",
    zh: "读取精确到五分钟的时间",
    hi: "पाँच मिनट की सटीकता तक समय पढ़ना",
    es: "Leer la hora con precisión de cinco minutos",
    ar: "قراءة الوقت بدقة خمس دقائق",
    fr: "Lire l'heure à cinq minutes près",
    bn: "পাঁচ মিনিটের নির্ভুলতায় সময় পড়া",
    pt: "Ler as horas com precisão de cinco minutos",
    ur: "پانچ منٹ کی درستگی سے وقت پڑھنا",
    id: "Membaca waktu hingga ketelitian lima menit",
    de: "Uhrzeit auf fünf Minuten genau ablesen",
    ja: "5分単位で時刻を読む",
    ko: "5분 단위로 시간 읽기",
    tr: "Saati beş dakika hassasiyetle okuma",
    vi: "Đọc giờ chính xác đến năm phút",
    ta: "ஐந்து நிமிடத் துல்லியத்தில் நேரத்தை வாசித்தல்",
    te: "ఐదు నిమిషాల ఖచ్చితత్వంతో సమయం చదవడం",
    mr: "पाच मिनिटांच्या अचूकतेने वेळ वाचणे",
    ms: "Membaca waktu dengan ketepatan lima minit",
    he: "קריאת השעה בדיוק של חמש דקות",
    pl: "Odczytywanie czasu z dokładnością do pięciu minut",
    uk: "Зчитування часу з точністю до п’яти хвилин",
  },
});
