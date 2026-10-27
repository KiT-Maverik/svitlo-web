import { buildSkillGroupConfig } from '@/utils';
import { perimeter_Ids } from './perimeter.ids';
import { perimeter_Skills_Ids } from './skills/index.ids';

export const perimeter = buildSkillGroupConfig({
  id: perimeter_Ids.perimeter,
  name: {
    "en-US": "Perimeter",
    "zh-Hans-CN": "周长",
    "hi-IN": "परिमाप",
    "es-ES": "Perímetro",
    "ar-SA": "المحيط",
    "fr-FR": "Périmètre",
    "bn-BD": "পরিসীমা",
    "pt-BR": "Perímetro",
    "ur-PK": "محیط",
    "id-ID": "Keliling",
    "de-DE": "Umfang",
    "ja-JP": "周の長さ",
    "ko-KR": "둘레",
    "tr-TR": "Çevre",
    "vi-VN": "Chu vi",
    "ta-IN": "சுற்றளவு",
    "te-IN": "చుట్టుకొలత",
    "mr-IN": "परिमिती",
    "ms-MY": "Perimeter",
    "he-IL": "היקף",
    "pl-PL": "Obwód",
    "uk-UA": "Периметр",
  },
  skillIds: perimeter_Skills_Ids,
});
