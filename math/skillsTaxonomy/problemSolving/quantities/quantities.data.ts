import { buildSkillGroupConfig } from '@/utils';
import { quantities_SkillGroup_Ids } from './quantities.ids';
import { quantities_Skills_Ids } from './skills/index.ids';

export const quantities_SkillGroup_Data = buildSkillGroupConfig({
  id: quantities_SkillGroup_Ids.quantities,
  name: {
    en: "Quantity problems",
    "lt": "Dydžių uždaviniai",
    "lv": "Lielumu uzdevumi",
    "et": "Suurustega ülesanded",
    "be": "Задачы на велічыні",
    "ka": "სიდიდეების ამოცანები",
    "kk": "Шамаларға арналған есептер",
    zh: "数量关系应用题",
    hi: "राशियों की समस्याएँ",
    es: "Problemas de magnitudes",
    ar: "مسائل الكميات",
    fr: "Problèmes de grandeurs",
    bn: "পরিমাণের সমস্যা",
    pt: "Problemas de grandezas",
    ur: "مقداروں کے مسائل",
    id: "Soal besaran",
    de: "Größenaufgaben",
    ja: "量に関する文章題",
    ko: "양에 관한 문제",
    tr: "Ölçü ve miktar problemleri",
    vi: "Bài toán đại lượng",
    ta: "அளவுக் கணக்குகள்",
    te: "పరిమాణ సమస్యలు",
    mr: "परिमाणांच्या समस्या",
    ms: "Masalah kuantiti",
    he: "בעיות כמויות",
    pl: "Zadania o wielkościach",
    uk: "Задачі на величини",
  },
  skillIds: quantities_Skills_Ids,
});
