import { buildSkillConfig } from '@/utils';
import { divide_Skills_Ids } from './index.ids';

export const errorDetection_Skill_Data = buildSkillConfig({
  id: divide_Skills_Ids.errorDetection,
  name: {
    en: "Division — Error detection",
    zh: "除法 — 错误识别",
    hi: "भाग — त्रुटि पहचान",
    es: "División — Detección de errores",
    ar: "القسمة — اكتشاف الأخطاء",
    fr: "Division — Détection des erreurs",
    bn: "ভাগ — ভুল শনাক্তকরণ",
    pt: "Divisão — Identificação de erros",
    ur: "تقسیم — غلطیوں کی شناخت",
    id: "Pembagian — Mendeteksi kesalahan",
    de: "Division — Fehler erkennen",
    ja: "除法 — 誤りの発見",
    ko: "나눗셈 — 오류 찾기",
    tr: "Bölme — Hata belirleme",
    vi: "Phép chia — Phát hiện lỗi",
    ta: "வகுத்தல் — பிழை கண்டறிதல்",
    te: "భాగహారం — తప్పులను గుర్తించడం",
    mr: "भागाकार — चुका ओळखणे",
    ms: "Pembahagian — Mengesan kesilapan",
    he: "חילוק — זיהוי שגיאות",
    pl: "Dzielenie — Wykrywanie błędów",
    uk: "Ділення — Виявлення помилок",
  },
});
