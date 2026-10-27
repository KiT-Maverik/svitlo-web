import { buildSkillGroupConfig } from '@/utils';
import { cardinality_SkillGroup_Ids } from './cardinality.ids';
import { cardinality_Skills_Ids } from './skills/index.ids';

export const cardinality_SkillGroup_Data = buildSkillGroupConfig({
  id: cardinality_SkillGroup_Ids.cardinality,
  name: {
    "en-US": "Cardinality",
    "zh-Hans-CN": "基数与数量",
    "hi-IN": "वस्तुओं की संख्या",
    "es-ES": "Cardinalidad",
    "ar-SA": "عدد العناصر",
    "fr-FR": "Cardinalité",
    "bn-BD": "বস্তুর সংখ্যা",
    "pt-BR": "Cardinalidade",
    "ur-PK": "اشیا کی تعداد",
    "id-ID": "Banyaknya benda",
    "de-DE": "Anzahl der Elemente",
    "ja-JP": "ものの個数",
    "ko-KR": "사물의 개수",
    "tr-TR": "Nesnelerin sayısı",
    "vi-VN": "Số lượng phần tử",
    "ta-IN": "பொருள்களின் எண்ணிக்கை",
    "te-IN": "వస్తువుల సంఖ్య",
    "mr-IN": "वस्तूंची संख्या",
    "ms-MY": "Bilangan objek",
    "he-IL": "כמות הפריטים",
    "pl-PL": "Liczebność",
    "uk-UA": "Кількість",
  },
  skillIds: cardinality_Skills_Ids,
});
