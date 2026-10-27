import { buildSkillGroupConfig } from '@/utils';
import { area_Ids } from './area.ids';
import { area_Skills_Ids } from './skills/index.ids';

export const area = buildSkillGroupConfig({
  id: area_Ids.area,
  name: {
    "en-US": "Area",
    "zh-Hans-CN": "面积",
    "hi-IN": "क्षेत्रफल",
    "es-ES": "Área",
    "ar-SA": "المساحة",
    "fr-FR": "Aire",
    "bn-BD": "ক্ষেত্রফল",
    "pt-BR": "Área",
    "ur-PK": "رقبہ",
    "id-ID": "Luas",
    "de-DE": "Flächeninhalt",
    "ja-JP": "面積",
    "ko-KR": "넓이",
    "tr-TR": "Alan",
    "vi-VN": "Diện tích",
    "ta-IN": "பரப்பளவு",
    "te-IN": "వైశాల్యం",
    "mr-IN": "क्षेत्रफळ",
    "ms-MY": "Luas",
    "he-IL": "שטח",
    "pl-PL": "Pole powierzchni",
    "uk-UA": "Площа",
  },
  skillIds: area_Skills_Ids,
});
