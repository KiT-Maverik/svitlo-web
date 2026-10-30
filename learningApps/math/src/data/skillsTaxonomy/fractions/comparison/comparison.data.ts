import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';
import { comparison_SkillGroup_Ids } from './comparison.ids';
import { comparison_Skills_Ids } from './skills/index.ids';

export const comparison_SkillGroup_Data = buildSkillGroupConfig({
  id: comparison_SkillGroup_Ids.comparison,
  name: {
    en: "Comparing fractions",
    "lt": "Trupmenų palyginimas",
    "lv": "Daļu salīdzināšana",
    "et": "Murdude võrdlemine",
    "be": "Параўнаньне дробаў",
    "ka": "წილადების შედარება",
    "kk": "Бөлшектерді салыстыру",
    zh: "分数的比较",
    hi: "भिन्नों की तुलना",
    es: "Comparación de fracciones",
    ar: "مقارنة الكسور",
    fr: "Comparaison de fractions",
    bn: "ভগ্নাংশের তুলনা",
    pt: "Comparação de frações",
    ur: "کسروں کا موازنہ",
    id: "Perbandingan pecahan",
    de: "Brüche vergleichen",
    ja: "分数の比較",
    ko: "분수 비교",
    tr: "Kesirleri karşılaştırma",
    vi: "So sánh phân số",
    ta: "பின்னங்களை ஒப்பிடுதல்",
    te: "భిన్నాల పోలిక",
    mr: "अपूर्णांकांची तुलना",
    ms: "Perbandingan pecahan",
    he: "השוואת שברים",
    pl: "Porównywanie ułamków",
    uk: "Порівняння дробів",
  },
  skillIds: comparison_Skills_Ids,
  description: { methodological: "Comparing the magnitudes of fractional parts relative to the same whole while holding either the numerator or denominator fixed." },
});
