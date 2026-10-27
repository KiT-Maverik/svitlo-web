import { buildSkillConfig } from '@/utils';
import { interpretation_Skills_Ids } from './index.ids';

export const interpretConclusion_Skill_Data = buildSkillConfig({
  id: interpretation_Skills_Ids.interpretConclusion,
  name: {
    en: "Drawing conclusions from data",
    zh: "根据数据得出结论",
    hi: "आँकड़ों से निष्कर्ष निकालना",
    es: "Extraer conclusiones a partir de datos",
    ar: "استخلاص استنتاجات من البيانات",
    fr: "Tirer des conclusions à partir de données",
    bn: "উপাত্ত থেকে সিদ্ধান্ত নেওয়া",
    pt: "Tirar conclusões a partir de dados",
    ur: "اعداد و شمار سے نتائج اخذ کرنا",
    id: "Menarik kesimpulan dari data",
    de: "Schlussfolgerungen aus Daten ziehen",
    ja: "データから結論を導く",
    ko: "자료에서 결론 도출하기",
    tr: "Verilerden sonuç çıkarma",
    vi: "Rút ra kết luận từ dữ liệu",
    ta: "தரவிலிருந்து முடிவுகளை எட்டுதல்",
    te: "దత్తాంశం ఆధారంగా నిర్ధారణలకు రావడం",
    mr: "माहितीवरून निष्कर्ष काढणे",
    ms: "Membuat kesimpulan daripada data",
    he: "הסקת מסקנות מנתונים",
    pl: "Wyciąganie wniosków z danych",
    uk: "Формулювання висновків на основі даних",
  },
});
