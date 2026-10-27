import { buildSkillDomainConfig } from '@/utils';
import { geometry_Ids } from './geometry.ids';
import { geometry_Groups_Ids } from './index.ids';

export const geometry = buildSkillDomainConfig({
  id: geometry_Ids.geometry,
  name: {
    "en-US": "Geometry",
    "zh-Hans-CN": "几何",
    "hi-IN": "ज्यामिति",
    "es-ES": "Geometría",
    "ar-SA": "الهندسة",
    "fr-FR": "Géométrie",
    "bn-BD": "জ্যামিতি",
    "pt-BR": "Geometria",
    "ur-PK": "ہندسہ",
    "id-ID": "Geometri",
    "de-DE": "Geometrie",
    "ja-JP": "幾何学",
    "ko-KR": "기하학",
    "tr-TR": "Geometri",
    "vi-VN": "Hình học",
    "ta-IN": "வடிவியல்",
    "te-IN": "జ్యామితి",
    "mr-IN": "भूमिती",
    "ms-MY": "Geometri",
    "he-IL": "גאומטריה",
    "pl-PL": "Geometria",
    "uk-UA": "Геометрія",
  },
  groupIds: geometry_Groups_Ids,
});
