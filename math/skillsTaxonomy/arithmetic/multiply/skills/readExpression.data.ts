import { buildSkillConfig } from '@/utils';
import { multiply_Skills_Ids } from './index.ids';

export const readExpression_Skill_Data = buildSkillConfig({
  id: multiply_Skills_Ids.readExpression,
  name: {
    en: "Multiplication — Reading expressions",
    zh: "乘法 — 读算式",
    hi: "गुणा — व्यंजक पढ़ना",
    es: "Multiplicación — Lectura de expresiones",
    ar: "الضرب — قراءة التعابير",
    fr: "Multiplication — Lecture des expressions",
    bn: "গুণ — রাশি পড়া",
    pt: "Multiplicação — Leitura de expressões",
    ur: "ضرب — عبارتیں پڑھنا",
    id: "Perkalian — Membaca ekspresi",
    de: "Multiplikation — Terme lesen",
    ja: "乗法 — 式を読む",
    ko: "곱셈 — 식 읽기",
    tr: "Çarpma — İfade okuma",
    vi: "Phép nhân — Đọc biểu thức",
    ta: "பெருக்கல் — கோவைகளை வாசித்தல்",
    te: "గుణకారం — వ్యక్తీకరణలను చదవడం",
    mr: "गुणाकार — व्यंजके वाचणे",
    ms: "Pendaraban — Membaca ungkapan",
    he: "כפל — קריאת ביטויים",
    pl: "Mnożenie — Odczytywanie wyrażeń",
    uk: "Множення — Читання виразів",
  },
});
