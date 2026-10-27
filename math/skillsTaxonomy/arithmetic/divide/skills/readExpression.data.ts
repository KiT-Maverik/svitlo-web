import { buildSkillConfig } from '@/utils';
import { divide_Skills_Ids } from './index.ids';

export const readExpression_Skill_Data = buildSkillConfig({
  id: divide_Skills_Ids.readExpression,
  name: {
    en: 'Division — Reading expressions',
    zh: '除法 — 读算式',
    hi: 'भाग — व्यंजक पढ़ना',
    es: 'División — Lectura de expresiones',
    ar: 'القسمة — قراءة التعابير',
    fr: 'Division — Lecture des expressions',
    bn: 'ভাগ — রাশি পড়া',
    pt: 'Divisão — Leitura de expressões',
    ur: 'تقسیم — عبارتیں پڑھنا',
    id: 'Pembagian — Membaca ekspresi',
    de: 'Division — Terme lesen',
    ja: '除法 — 式を読む',
    ko: '나눗셈 — 식 읽기',
    tr: 'Bölme — İfade okuma',
    vi: 'Phép chia — Đọc biểu thức',
    ta: 'வகுத்தல் — கோவைகளை வாசித்தல்',
    te: 'భాగహారం — వ్యక్తీకరణలను చదవడం',
    mr: 'भागाकार — व्यंजके वाचणे',
    ms: 'Pembahagian — Membaca ungkapan',
    he: 'חילוק — קריאת ביטויים',
    pl: 'Dzielenie — Odczytywanie wyrażeń',
    uk: 'Ділення — Читання виразів',
  },
});
