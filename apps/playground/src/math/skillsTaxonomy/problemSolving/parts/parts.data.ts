import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';
import { parts_SkillGroup_Ids } from './parts.ids';
import { parts_Skills_Ids } from './skills/index.ids';

export const parts_SkillGroup_Data = buildSkillGroupConfig({
  id: parts_SkillGroup_Ids.parts,
  name: {
    en: "Part-whole problems",
    "lt": "Dalies ir visumos uždaviniai",
    "lv": "Daļas un veseluma uzdevumi",
    "et": "Osa ja terviku ülesanded",
    "be": "Задачы на частку і цэлае",
    "ka": "ნაწილისა და მთელის ამოცანები",
    "kk": "Бөлік пен бүтінге арналған есептер",
    zh: "整体与部分问题",
    hi: "भाग और पूर्ण की समस्याएँ",
    es: "Problemas de partes y todo",
    ar: "مسائل الجزء والكل",
    fr: "Problèmes de parties et de tout",
    bn: "অংশ ও সম্পূর্ণের সমস্যা",
    pt: "Problemas de partes e todo",
    ur: "حصے اور کل کے مسائل",
    id: "Soal bagian dan keseluruhan",
    de: "Teil-Ganzes-Aufgaben",
    ja: "部分と全体の文章題",
    ko: "부분과 전체 문제",
    tr: "Parça-bütün problemleri",
    vi: "Bài toán phần và toàn thể",
    ta: "பகுதி மற்றும் முழுமைக் கணக்குகள்",
    te: "భాగం మరియు మొత్తం సమస్యలు",
    mr: "भाग व पूर्ण समस्या",
    ms: "Masalah bahagian dan keseluruhan",
    he: "בעיות חלק ושלם",
    pl: "Zadania o części i całości",
    uk: "Задачі на частини й ціле",
  },
  skillIds: parts_Skills_Ids,
});
