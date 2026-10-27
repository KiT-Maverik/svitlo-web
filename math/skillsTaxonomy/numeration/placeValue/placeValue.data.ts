import { buildSkillGroupConfig } from '@/utils';
import { placeValue_SkillGroup_Ids } from './placeValue.ids';
import { placeValue_Skills_Ids } from './skills/index.ids';

export const placeValue_SkillGroup_Data = buildSkillGroupConfig({
  id: placeValue_SkillGroup_Ids.placeValue,
  name: {
    en: "Place value",
    zh: "数位与位值",
    hi: "स्थानीय मान",
    es: "Valor posicional",
    ar: "القيمة المكانية",
    fr: "Valeur de position",
    bn: "স্থানীয় মান",
    pt: "Valor posicional",
    ur: "مقامی قدر",
    id: "Nilai tempat",
    de: "Stellenwert",
    ja: "位取り",
    ko: "자릿값",
    tr: "Basamak değeri",
    vi: "Giá trị theo hàng",
    ta: "இடமதிப்பு",
    te: "స్థాన విలువ",
    mr: "स्थानिक किंमत",
    ms: "Nilai tempat",
    he: "ערך המקום",
    pl: "Wartość pozycyjna",
    uk: "Розрядність",
  },
  skillIds: placeValue_Skills_Ids,
});
