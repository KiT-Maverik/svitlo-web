import { buildSkillDomainConfig } from '@/utils';
import { arithmetic_Ids } from './arithmetic.ids';
import { arithmetic_Groups_Ids } from './index.ids';

export const arithmetic = buildSkillDomainConfig({
  id: arithmetic_Ids.arithmetic,
  name: {
    "en-US": "Arithmetic",
    "zh-Hans-CN": "算术",
    "hi-IN": "अंकगणित",
    "es-ES": "Aritmética",
    "ar-SA": "الحساب",
    "fr-FR": "Arithmétique",
    "bn-BD": "পাটিগণিত",
    "pt-BR": "Aritmética",
    "ur-PK": "حساب",
    "id-ID": "Aritmetika",
    "de-DE": "Arithmetik",
    "ja-JP": "算術",
    "ko-KR": "산술",
    "tr-TR": "Aritmetik",
    "vi-VN": "Số học",
    "ta-IN": "எண்கணிதம்",
    "te-IN": "అంకగణితం",
    "mr-IN": "अंकगणित",
    "ms-MY": "Aritmetik",
    "he-IL": "חשבון",
    "pl-PL": "Arytmetyka",
    "uk-UA": "Арифметика",
  },
  groupIds: arithmetic_Groups_Ids,
});
