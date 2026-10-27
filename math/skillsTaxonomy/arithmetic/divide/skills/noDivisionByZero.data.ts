import { buildSkillConfig } from '@/utils';
import { divide_Skills_Ids } from './index.ids';

export const noDivisionByZero_Skill_Data = buildSkillConfig({
  id: divide_Skills_Ids.noDivisionByZero,
  name: {
    en: "Division — Division by Zero",
    zh: "除法 — 除以零",
    hi: "भाग — शून्य से भाग",
    es: "División — División entre cero",
    ar: "القسمة — القسمة على صفر",
    fr: "Division — Division par zéro",
    bn: "ভাগ — শূন্য দিয়ে ভাগ",
    pt: "Divisão — Divisão por Zero",
    ur: "تقسیم — صفر سے تقسیم",
    id: "Pembagian — Pembagian dengan nol",
    de: "Division — Division durch null",
    ja: "除法 — ゼロで割る",
    ko: "나눗셈 — 0으로 나누기",
    tr: "Bölme — Sıfıra bölme",
    vi: "Phép chia — Chia cho không",
    ta: "வகுத்தல் — பூச்சியத்தால் வகுத்தல்",
    te: "భాగహారం — సున్నాతో భాగించడం",
    mr: "भागाकार — शून्याने भागणे",
    ms: "Pembahagian — Bahagi dengan sifar",
    he: "חילוק — חילוק באפס",
    pl: "Dzielenie — Dzielenie przez Zero",
    uk: "Ділення — Ділення на нуль",
  },
});
