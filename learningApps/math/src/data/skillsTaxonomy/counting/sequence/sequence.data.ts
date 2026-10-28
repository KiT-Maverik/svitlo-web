import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';
import { sequence_SkillGroup_Ids } from './sequence.ids';
import { sequence_Skills_Ids } from './skills/index.ids';

export const sequence_SkillGroup_Data = buildSkillGroupConfig({
  id: sequence_SkillGroup_Ids.sequence,
  name: {
    en: "Number sequences",
    "lt": "Skaičių sekos",
    "lv": "Skaitļu virknes",
    "et": "Arvujadad",
    "be": "Лікавыя пасьлядоўнасьці",
    "ka": "რიცხვთა მიმდევრობები",
    "kk": "Сандар тізбегі",
    zh: "数列",
    hi: "संख्या क्रम",
    es: "Secuencias numéricas",
    ar: "تسلسل الأعداد",
    fr: "Suites de nombres",
    bn: "সংখ্যার ধারা",
    pt: "Sequências numéricas",
    ur: "اعداد کی ترتیب",
    id: "Urutan bilangan",
    de: "Zahlenfolgen",
    ja: "数の並び",
    ko: "수의 순서",
    tr: "Sayı dizileri",
    vi: "Dãy số",
    ta: "எண் வரிசைகள்",
    te: "సంఖ్యా క్రమాలు",
    mr: "संख्यांचे क्रम",
    ms: "Turutan nombor",
    he: "רצפי מספרים",
    pl: "Ciągi liczbowe",
    uk: "Числові послідовності",
  },
  skillIds: sequence_Skills_Ids,
});
