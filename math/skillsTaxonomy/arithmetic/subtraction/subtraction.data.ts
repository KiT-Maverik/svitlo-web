import { buildSkillGroupConfig } from '@/utils';
import { subtraction_SkillGroup_Ids } from './subtraction.ids';
import { subtraction_Skills_Ids } from './skills/index.ids';

export const subtraction_SkillGroup_Data = buildSkillGroupConfig({
  id: subtraction_SkillGroup_Ids.subtraction,
  name: {
    "en-US": "Subtraction",
    "zh-Hans-CN": "减法",
    "hi-IN": "घटाव",
    "es-ES": "Resta",
    "ar-SA": "الطرح",
    "fr-FR": "Soustraction",
    "bn-BD": "বিয়োগ",
    "pt-BR": "Subtração",
    "ur-PK": "تفریق",
    "id-ID": "Pengurangan",
    "de-DE": "Subtraktion",
    "ja-JP": "減法",
    "ko-KR": "뺄셈",
    "tr-TR": "Çıkarma",
    "vi-VN": "Phép trừ",
    "ta-IN": "கழித்தல்",
    "te-IN": "తీసివేత",
    "mr-IN": "वजाबाकी",
    "ms-MY": "Penolakan",
    "he-IL": "חיסור",
    "pl-PL": "Odejmowanie",
    "uk-UA": "Віднімання",
  },
  skillIds: subtraction_Skills_Ids,
});
