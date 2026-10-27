import { buildSkillGroupConfig } from '@/utils';
import { sequence_SkillGroup_Ids } from './sequence.ids';
import { sequence_Skills_Ids } from './skills/index.ids';

export const sequence_SkillGroup_Data = buildSkillGroupConfig({
  id: sequence_SkillGroup_Ids.sequence,
  name: {
    "en-US": "Number sequences",
    "zh-Hans-CN": "数列",
    "hi-IN": "संख्या क्रम",
    "es-ES": "Secuencias numéricas",
    "ar-SA": "تسلسل الأعداد",
    "fr-FR": "Suites de nombres",
    "bn-BD": "সংখ্যার ধারা",
    "pt-BR": "Sequências numéricas",
    "ur-PK": "اعداد کی ترتیب",
    "id-ID": "Urutan bilangan",
    "de-DE": "Zahlenfolgen",
    "ja-JP": "数の並び",
    "ko-KR": "수의 순서",
    "tr-TR": "Sayı dizileri",
    "vi-VN": "Dãy số",
    "ta-IN": "எண் வரிசைகள்",
    "te-IN": "సంఖ్యా క్రమాలు",
    "mr-IN": "संख्यांचे क्रम",
    "ms-MY": "Turutan nombor",
    "he-IL": "רצפי מספרים",
    "pl-PL": "Ciągi liczbowe",
    "uk-UA": "Числові послідовності",
  },
  skillIds: sequence_Skills_Ids,
});
