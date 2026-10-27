import { buildSkillConfig } from '@/utils';
import { expressions_Skills_Ids } from './index.ids';

export const identifyExpressionError_Skill_Data = buildSkillConfig({
  id: expressions_Skills_Ids.identifyExpressionError,
  name: {
    en: "Identifying errors in the order of operations",
    zh: "识别运算顺序错误",
    hi: "संचालन क्रम की गलतियाँ पहचानना",
    es: "Identificar errores en el orden de las operaciones",
    ar: "اكتشاف أخطاء ترتيب العمليات",
    fr: "Repérer les erreurs de priorité opératoire",
    bn: "ক্রিয়ার ক্রমের ভুল শনাক্ত করা",
    pt: "Identificar erros na ordem das operações",
    ur: "عملیات کی ترتیب میں غلطیاں پہچاننا",
    id: "Mengidentifikasi kesalahan urutan operasi",
    de: "Fehler bei der Reihenfolge von Rechenoperationen erkennen",
    ja: "計算の順序の誤りを見つける",
    ko: "연산 순서 오류 찾기",
    tr: "İşlem önceliği hatalarını belirleme",
    vi: "Nhận biết lỗi về thứ tự phép tính",
    ta: "செயல்களின் வரிசைப் பிழைகளைக் கண்டறிதல்",
    te: "గణిత చర్యల క్రమంలోని తప్పులను గుర్తించడం",
    mr: "क्रियांच्या क्रमातील चुका ओळखणे",
    ms: "Mengenal pasti kesilapan tertib operasi",
    he: "זיהוי שגיאות בסדר פעולות החשבון",
    pl: "Rozpoznawanie błędów w kolejności działań",
    uk: "Виявлення помилок у порядку арифметичних дій",
  },
});
