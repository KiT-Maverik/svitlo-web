import { buildSkillGroupConfig } from '@/utils';
import { cardinality_SkillGroup_Ids } from './cardinality.ids';
import { cardinality_Skills_Ids } from './skills/index.ids';

export const cardinality_SkillGroup_Data = buildSkillGroupConfig({
  id: cardinality_SkillGroup_Ids.cardinality,
  name: {
    en: "Cardinality",
    "lt": "Kiekybinis skaičiavimas",
    "lv": "Skaita noteikšana",
    "et": "Hulga suuruse määramine",
    "be": "Вызначэньне колькасьці",
    "ka": "რაოდენობის განსაზღვრა",
    "kk": "Санды анықтау",
    zh: "基数与数量",
    hi: "वस्तुओं की संख्या",
    es: "Cardinalidad",
    ar: "عدد العناصر",
    fr: "Cardinalité",
    bn: "বস্তুর সংখ্যা",
    pt: "Cardinalidade",
    ur: "اشیا کی تعداد",
    id: "Banyaknya benda",
    de: "Anzahl der Elemente",
    ja: "ものの個数",
    ko: "사물의 개수",
    tr: "Nesnelerin sayısı",
    vi: "Số lượng phần tử",
    ta: "பொருள்களின் எண்ணிக்கை",
    te: "వస్తువుల సంఖ్య",
    mr: "वस्तूंची संख्या",
    ms: "Bilangan objek",
    he: "כמות הפריטים",
    pl: "Liczebność",
    uk: "Кількість",
  },
  skillIds: cardinality_Skills_Ids,
});
