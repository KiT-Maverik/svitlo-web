import { buildSkillGroupConfig } from '@/utils';
import { comparisons_SkillGroup_Ids } from './comparisons.ids';
import { comparisons_Skills_Ids } from './skills/index.ids';

export const comparisons_SkillGroup_Data = buildSkillGroupConfig({
  id: comparisons_SkillGroup_Ids.comparisons,
  name: {
    en: "Comparison problems",
    "lt": "Palyginimo uždaviniai",
    "lv": "Salīdzināšanas uzdevumi",
    "et": "Võrdlusülesanded",
    "be": "Задачы на параўнаньне",
    "ka": "შედარების ამოცანები",
    "kk": "Салыстыру есептері",
    zh: "比较类应用题",
    hi: "तुलना की समस्याएँ",
    es: "Problemas de comparación",
    ar: "مسائل المقارنة",
    fr: "Problèmes de comparaison",
    bn: "তুলনামূলক সমস্যা",
    pt: "Problemas de comparação",
    ur: "موازنے کے مسائل",
    id: "Soal perbandingan",
    de: "Vergleichsaufgaben",
    ja: "比較の文章題",
    ko: "비교 문제",
    tr: "Karşılaştırma problemleri",
    vi: "Bài toán so sánh",
    ta: "ஒப்பீட்டுக் கணக்குகள்",
    te: "పోలిక సమస్యలు",
    mr: "तुलनेच्या समस्या",
    ms: "Masalah perbandingan",
    he: "בעיות השוואה",
    pl: "Zadania na porównywanie",
    uk: "Задачі на порівняння",
  },
  skillIds: comparisons_Skills_Ids,
});
