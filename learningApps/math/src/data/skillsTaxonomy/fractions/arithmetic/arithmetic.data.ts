import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';
import { arithmetic_SkillGroup_Ids } from './arithmetic.ids';
import { arithmetic_Skills_Ids } from './skills/index.ids';

export const arithmetic_SkillGroup_Data = buildSkillGroupConfig({
  id: arithmetic_SkillGroup_Ids.arithmetic,
  name: {
    en: "Operations with fractions",
    "lt": "Veiksmai su trupmenomis",
    "lv": "Darbības ar daļām",
    "et": "Tehted murdudega",
    "be": "Дзеяньні з дробамі",
    "ka": "მოქმედებები წილადებზე",
    "kk": "Бөлшектерге амалдар қолдану",
    zh: "分数运算",
    hi: "भिन्नों पर संक्रियाएँ",
    es: "Operaciones con fracciones",
    ar: "العمليات على الكسور",
    fr: "Calculs sur les fractions",
    bn: "ভগ্নাংশের হিসাব",
    pt: "Operações com frações",
    ur: "کسروں پر عمل",
    id: "Operasi pecahan",
    de: "Rechnen mit Brüchen",
    ja: "分数の計算",
    ko: "분수 연산",
    tr: "Kesirlerle işlemler",
    vi: "Phép tính với phân số",
    ta: "பின்னங்களின் கணக்கீடுகள்",
    te: "భిన్నాలపై గణనలు",
    mr: "अपूर्णांकांवरील क्रिया",
    ms: "Operasi pecahan",
    he: "פעולות בשברים",
    pl: "Działania na ułamkach",
    uk: "Обчислення з дробами",
  },
  skillIds: arithmetic_Skills_Ids,
  description: { methodological: "Changing the number of equal parts of the same whole through addition or subtraction with a common denominator." },
});
